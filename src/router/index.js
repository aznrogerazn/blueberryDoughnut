// Router Entry
// v0.1.1

// Libraries
import Vue from 'vue';
import Router from 'vue-router';

// Components/Pages
import HomePage from '@/components/HomePage';
import AboutPage from '@/components/AboutPage';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: HomePage, props: function(route) { return { contents: route } } },
    { path: '/about', component: AboutPage, props: function(route) { return { contents: route } } }
  ]
});
