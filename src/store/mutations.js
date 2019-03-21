import {RECEIVE_ADDRESS,RECEIVE_SHOPS,RECEIVE_CATEGORYS,SAVE_USER,RECEIVE_LOGINOUT} from './mutation-types'

export default  {
  [RECEIVE_ADDRESS] (state,{address}) {
    state.address =address
  },
  [RECEIVE_SHOPS] (state,{shops}) {
    state.shops =shops
  },
  [RECEIVE_CATEGORYS] (state,{categorys}) {
    state.categorys =categorys
  },
  [SAVE_USER](state,{user}){
    state.user = user
  },
  [RECEIVE_LOGINOUT](state,{user}){
    state.user = {}
  }
}
