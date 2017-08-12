/**
 * VUEX Store Definition
 * v0.1.1
 * r.w. 2017
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

var store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        // exampleCommitEvent (state: State, payload: any) {
        //     state.prop = payload;
        // },
        toggleMenu (state) {
            state.count ++;
        }
    }
});

export default store;