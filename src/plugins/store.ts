import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

import { RootState } from "@types";
import { search } from "../store/modules/search";


Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: "0.1.0",
  },
  modules: {
    search
  },
  strict: process.env.NODE_ENV !== "production"
};

export default new Vuex.Store<RootState>(store);