<template>
  <div class="persistent pageLogoLayer">
    <div class="float">
        <div class="onCorners topLeft">
            <router-link to="/">
                <img :class="pageLogoClass" src="assets/index__pageLogo.svg"/>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'default',
    data () {
        return {

        }
    },
    props: {
        contents: {
            required: false,
            type: Object
        }
    },
    computed: {
        pageLogoClass () {
            switch (this.pageLogoState) {
                case 0:
                    return 'pageLogo'
                case 1:
                    return 'pageLogo up'
                case 2: 
                    return 'pageLogo'
                default:
                    return 'pageLogo'
            }
        },
        ...mapGetters({
            pageLogoState: 'pageLogoState'
        })
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

.pageLogoLayer
    +noPointer

    .pageLogo
        +autoPointer
        z-index: 9920
        transform: translate3d(8px,28px,0)
        width: 41px
        opacity: 0
        +homePageTransitionFast

    .pageLogo.up 
        opacity: 1
        transform: translate3d(8px,10px,0) scale(0.8)

    .pageLogo.inverted
        filter: invert(2) brightness(10) saturate(0) contrast(2)
</style>
