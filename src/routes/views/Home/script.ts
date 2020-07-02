import { State, Action, Getter } from "vuex-class";
import { Component } from "vue-property-decorator";

import { SearchState } from "@types";
import Layout from "@layouts/Main/index.vue";
import Form from "@components/Form/index.vue";
import { MVue } from "@types";


@Component({
  components: {
    Layout,
    Form
  }
})
export default class Home extends MVue {
  @State("search") searchState!: SearchState;
  @Action("searchInStorage") search;
  @Action("typing") setCurrentQuery;
  @Getter("allQueries") allQueries;

  get searchFail() {
    return this.searchState.errorReceive
      ? "Ошибка поиска"
      : "";
  }

  get result() {
    return this.searchState.result;
  }

  get loading() {
    return this.searchState.loading;
  }

  get query() {
    return this.searchState.query;
  }

  set query(val: string) {
    this.setCurrentQuery(val);
  }

  async handleSearchSubmit() {
    await this.search(this.$api);
  }
}
