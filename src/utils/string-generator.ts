import {
  EXCLUDED_LETTERS,
  ALPHABET_START_INDEX,
  ALPHABET_END_INDEX
} from "@constants/alphabet";


export default class StringGenerator {
  private alphabet: string;

  constructor() {
    this.alphabet = this.generateAlphabet();
  }

  private generateAlphabet() {
    let str = "";
    for (let letterCode = ALPHABET_START_INDEX;
      letterCode < ALPHABET_END_INDEX;
      letterCode++) {
      str += String.fromCharCode(letterCode);
    }
    return str + EXCLUDED_LETTERS.join("");
  }

  private getRandomLetter(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return this.alphabet[Math.floor(Math.random() * (max - min + 1)) + min];
  }

  public generate(n: number) {
    let str = "";
    for (let i = 0; i < n; i++) {
      str += this.getRandomLetter(0, this.alphabet.length - 1);
    }
    return str;
  }
}