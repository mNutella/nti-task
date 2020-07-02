import { ActionTree } from "vuex";

import { RootState, SearchState } from "@types";
import {
  RECEIVING_RESULT,
  RECEIVED_RESULT,
  RECEIVE_RESULT_ERROR,
  TYPING,
  TYPING_ERROR
} from "./mutation-types";


export const actions: ActionTree<SearchState, RootState> = {
  typing({ commit }, query) {
    try {
      const payload = query;
      commit(TYPING, payload);
    } catch (error) {
      commit(TYPING_ERROR);
    }
  },
  async searchInStorage({ commit, rootState }, api) {
    try {
      commit(RECEIVING_RESULT);
      const searchState = rootState as any; // Hack
      const { queriesCache, query } = searchState.search;

      if (!query) return commit(RECEIVED_RESULT, { query, count: 0 });

      if (query in queriesCache) {
        const payload = { query, count: queriesCache[query] };
        return commit(RECEIVED_RESULT, payload);
      }

      const count = await api.findAll("USERS", "VALUE", query);
      const payload = { query, count };
      commit(RECEIVED_RESULT, payload);
    } catch (error) {
      commit(RECEIVE_RESULT_ERROR);
    }
  }
};