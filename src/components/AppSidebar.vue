<template>
  <aside class="js-side-nav side-nav">
    <nav class="js-side-nav-container side-nav__container">
      <button class="js-menu-hide side-nav__hide material-icons">close</button>
      <header class="side-nav__header">
        Side Nav
      </header>
      <ul class="side-nav__content">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
      </ul>
    </nav>
  </aside>
</template>

<script>
  import { mapState } from 'vuex'
  import SideNav from '../assets/plugin/sideNav/side-nav'

  export default {
    mounted() {
      new SideNav()
    },
    computed: {
      /*...mapState('appShell/appSidebar', [
        'show',
        'title',
        'blocks'
      ]),
      sidebarStatus: {
        get() {
          return this.show
        },
        set(val) {
          if (val) {
            this.$emit('show-sidebar')
          }
          else {
            this.$emit('hide-sidebar')
          }
        }
      }*/
    },
    methods: {
      /*close() {
        this.sidebarStatus = false
      },
      closeAndGo(route) {
        this.$router.push(route)
        this.close()
      }*/
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
