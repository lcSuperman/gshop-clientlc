<template>
  <div>

    <mt-button  style="width: 100%" slot="left" @click="$router.back()">点击返回</mt-button>

    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="邮箱" placeholder="请输入邮箱" type="email" ></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" ></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" ></mt-field>
    <mt-field label="网站" placeholder="请输入网址" type="url" ></mt-field>
    <mt-field label="数字" placeholder="请输入数字" type="number" ></mt-field>
    <mt-field label="生日" placeholder="请输入生日" type="date" ></mt-field>
    <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" ></mt-field>
  </div>
</template>
<script>
  import { Field } from 'mint-ui';
  import { Header } from 'mint-ui';
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        username:''
      }
    },

    computed:{
      ...mapState(['user']),
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
