import BaseState from "./base";

export default interface SearchState extends BaseState {
  query: string
  result: number
  loading: boolean
  queriesCache: any
  errorTyping: boolean
  errorReceive: boolean
}
