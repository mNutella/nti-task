import { GB, MAX_BATCH_SIZE } from '@constants/db';
import StringGenerator from '@utils/string-generator';


export default class DB {
  private _db: Database;

  constructor(dbName, dbVersion, dbDesc, dbSize = 16 * GB) {
    this._db = this.connect(dbName, dbVersion, dbDesc, dbSize);
  }

  private executeSql(query: string, callback: SQLStatementCallback = () => { }) {
    this._db.transaction(function (t) {
      t.executeSql(query, [], callback);
    });
  }

  private connect(
    dbName: string,
    dbVersion: string,
    dbDesc: string,
    dbSize: number) {
    return window.openDatabase(dbName, dbVersion, dbDesc, dbSize);
  }

  public createTable(tableName: string, args: string[]) {
    if (!this._db) {
      return alert("Connection to Database is closed.");
    }

    this.executeSql(
      "CREATE TABLE IF NOT EXISTS " + tableName + "(" + args.join(', ') + ")"
    );
  }

  public deleteAllRecords(tableName: string) {
    this.executeSql("DELETE FROM " + tableName);
  }

  public createIndex(indexName: string, tableName: string, args: string[]) {
    this.executeSql(
      "CREATE INDEX IF NOT EXISTS "
      + indexName
      + " ON "
      + tableName
      + "(" + args.join(', ') + ")"
    );
  }

  public fillData(tableName: string, args: string[], count = 2000) {
    const strGenerator = new StringGenerator();

    for (let i = 0; i < count / MAX_BATCH_SIZE; i++) {
      let query = "INSERT INTO "
        + tableName
        + " (" + args.join(', ') + ") VALUES ";
      for (let j = 0; j < MAX_BATCH_SIZE; j++) {
        const valueString = strGenerator.generate(100);

        query += '("' + valueString + '"),';
      }

      this.executeSql(query.slice(0, -1));
    }
  }

  public init(
    tableName: string,
    indexName: string,
    tableArgs: string[],
    indexArgs: string[]) {
    this.createTable(tableName, tableArgs);
    this.createIndex(indexName, tableName, indexArgs);
  }

  public findAll(tableName: string, by: string, pattern: string) {
    return new Promise((resolve, reject) => {
      try {
        this.executeSql(
          "SELECT COUNT(*) FROM " + tableName + " WHERE " + by + ' LIKE "' + pattern + '%"',
          function (_, result) {
            const count = result.rows[0]["COUNT(*)"];
            resolve(count);
          });
      } catch (error) {
        reject(error);
      }
    });
  }
}