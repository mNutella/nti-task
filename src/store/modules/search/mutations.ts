import { MutationTree } from "vuex";

import { SearchState } from "@types";
import {
  RECEIVING_RESULT,
  RECEIVED_RESULT,
  RECEIVE_RESULT_ERROR,
  TYPING,
  TYPING_ERROR
} from "./mutation-types";


export const mutations: MutationTree<SearchState> = {
  [TYPING](state, payload) {
    state.query = payload;
  },
  [TYPING_ERROR](state) {
    state.errorTyping = true;
  },
  [RECEIVING_RESULT](state) {
    state.errorTyping = false;
    state.loading = true;
  },
  [RECEIVED_RESULT](state, { query, count }) {
    state.loading = false;
    if (query && !(query in state.queriesCache)) {
      const newCache = state.queriesCache;
      newCache[query] = count;
      state.queriesCache = { ...newCache };
    }
    state.result = count;
  },
  [RECEIVE_RESULT_ERROR](state) {
    state.errorTyping = true;
    state.loading = false;
  }
};