<template>
  <aside class="js-side-nav side-nav">
    <nav class="js-side-nav-container side-nav__container">
      <button class="js-menu-hide side-nav__hide material-icons">close</button>
      <header class="side-nav__header">
        Side Nav
      </header>
      <ul class="side-nav__content">
        <li>
          <router-link to="/detail/1">detail 1</router-link>
        </li>
        <li>
          <router-link to="/detail/2">detail 2</router-link>
        </li>
        <li>
          <router-link to="/detail/3">detail 3</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
  import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
  import SideNav from './plugin/side-nav'

  export default {
    name: 'appSidebar',
    mounted() {
      console.log(333)
      window.a = new SideNav()
    },
    computed: {
      ...mapState('appShell/appSidebar', ['show']),
      ...mapGetters('appShell/appSidebar', ['sidebarShow'])
    },
    methods: {
      ...mapActions('appShell/appSidebar', ['showSidebar', 'hideSidebar'])
    }
  }
</script>

<style lang="stylus" scoped>
  .side-nav
    position fixed
    left 0
    top 0
    z-index $app-sidebar-zindex
    width 100%
    height 100%
    overflow hidden
    pointer-events none
    &::before
      content ''
      display block
      position absolute
      left 0
      top 0
      width 100%
      height 100%
      background rgba(0,0,0,0.4)
      opacity 0
      will-change opacity
      transition opacity 0.3s cubic-bezier(0,0,0.3,1)
  
  .side-nav--visible
    pointer-events auto
    &.side-nav--animatable
      .side-nav__container
        transition transform 0.33s cubic-bezier(0,0,0.3,1)
    &::before
      opacity 1
    .side-nav__container
      transform none
  
  .side-nav__container
    position relative
    width 90%
    max-width 400px
    background #FFF
    height 100%
    box-shadow 2px 0 12px rgba(0,0,0,0.4)
    transform translateX(-102%)
    display flex
    flex-direction column
    will-change transform
  
  .side-nav--animatable
    .side-nav__container
      transition transform 0.13s cubic-bezier(0,0,0.3,1)
  
  .side-nav__hide
    position absolute
    left 16px
    top 16px
    z-index $app-sidebar-zindex
    background none
    border none
    color #FFF
    width 24px
    height 24px
    padding 0
    margin 0
  
  .side-nav__header
    height 200px
    background #EA2663
    color #FFF
    display flex
    padding 16px
    align-items flex-end
    font-size 24px
  
  .side-nav__content
    flex 1
    list-style none
    padding 0
    margin 0
    text-align left
    overflow-x hidden
    overflow-y auto
    -webkit-overflow-scrolling touch
    li
      height 48px
      line-height 48px
      padding 0 16px
      &:hover
        background #CCC
</style>
