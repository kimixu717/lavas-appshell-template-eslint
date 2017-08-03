<template>
  <div>
    <div class="content">
      <h2>content</h2>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  
  export default {
    name: 'home',
    props: {},
    methods: {
      ...mapActions('appShell/appHeader', [
        'setAppHeader'
      ])
    },
    async asyncData() {
      await new Promise((resolve, reject) => {
        setTimeout(resolve, 500)
      })
    },
    activated() {
      this.setAppHeader({
        show: true,
        title: 'Index',
        showMenu: true,
        showBack: false,
        showLogo: true,
        actions: [
          {
            icon: 'search',
            route: '/search'
          }
        ]
      })
    }
  }
</script>

<style lang="stylus" scoped>
  $text-color := rgba($material-theme.text-color, $material-theme.primary-text-percent)
  
  .content
    
    h2
      font-size 46px
      font-weight 500
    
    h2, h4
      color $text-color

</style>
