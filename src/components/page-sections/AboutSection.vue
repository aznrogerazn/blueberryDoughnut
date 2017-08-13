<template>
  <div class="aboutSection">
    <!--
      REMINDER: CSS Classes on slots are removed in Vue 2.0
                Remember to properly use wrapper elements
     -->
    <div class="leftWrapper">
        <slot name="left"></slot>
    </div>
    <div class="rightWrapper">
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
    props: {
        contents: {
            required: false,
            type: Object
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
        flex: 2
        background: $gradient0
    
    .rightWrapper
        +fullHeightPadded
        flex: 3
        background: $theme1

@media screen and (max-width: $mobileWidth)
    .aboutSection

        .leftWrapper
            // Left-side wrapper goes to top
        
        .rightWrapper
            // ...and right-side wrapper goes to bottom


</style>
