/**
 * VUEX Store Definition
 * v0.1.1
 * r.w. 2017
 */

import Vuex from 'vuex';

var store = new Vuex.store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count ++;
        }
    }
});

export default store;