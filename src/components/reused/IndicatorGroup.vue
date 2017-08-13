<template>
  <div class="indicatorGroup">
    <svg>

        <circle v-for="n in sections" class="circle" :cy="5 + (n * 20)" ></circle>
        
    </svg>
  </div>
</template>

<script>
export default {
    name: 'IndicatorGroup',
    data () {
        return {

        }
    },
    props: {
        sections: {
            type: Number,
            required: false,
            default: 5
        }
    },
    methods: {
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

    position: fixed
    top: 300px   // DEBUG
    left: 600px  // DEBUG

    svg
        width: 20px
        height: 240px

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
