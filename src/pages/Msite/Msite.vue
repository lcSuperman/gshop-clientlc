<template>
  <section class="msite">
    <!--首页头部-->
    <Header :title="address.name || '正在定位中...'">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </Header>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorys.length > 0">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index" >
              <a href="javascript:" class="link_to_food" v-for="(c,index) in categorys" :key="index">
              <div class="food_container">
                 <img :src="baseImgUrl+c.image_url">
              </div>
            <span>{{c.title}}</span>
          </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" alt="" v-else>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </section>
</template>
<script>
  import ShopList from '../../components/ShopList/ShopList.vue'
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'


  export default {
    data(){
      return {
        baseImgUrl: 'https://fuss10.elemecdn.com'
      }
    },
    components: {
      ShopList
    },
    mounted (){
      this.$store.dispatch('getShops')
      this.$store.dispatch('reqCategorys')

    },
    //创建二维数组
    computed: {
      ...mapState(['address','categorys']),

      categorysArr(){
       //获取所有商品分类的数组
        const {categorys} = this
        //遍历categorys数组，添加到两个小数组，再把小数组添加到大数组中
        const bigArr = []
        let smallArr = []

        categorys.forEach (c =>{
          //把小数组添加到大数组中
          if(smallArr.length === 0){
            bigArr.push(smallArr)
          }
          //把数据添加到小数组中
           smallArr.push(c)
           if(smallArr.length === 8){
             smallArr = []
           }

        })
        return bigArr
      }

    },
    watch: {
      categorys () { // categorys状态数据已经更新了(但界面还没有更新, 更新界面是最后异步执行)

        // 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新
        this.$nextTick(() => {
          // 创建swiper对象的时机? 必须在列表页面显示之后
          new Swiper ('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },

          })
        })
      }
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../comment/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
