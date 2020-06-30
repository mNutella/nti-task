import { Module } from "vuex";

import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { RootState, SearchState } from "@types";


const state: SearchState = {
  query: "",
  queriesCache: {},
  result: 0,
  loading: false,
  errorTyping: false,
  errorReceive: false
};

export const search: Module<SearchState, RootState> = {
  state,
  getters,
  actions,
  mutations
};
