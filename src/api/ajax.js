/*
用来发送ajax请求的函数模块
函数返回的是promise
包装axios
*/

import axios from 'axios'

export default function ajax(url,data={},type='GET'){
  return new Promise((resolve,reject) =>{
    //发送异步请求
    let promise = null
    if(type==='GET'){
      promise = axios.get(url,{
        params:data
      })
    }else {
      promise = axios.post(url,data)
    }
  //  请求成功
    promise
      .then(response =>{
        resolve(response.data)
      }).catch(error =>{
      //  出错
      alert('请求出错: '+error.message)
      })
  })

}


async function Login(){
  // const response = await ajax('./login',{name:'tom',pwd:'123'},'POST')
  // const result = response.data
  // if(result.code===0){
  //     //   成功
  //     }else{
  //     //  失败
  //     }

}
