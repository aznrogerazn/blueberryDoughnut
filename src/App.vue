<template>
  <div id="app">
    <transition name="page-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {  },
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
    handleRouteChange (newRoute) {
      // Determine if Toolbar.vue needs to be shown or not
      if (newRoute.path.indexOf('player') != -1) {
        // Is player
        this.showToolbar = false;
      } else {
        this.showToolbar = true;
      }
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
