import Vue from "vue";
import { Component } from "vue-property-decorator";

import Layout from "@layouts/Main/index.vue";


@Component({
  components: {
    Layout
  }
})
export default class NotFound extends Vue { }
