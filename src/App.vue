<template lang="pug">
  div
    router-view(:key="$route.fullPath")
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class App extends Vue {
  mounted() {
    this.$api.init(
      "USERS",
      "VALUE_INDEX",
      ["ID INTEGER PRIMARY KEY ASC", "VALUE CHAR(100)"],
      ["VALUE"]
    );
    this.$api.deleteAllRecords("USERS");

    /**
     * Third parameter count of rows by default it's 2000.
     * Indexing is slow.
     */
    this.$api.fillData("USERS", ["VALUE"]);
  }
}
</script>

<style lang="sass">
*,
*::before,
*::after
  box-sizing: border-box
</style>
