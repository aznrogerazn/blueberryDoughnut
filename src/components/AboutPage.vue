<template>
  <div class="">
    <AboutSection :themeRight="true" :index="0">
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
    <AboutSection :index="1">
        <div slot="left" class="contentWrapper left noOverflow">
            
            <img class="titleIconBig" src="assets/about_sectionMedias_titleIconBig.svg"/>

            <div class="titularSection">
                <!-- TODO: Update the image source here -->
                <img class="iconSmall" src="assets/about_sectionMedias_titleIcon.svg"/>
                <h1>學院影音</h1>
                <h2>MEDIA</h2>
            </div>

            <div class="subjectSection">
                <p>在創新創業風氣興盛後，臺大覺察學校創新教育的不足，遂於2014年成立創新設計學院，並於2015年秋季正式授課。</p>
                <p>為全台大共有的學院—D-School Structure 改設計。使創新概念最終成為現實可行的方案，確實實現。</p>
            </div>
            
            

        </div>
        <div slot="right" class="row">
            
                <div class="col" :style="{flex: '1'}">
                    <div class="colContentWrapper">
                        <div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/-DhG1NnmPLs?rel=0&amp;showinfo=0?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>
                    </div>
                    <div class="colContentWrapper inverted padded">
                        <h2>影片相關敘述</h2>
                        <p>在創新創業風氣興盛後,臺大覺察學校創新教育的不足，遂於2014年成立創新設計學院，並於2015年秋季正式授課。為全台大共有的學院—D-School Structure 改設計。使創新概念最終成為現實可行的方案，確實實現。</p>
                    </div>
                </div>

                <div class="col" :style="{flex: '1'}">
                    <div class="colContentWrapper padded">
                        <div class="titularSectionSmall">
                            <h2>其他的介紹在這</h2>
                            <h3>MEDIA</h3>
                        </div>
                        <p>為全台大共有的學院—D-School Structure 改設計。使創新概念最終成為現實可行的方案,確實實 現。為全台大共有的學院—D-School Structure 改設計。使創新概念最終成為現實可行的方案,確實實 現。</p>
                        <p>為全台大共有的學院—D-School Structure 改設計。使創新概念最終成為現實可行的方案,確實實 現。為全台大共有的學院—D-School Structure 改設計。使創新概念最終成為現實可行的方案,確實實 現。</p>
                    </div>
                </div>
            
        </div>
    </AboutSection>
    <AboutSection :index="2">
    
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
    },
    computed: {
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
    
    .titleIconBig
        position: fixed
        bottom: -8vw
        left: -5vw
        max-width: 48vw

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

// Multi-Column Typesetting
.row
    position: relative
    width: 100%
    height: calc(100% - 64px)
    padding: $pagePadding 0

// for elements under .col
.colContentWrapper
    margin: $pagePadding
    background: white
    min-height: 100px
    min-width: 200px
    
.colContentWrapper.inverted
    background: none
    outline: 2px solid white
    color: white

.colContentWrapper.padded
    padding: $pagePadding


.contentWrapper.left
    text-align: left

// Smaller titularSection
.titularSectionSmall
    margin: 4px 0 30px 0
    padding: 10px 0
    max-width: 240px

    h1, h2, h3, h4, h5
        color: $theme1

    .iconSmall
        width: 40px

.titularSectionSmall::after
    content: ' '
    display: block
    position: relative
    bottom: -5px
    left: 0
    width: 30%
    border-bottom: 3px solid $theme1


// TODO: Responsive layout



// Exclusive ones

.bigD
    max-width: 40vw

</style>
