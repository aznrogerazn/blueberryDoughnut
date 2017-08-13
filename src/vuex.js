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
        menuEnabled: false,
        pageLogoState: 0,     // 0: 'pageLogo', 1: 'pageLogo up', 2: 'pageLogo up inverted'
        pageSectionIndex: 0,  // Resets every route change
        allowScrolling: true  // Allows mouse wheel, controlled by <App>
    },
    getters: {
        menuEnabled: state => state.menuEnabled,
        pageLogoState: state => state.pageLogoState,
        pageSectionIndex: state => state.pageSectionIndex,
        allowScrolling: state => state.allowScrolling,
    },


    // Extremely important:
    // Mutation == SYNC
    // Action == ASYNC, call here
    
    // Register mutations here
    mutations: {
        // exampleCommitEvent (state: State, payload: any) {
        //     state.prop = payload;
        // },
        toggleMenu (state) {
            state.menuEnabled = !state.menuEnabled;
        },
        closeMenu (state) {
            state.menuEnabled = false;
        },
        changePageLogoState (state, payload) {
            if ((typeof payload) != 'number') return;
            state.pageLogoState = payload;
        },
        setPageSectionIndex (state, payload) {
            if ((typeof payload) != 'number') return;
            state.pageSectionIndex = payload;
        },
        toggleAllowScrolling (state, payload) {
            if (!payload) {
                state.allowScrolling = !state.allowScrolling;
            } else if (typeof payload === 'boolean') {
                state.allowScrolling = payload;
            }
        }
    },

    // Register actions here
    actions: {
        toggleMenu ({ commit }) {
            commit('toggleMenu')
        },
        closeMenu ({ commit }) {
            commit('closeMenu');
        },
        changePageLogoState ({ commit }, payload) {
            commit('changePageLogoState', payload);
        },
        setPageSectionIndex ({ commit }, payload) {
            commit('setPageSectionIndex', payload);
        },
        enableScrolling ({ commit }) {
            commit('toggleAllowScrolling', true);
        },
        disableScrolling ({ commit }) {
            commit('toggleAllowScrolling', false);
        }
    }
});

export default store;