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
import {Vuex, mapActions, mapGetters} from 'vuex';
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
  data () {
    return {
      scrolling: false
    }
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

      
    },
    pageSectionIndex (newVal) {
      if (!this.allowScrolling) return;
      // Auto-scroll
      let pageHeight = (window.innerHeight + 0);
      this.disableScrolling();
      let scrollVal = pageHeight * this.pageSectionIndex;
      this.scrollToY(scrollVal, () => {
        setTimeout(() => {
            this.enableScrolling();
            console.log(this.pageSectionIndex);
        }, 500);
      });
    }
  },
  created () {
    window['app'] = this;
  },
  mounted () {
    // Detect route
    this.handleRouteChange(this.$route);
    window.addEventListener('mousewheel', this.handleMouseWheel);
  },
  computed: {
    ...mapGetters({
      allowScrolling: 'allowScrolling',
      pageSectionIndex: 'pageSectionIndex'
    })
  },
  methods: {
    ...mapActions({
      toggleMenu: 'toggleMenu',
      closeMenu: 'closeMenu',
      changePageLogoState: 'changePageLogoState',
      setPageSectionIndex: 'setPageSectionIndex',
      enableScrolling: 'enableScrolling',
      disableScrolling: 'disableScrolling'
    }),

    scrollToY (offset, cb) {

      $('body').velocity('scroll', {
        duration: 800,
        easing: 'easeInOutCirc',
        offset: offset + 'px',
        complete: () => {
            if (cb) cb();
        }});

    },

    handleMouseWheel (eV) {
      eV.preventDefault();
      
      console.log('<App> handleMouseWheel() called: \n allowScrolling = ' + this.allowScrolling + '\n pageSectionIndex = ' + this.pageSectionIndex);
      //
      if (!this.allowScrolling) {
          return;
      }

      let pageHeight = (window.innerHeight + 0);
      var body = document.body, html = document.documentElement;
      let maxHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
      let maxSectionHeight = maxHeight / pageHeight;
      console.log('maxSectionHeight == ' + maxSectionHeight);

      if (eV.deltaY > 0) {
          console.log('向下捲動');
          // 向下捲動
          if ((this.pageSectionIndex + 1) < maxSectionHeight) {
              this.setPageSectionIndex(this.pageSectionIndex + 1);
          } else {
              return;
          }
          this.disableScrolling();
          let scrollVal = pageHeight * this.pageSectionIndex;
          this.scrollToY(scrollVal, () => {
            setTimeout(() => {
                this.enableScrolling();
                console.log(this.pageSectionIndex);
            }, 500);
          });
      } else {
          console.log('向上捲動');
          // 向上捲動
          if (this.pageSectionIndex > 0) {
              this.setPageSectionIndex(this.pageSectionIndex - 1);
          } else {
              return;
          }
          this.disableScrolling();
          let scrollVal = pageHeight * this.pageSectionIndex;
          this.scrollToY(scrollVal, () => {
            setTimeout(() => {
                this.enableScrolling();
                console.log(this.pageSectionIndex);
            }, 500);
          });
      }

      // Callback should be implemented on individual component with following expression:
      // 1. Bind the computed properties to Vuex store:
      //    computed: { ...mapGetters({ pageSectionIndex: 'pageSectionIndex' })}
      // 2. Watch the props by:
      //    watch: { pageSectionIndex () { // do things here } }

    },
    handleRouteChange (newRoute) {
      console.warn('<App> handleRouteChange called')
      // Determine if Toolbar.vue needs to be shown or not
      if (newRoute.path.indexOf('player') != -1) {
        // Is player
        this.showToolbar = false;
      } else {
        this.showToolbar = true;
      }

      // Close the menu
      this.closeMenu();
      // Set page logo to displaying state
      this.changePageLogoState(1);
      // Reset scrollTop      
      this.setPageSectionIndex(0);

      // Temporarily disable interaction
      this.disableScrolling();

      // Scoll to top
      $('body').velocity('scroll', {
      duration: 800,
      easing: 'easeInOutCirc',
      offset: '0px',
      complete: () => {
          setTimeout(() => {
            this.enableScrolling();
          }, 500);
      }});

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
