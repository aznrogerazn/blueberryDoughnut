// Application Entry Point
// v0.1.72
import Vue from 'vue';
import VueComputedPromise from 'vue-computed-promise';
import Vuex from 'vuex';
import App from './App';
import Backendless from 'backendless';
import firebase from 'firebase';

// Router Instance
import router from './router';

// Vuex Store
import store from './vuex';

// Custom Libraries
import { Lang } from './language';
import CacheMachine from './cache';


Vue.config.productionTip = false;
Vue.use(VueComputedPromise);
Vue.use(Vuex);

window.addEventListener('load', () => {
  new Lang();
  
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    store,        // Store declared for all children
                  // Refer to this with this.$store in child
                  // components.
    router: router,
    template: '<App/>',
    components: { App }
  });

  console.log('Vue initialised');


  // Backendless API
  Backendless.initApp('FF01D8BC-F950-E491-FF67-D30C3CA26800' , '95C6FA43-5B67-1E67-FF96-65B4DB73E000');
  console.log('Backendless initialised');

  // Firebase API
  let fbOptions = {
    apiKey: 'AIzaSyBK4ltMPzMemFXT8qB-aN651xPpDr4pLW4',
    messagingSenderId: '639638102085'
  };
  var fbApp = firebase.initializeApp(fbOptions);
  window['fbApp'] = fbApp;
  window['apiReady'] = true;

  // Testing environment
  
  window['CacheMachine'] = CacheMachine;

});
