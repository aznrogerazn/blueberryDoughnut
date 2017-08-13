<template>
  <div class="aboutSection">
    <!--
      REMINDER: CSS Classes on slots are removed in Vue 2.0
                Remember to properly use wrapper elements
     -->
    <div :class="leftWrapperClass">
        <slot name="left"></slot>
    </div>
    <div :class="rightWrapperClass">
        <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'AboutSection',
    data () {
        return {

        }
    },
    computed: {
        leftWrapperClass () {
            if (this.themeLeft) {
                return 'leftWrapper themed'
            } else {
                return 'leftWrapper'
            }
        },
        rightWrapperClass () {
            if (this.themeRight) {
                return 'rightWrapper themed'
            } else {
                return 'rightWrapper'
            }
        }
    },
    props: {
        contents: {
            required: false,
            type: Object
        },
        themeLeft: {
            type: Boolean,
            default: false
        },
        themeRight: {
            type: Boolean,
            default: false
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

// Local Mixins
=fullHeight
    height: 100vh
=fullHeightPadded
    height: calc(100vh - 64px)
    padding-top: $pagePadding
    padding-bottom: $pagePadding

.aboutSection
    display: flex
    

    .leftWrapper
        +fullHeightPadded
        +flexCentre
        flex: 3
        background: $gradient0
    
    .rightWrapper
        +fullHeightPadded
        +flexCentre
        flex: 5
        background: $theme1

    .themed
        background: $bgColour !important

@media screen and (max-width: $mobileWidth)
    .aboutSection

        .leftWrapper
            // Left-side wrapper goes to top
        
        .rightWrapper
            // ...and right-side wrapper goes to bottom


</style>
