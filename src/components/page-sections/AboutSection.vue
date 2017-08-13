<template>
  <div :class="aboutSectionClass">
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
// Vuex
import { mapGetters } from 'vuex';

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
            } else if (this.flipLeft) {
                return 'leftWrapper flipped'
            } else {
                return 'leftWrapper'
            }
        },
        rightWrapperClass () {
            if (this.themeRight) {
                return 'rightWrapper themed'
            } else if (this.flipRight) {
                return 'rightWrapper flipped'
            } else {
                return 'rightWrapper'
            }
        },
        focused () {
            if (this.index === null) {
                // index is not supplied from the parent
                return true
            } else if (this.index === this.pageSectionIndex) {
                // index matches pageSectionIndex: is current section
                return true
            } else {
                // is not current section
                return false
            }
        },

        aboutSectionClass () {
            return this.focused ? 'aboutSection' : 'aboutSection blurred';
        },

        ...mapGetters({
            pageSectionIndex: 'pageSectionIndex'
        })
    },
    props: {
        contents: {
            required: false,
            type: Object
        },
        themeLeft: {
            type: Boolean,
            default: false,
            required: false
        },
        themeRight: {
            type: Boolean,
            default: false,
            required: false
        },
        flipLeft: {
            type: Boolean,
            default: false,
            required: false
        },
        flipRight: {
            type: Boolean,
            default: false,
            required: false
        },
        index: {                // Note: this prop will control the 
            type: Number,       //       fade-in/out animation by influencing
            default: null,      //       'focused' in computed.
            required: false
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

.aboutSection.blurred
    +hideNoPointer

.aboutSection
    display: flex
    +homePageTransitionFast

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
    
    .leftWrapper.flipped
        background: $theme1
    .rightWrapper.flipped
        background: $gradient0

@media screen and (max-width: $mobileWidth)
    .aboutSection

        .leftWrapper
            // Left-side wrapper goes to top
        
        .rightWrapper
            // ...and right-side wrapper goes to bottom


</style>
