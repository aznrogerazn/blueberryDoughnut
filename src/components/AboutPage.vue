<template>
  <div class="">
    <AboutSection :themeRight="true" :index="0">
        <!-- About -->
        <div slot="left" class="contentWrapper left">
            
            <div class="titularSection">
                <!-- TODO: Update the image source here -->
                <img class="iconSmall" src="assets/index__pageLogo.svg"/>
                <h1>關於學院</h1>
                <h4>ABOUT</h4>
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
        <!-- Media -->
        <div slot="left" class="contentWrapper left noOverflow">
            
            <img class="titleIconBig" src="assets/about_sectionMedias_titleIconBig.svg"/>

            <div class="titularSection">
                <!-- TODO: Update the image source here -->
                <img class="iconSmall" src="assets/about_sectionMedias_titleIcon.svg"/>
                <h1>學院影音</h1>
                <h4>MEDIA</h4>
            </div>

            <div class="subjectSection">
                <p>在創新創業風氣興盛後，臺大覺察學校創新教育的不足，遂於2014年成立創新設計學院，並於2015年秋季正式授課。</p>
                <p>為全台大共有的學院—D-School。使創新概念最終成為現實可行的方案，確實實現。</p>
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
                            <h3>Structure</h3>
                        </div>
                        <p>創新設計學院為台大的一級性功能單位*，也是臺灣第一個具有實體空間的虛擬學院，由校長任命學術副校長為執行長，統籌各院的需求成立跨領域的教學與研究的環境，在執行長之上有由台大的11個學院的院長組成的諮詢委員會，也任命副執行長(現為工學院院長、管理學院院長、社科學院院長)協助管理與規劃，在執行面有負責整體行政事務的行政組，負責課程規劃與執行的教學組，以及負責人文社會議題的人社組。
</p>
                        <p>為免於創意流於空想，將想像落實於生活，學院內部建置實作中心，提供應有的資源與設備；開設工作坊課程，協助學生執行創新構想時所需的技術技能。透過多元的製造設備能迅速打造設計的原型、反覆測試並修改設計。使創新概念最終成為現實可行的方案，確實實現。
</p>
                    </div>
                </div>
            
        </div>
    </AboutSection>
    <AboutSection :index="2">
        <!-- // Q&A -->
    </AboutSection>
    <AboutSection :index="3" :flipLeft="true" :flipRight="true">
        <!-- Chronology -->
        <div slot="left" class="contentWrapper flipped left noOverflow">
            <img class="titleIconMedium" src="assets/about_sectionChronology_titleIconBig.svg"/>

            <div class="titularSection">
                <!-- TODO: Update the image source here -->
                <img class="iconSmall" src="assets/about_sectionChronology_titleIcon.svg"/>
                <h1>學院年表</h1>
                <h4>Chronology</h4>
            </div>

            <div class="subjectSection">
                <p>一年中,會發生哪些事情呢?</p>
                <p>從熱呼呼的七八月,夏天催著滿身的汗水, 到九月十月,開學再次踏入令人懷念的校園</p>
            </div>
        </div>
        <div slot="right" class="contentWrapper">

        </div>
    </AboutSection>
    <AboutSection :index="4" :flipLeft="true" :flipRight="true">
        <!-- Members -->
        <div slot="left" class="contentWrapper flipped left noOverflow">
            <img class="titleIconMedHeight" src="assets/about_sectionMembers_titleIconBig.svg"/>

            <div class="titularSection">
                <!-- TODO: Update the image source here -->
                <img class="iconSmall" src="assets/about_sectionMembers_titleIcon.svg"/>
                <h1>成員介紹</h1>
                <h4>Members</h4>
            </div>

            <div class="subjectSection">
                <p>一年中,會發生哪些事情呢?</p>
                <p>從熱呼呼的七八月,夏天催著滿身的汗水, 到九月十月,開學再次踏入令人懷念的校園</p>
            </div>
        </div>
        <div slot="right" class="contentWrapper">

        </div>
    </AboutSection>

    <IndicatorGroup></IndicatorGroup>
  </div>
</template>

<script>
// Vuex
import { mapGetters, mapActions } from 'vuex';

import IndicatorGroup from '@/components/reused/IndicatorGroup';
import AboutSection from '@/components/page-sections/AboutSection';

import AboutSection1 from '@/components/page-sections/AboutSection1';

export default {
    name: 'AboutPage',
    components: {
        AboutSection,
        IndicatorGroup
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
        },
        ...mapActions({
            changePageLogoState: 'changePageLogoState',
            setMenuStyle: 'setMenuStyle',
            changePageLogoState: 'changePageLogoState'
        })
    },
    computed: {
        ...mapGetters({
            pageSectionIndex: 'pageSectionIndex'
        })
    },
    watch: {
        pageSectionIndex (newVal) {
            if (newVal >= 3) {
                this.setMenuStyle(1);
                this.changePageLogoState(2);
            } else {
                this.setMenuStyle(0);
                this.changePageLogoState(1);
            }
        }
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '../shared'

// =scaleHeaderType ($scale: 1)
//     font-size: $scale * 16px

.contentWrapper
    position: relative
    padding: 0 64px

    h1, h2, h3, h4, h5
        color: $theme1
    // h1
    //     +scaleHeaderType (3)
    
    .titleIconBig
        position: fixed
        bottom: -8vw
        left: -5vw
        max-width: 48vw
        pointer-events: none
    .titleIconMedium
        position: fixed
        bottom: -8vw
        left: 0vw
        max-width: 37.5vw
    .titleIconMedHeight
        position: fixed
        bottom: 0vw
        left: 6vw
        max-width: 24vw
    

    .titularSection
        margin: 4px 0 30px 0
        padding: 10px 0
        max-width: 240px

        .iconSmall
            width: 60px
            margin-bottom: 15px
            margin-top: -15px

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

// Flipped version
.contentWrapper.flipped
    position: relative
    padding: 0 64px
    color: white

    h1, h2, h3, h4, h5
        color: white
    // h1
    //     +scaleHeaderType (3)
    
    .titularSection::after
        border-bottom: 6px solid white

    .button
        position: relative
        display: inline-block
        padding: 8px 30px 6px 30px
        background: white
        color: $theme1
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
    // max-width: 240px

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
    max-height: 80vh

</style>
