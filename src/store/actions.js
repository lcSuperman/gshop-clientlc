import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  SAVE_USER,
  RECEIVE_LOGINOUT
} from './mutation-types'
import {
  reqAddress,
  reqShops,
  reqCategorys,
  reqUser,
  reqLogout
} from '../api/index'
export default {
  async getAddress({commit,state}){
    const {longitude, latitude} = state
    //  1. 发异步ajax请求
    const result = await reqAddress(longitude, latitude)
    if(result.code===0){
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },

  async reqCategorys({commit}){
    //  1. 发异步ajax请求
    const result = await reqCategorys()
    if(result.code===0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },

  async getShops({commit,state}){
    const {longitude, latitude} = state
    //  1. 发异步ajax请求
    const result = await reqShops(longitude, latitude)
    if(result.code===0){
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },

  //保存user的同步action
  saveUser({commit},user){
    commit(SAVE_USER,{user})
  },

  //获取用户信息的异步action
   async getUser({commit}){
     const result = await reqUser()
     if(result.code === 0){
       const user = result.data
       commit(SAVE_USER,{user})
     }
  },

  //退出登录的异步action

  async loginOut({commit}){
    //  1. 发异步ajax请求
    const result = await reqLogout()
    if(result.code===0){
      const user = result.data
      commit(RECEIVE_LOGINOUT,{user})
    }
  },



}
