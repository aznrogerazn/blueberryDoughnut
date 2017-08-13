

// Component with Vuex Template
// v0.0.1
import {mapGetters, mapActions, mapState} from 'vuex';

var component_default1 = {
    computed: mapState ([
        // Directly map the state to corresponding
        // one on the singleton:
        // this.dCache -> store.state.dCache
        'dCache'
    ])
};

var component_default2 = {
    computed: mapState ({
        // More customisable configuration:
        // (This one does the same thing as the former)
        dCache: state => state.dCache,
        // Passing string also works the same
        dCache2: 'dCache'
    })
};

var component_default3 = {
    computed: {
        whateverComputedProp1 () {
            // ditto.
        },
        whateverComputedProp2 () {
            // ditto.
        },
        // Use the stage-3 ES proposal to combine the object
        ...mapState ({
            // More customisable configuration:
            // (This one does the same thing as the former)
            dCache: state => state.dCache,
            // Passing string also works the same
            dCache2: 'dCache'
        })
    }
};

// In short, you either call $store.dispatch('actionName') directly,
// or use ...mapActions() to simplify the syntax into this.actionName()