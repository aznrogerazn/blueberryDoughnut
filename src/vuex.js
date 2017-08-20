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
        menuStyle: 0,
        pageLogoState: 0,         // 0: 'pageLogo', 1: 'pageLogo up', 2: 'pageLogo up inverted'
        pageSectionIndex: 0,      // Resets every route change
        allowScrolling: true,     // Allows mouse wheel, controlled by <App>
        controlledScrolling: true,// true: scroll-snap, false: natural free scrolling
    },
    getters: {
        menuEnabled: state => state.menuEnabled,
        menuStyle: state => state.menuStyle,
        pageLogoState: state => state.pageLogoState,
        pageSectionIndex: state => state.pageSectionIndex,
        allowScrolling: state => state.allowScrolling,
        controlledScrolling: state => state.controlledScrolling,
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
        setMenuStyle (state, payload) {
            if ((typeof payload) != 'number') return;
            state.menuStyle = payload;
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
        },
        toggleControlledScrolling (state, payload) {
            if (!payload) {
                state.controlledScrolling = !state.controlledScrolling;
            } else if (typeof payload === 'boolean') {
                state.controlledScrolling = payload;
            }
        },
    },

    // Register actions here
    actions: {
        toggleMenu ({ commit }) {
            commit('toggleMenu')
        },
        closeMenu ({ commit }) {
            commit('closeMenu');
        },
        setMenuStyle({ commit }, payload) {
            commit('setMenuStyle', payload)
        },
        changePageLogoState ({ commit }, payload) {
            commit('changePageLogoState', payload);
        },
        setPageSectionIndex ({ commit }, payload) {
            console.log('[store] setPageSectionIndex: ' + payload);
            commit('setPageSectionIndex', payload);
        },
        enableScrolling ({ commit }) {
            commit('toggleAllowScrolling', true);
        },
        disableScrolling ({ commit }) {
            commit('toggleAllowScrolling', false);
        },
        toggleControlledScrolling ({ commit }, payload) {
            commit('toggleControlledScrolling', payload);
        },
    }
});

export default store;