<template>
  <div class="">
    <AboutSection :themeRight="true">
        <div slot="left" class="contentWrapper left">
            
            <div class="titularSection">
                <!-- TODO: Update the image source here -->
                <img class="iconSmall" src="assets/index__pageLogo.svg"/>
                <h1>關於學院</h1>
                <h2>ABOUT</h2>
            </div>
            <div class="subjectSection">
                <p>D-School積極的與各院討論合作，讓不同系所的老師共同腦力激盪，一同架構學院課程的主幹。</p>
                <p>學生在D-School不僅可以學會解決問題的方法，更可利用學校提供的資源與設備，在實作中心把想法實踐！</p>
            </div>
            <div class="button">了解更多！</div>
            
        </div>
        <div slot="right">
            <img class="bigD" src="assets/about_sectionAbout_BigD.png"/>
        </div>
    </AboutSection>
    <AboutSection>
        <div slot="left">
            <h1>關於學院</h1>
        </div>
        <div slot="right">
            RIGHT_SLOT
        </div>
    </AboutSection>
  </div>
</template>

<script>
import AboutSection from '@/components/page-sections/AboutSection';
import AboutSection1 from '@/components/page-sections/AboutSection1';

export default {
    name: 'AboutPage',
    components: {
        AboutSection
    },
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
@import '../shared'

=scaleHeaderType ($scale: 1)
    font-size: $scale * 16px

.contentWrapper
    position: relative
    padding: 0 64px

    h1, h2, h3, h4, h5
        color: $theme1
    h1
        +scaleHeaderType (3)
    
    .titularSection
        margin: 4px 0 30px 0
        padding: 10px 0
        max-width: 240px

        .iconSmall
            width: 40px

    .titularSection::after
        content: ' '
        display: block
        position: relative
        bottom: -10px
        left: 0
        width: 30%
        border-bottom: 6px solid $theme1

    .subjectSection
        p
            padding: 8px 0

    .button
        position: relative
        display: inline-block
        padding: 8px 30px 6px 30px
        background: $theme1
        color: white
        font-weight: 700
        font-size: 16px

.contentWrapper.left
    text-align: left


// Exclusive ones

.bigD
    max-width: 40vw

</style>
