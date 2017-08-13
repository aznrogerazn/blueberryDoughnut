<template>
  <div id="app">
    <transition name="page-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    
    <HomeMenu @selectLang="selectLangHandler"></HomeMenu>
    <MenuButton></MenuButton>
    <PageLogo></PageLogo>
  </div>
</template>

<script>
// Required Libraries
import {Vuex, mapActions} from 'vuex';
// Vuex Store
import store from './vuex';
// Required, Global Components
import HomeMenu from '@/components/HomeMenu';
import MenuButton from '@/components/persistent/MenuButton';
import PageLogo from '@/components/persistent/PageLogo';

export default {
  name: 'App',
  components: {
    HomeMenu,
    MenuButton,
    PageLogo
  },
  store,          // Store declared for all children
                  // Refer to this with this.$store in child
                  // components.
  props: {
    showToolbar: {
      type: Boolean,
      default: true
    },
    showSearch: {
      type: Boolean,
      default: false
    },
  },
  watch: {
    '$route' (newValue, oldValue) {
      // Watch the route changes
      console.warn('[App] Route changed:');
      this.handleRouteChange(newValue);

      // Close the menu
      this.closeMenu();
      // Set page logo to displaying state
      this.changePageLogoState(1);
    }
  },
  created () {
    window['app'] = this;
  },
  mounted () {
    // Detect route
    this.handleRouteChange(this.$route);
  },
  methods: {
    ...mapActions({
      toggleMenu: 'toggleMenu',
      closeMenu: 'closeMenu',
      changePageLogoState: 'changePageLogoState'
    }),
    handleRouteChange (newRoute) {
      // Determine if Toolbar.vue needs to be shown or not
      if (newRoute.path.indexOf('player') != -1) {
        // Is player
        this.showToolbar = false;
      } else {
        this.showToolbar = true;
      }
    },
    /**
     * Handles language selection from child components
     */
    selectLangHandler (lang) {
      LANGDEF.selectLang(lang);
      this.$forceUpdate();
    }
  }

}
</script>

<style lang="sass">
/* Placeholder Web Fonts */
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans')
@import shared
/* Global Styling */
body 
  margin: 0
  padding: 0
  font-family: $font-stack
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale


#app 
  


/* Transitions */
.page-fade-enter-active, .page-fade-leave-active 
  transition: .3s cubic-bezier(.33,.85,.85,.99);
  

.page-fade-enter 
  opacity: 0;

.page-fade-leave-to 
  opacity: 0;

</style>
