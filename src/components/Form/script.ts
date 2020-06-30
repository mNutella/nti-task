import Vue from "vue";
import { Component, Prop, Emit } from "vue-property-decorator";


@Component({})
export default class Form extends Vue {
  @Prop(Array) readonly cache!: string[];
  @Prop(Boolean) readonly loading!: boolean;
  @Prop(Number) readonly result!: number;
  @Prop(String) readonly searchFail!: string;

  @Emit("submit")
  handleSubmit() { }

  @Emit("input")
  handleInputChange(val: string) {
    return val;
  }
}
