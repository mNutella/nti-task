import Vue from 'vue';
import DB from '@api/db';


export default class MVue extends Vue {
  $api!: DB;
}