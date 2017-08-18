<template>
  <div class="indicatorGroup" :style="{left:left,top:top}">
    <div>
        <svg :height="sections * 20 + 20">

            <circle v-for="n in sections" class="circle" :cy="(n * 20)" :style="determineFill(n)"></circle>
            
        </svg>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'IndicatorGroup',
    data () {
        return {

        }
    },
    props: {
        top: {
            type: String,
            required: false,
            default: '300px'
        },
        left: {
            type: String,
            required: false,
            default: '300px'
        },
        sections: {
            type: Number,
            required: false,
            default: 5
        }
    },
    computed: {
        ...mapGetters({
            pageSectionIndex: 'pageSectionIndex'
        })
    },
    methods: {
        determineFill (idx) {
            if ((idx - 1) === this.pageSectionIndex) {
                return {fill:"white"};
            } else {
                return {};
            }
        },
        getTranslation (name) {
            if (name.indexOf('.') != -1) {
                // Process object tree
                let ns = name.split('.');
                let ref = LANG[ns[0]];
                for (let i = 1; i < ns.length; ++i ) {
                    // Tree into the object
                    ref = ref[ns[i]];
                }
                return ref;
            }
            return LANG[name];
        }
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '../../shared'

.indicatorGroup
    display: flex
    flex-direction: column
    align-items: center
    position: fixed

    svg
        width: 20px

        .circle
            +homePageTransitionFast
            r: 5px
            cx: 5px
            stroke: $gradient0
            stroke-width: 1px
            fill: none
        
        .circle.hide
            +hideNoPointer

        .circle.focus
            fill: $gradient0

        .circle.default
            fill: $theme1
            stroke: $theme1
    

</style>
