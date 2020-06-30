import { GetterTree } from "vuex";

import { RootState, SearchState } from "@types";


export const getters: GetterTree<SearchState, RootState> = {
  allQueries(state) {
    const { queriesCache } = state;
    return Object.keys(queriesCache);
  }
};