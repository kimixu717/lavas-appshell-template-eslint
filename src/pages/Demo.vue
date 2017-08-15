<!--组件书写顺序：template -- script -- style-->
<!--注意：类名命名规则：短横杠-->
<template>
  <div class="detail-wrapper">
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
        <article class="detail-content text-xs-center">
          <header class="detail-title text-xs-center">
            Demo
          </header>
          <p>
            Progressive Web Apps are user experiences that have the reach of the web, and are:
            Reliable - Load instantly and never show the downasaur, even in uncertain network conditions.
            Fast - Respond quickly to user interactions with silky smooth animations and no janky scrolling.
          </p>
        </article>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    // 每个组件请都取名字：命名规则为驼峰
    name: 'detail',
    methods: {
      ...mapActions('appShell/appHeader', [
        'setAppHeader'
      ])
    },
    // 如若此页面进入需要依赖ajax，请务必按照此结构书写
    // 路由层面对asyncData进行了处理，只有此函数完成才会进入页面
    async asyncData() {
      await new Promise((resolve, reject) => {
        setTimeout(resolve, 500)
      })
    },
    // 如果meta未设置notkeepAlive则设置appshell在created，否则为activated
    created() {
      // 设置appshell，每个页面必有的设置
      this.setAppHeader({
        show: true,
        title: 'Demo',
        showMenu: false,
        showBack: true,
        showLogo: false,
        actions: [
          {
            icon: 'home',
            route: {
              name: 'home'
            }
          }
        ]
      })
    }
  }
</script>

<style lang="stylus" scoped>
  /*每个组件的样式文件都需写在组件内，且使用scoped属性*/
  /*公共样式无需写在组件内，请写在assets/style/public内*/
  .detail-content
    font-size 16px
    line-height 30px
    margin-top 30px

    .detail-title
      margin-bottom 20px
      padding 10px 0
      font-size 36px
      font-weight bold

</style>
