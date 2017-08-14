<template>
  <div class="page" ref="home" id="homePage">
    <HomeSection1 ref="section1"></HomeSection1>
    <HomeSection2 ref="section2"></HomeSection2>
    <HomeSection3 ref="section3"></HomeSection3>
    <HomeSection4 ref="section4"></HomeSection4>
    <HomeSection5 ref="section5"></HomeSection5>
    <div class="persistent">
        <div class="float">

            <div class="motionCircleWrapper">
                <svg class="motionCircle">
                    <circle :class="motionCircleMainClass" stroke-dasharray="6,5" :style="{stroke:'#FFF',strokeWidth:'1px'}"  />
                    <circle :class="motionCircle2Class" stroke-dasharray="6,5" :style="{stroke:'#FFF',strokeWidth:'1px'}"  />
                    <circle :class="motionCircle3Class" />
                    <circle :class="motionCircle4Class" />
                    <circle :class="motionCircle5Class" />
                </svg>
            </div>
            <div class="onCorners topLeft">
                <img :class="heroTitleClass" src="assets/index__heroTitle.svg"/>
                <div :class="titularBannerClass">
                    <div class="main">REACTION</div>
                    <div class="secondary">OF CREATIVITY</div>
                </div>
            </div>
            
            <div :class="tagline1Class">
                <span>創意，是永無止境探究世界的真實面貌</span>
                <div class="decor"></div>
            </div>
            <!-- Page TWO -->
            <div :class="giantQuoteClass">
                <img :style="{width:'60px'}" src="assets/index__iconQuoteStart.svg"/>
                <div class="text">
                    <h2 class="header">全台灣第一個虛擬學院</br>
                    創造跨領域教學環境</h2>
                    <div :style="{margin:'15px 0 15px 0',width:'90px',borderBottom:'4px solid #FF5559'}"></div>
                    <h5>在創新創業風氣興盛後，臺大覺察學校創新教育的不足，<br/>
                            遂於2014年成立創新設計學院，並於2015年秋季正式授課。</h5>
                </div>
                <img :style="{width:'60px'}" src="assets/index__iconQouteEnd.svg"/>
            </div>
            <div :class="langSelectClass">
                <img class="icon" src="assets/index__heroDoubleCircle.svg"/>
                <span class="label"><span class="selector" @click="selectEN">EN</span> / <span class="selector" @click="selectZH">中文</span></span>
            </div>
            
            <div class="centred" :style="{pointerEvents:'none'}">
                <div :class="centreLineWrapperClass">
                    <svg ref="centreLine" class="centreLine">
                        <line stroke-dasharray="6,5" :style="{stroke:'#FFF',strokeWidth:'2px'}" x1="0" y1="0" x2="100%" y2="0" />/>
                    </svg>
                </div>
                
                <img :class="centredCircleClass1" src="assets/index__heroCir1.svg"/>
                <img :class="centredCircleClass2" src="assets/index__heroCir2.svg"/>
                <img :class="centredCircleClass3" src="assets/index__heroCir3.svg"/>
                <img :class="centredCircleClass4" src="assets/index__heroCir4.svg"/>
                <img :class="centredCircleClass5" src="assets/index__heroCir5.svg"/>
                
                <div class="centredCircles">
                    <svg :class="leftSmallCircleClass">
                        <circle cx="27" cy="27" fill="#FF5559" r="27"></circle>
                    </svg>
                    <svg :class="rightSmallCircleClass">
                        <circle cx="27" cy="27" fill="#FF5559" r="27"></circle>
                    </svg>
                </div>
            </div>
            <div :class="bottomNavMouseClass">
                <img class="mouseIcon" src="assets/index__iconMouse.svg"/>
                <div class="caption">EXPLORE</div>
                <img class="arrowDown" src="assets/index__iconArrowDown.svg"/>
            </div>
            <div :class="rightNavMetreClass">
                <svg>
                    <line v-for="item in rightNavItems" :x1="item.x1" :y1="item.y1" :x2="item.x2" :y2="item.y2" stroke="white"></line>
                    
                </svg>
            </div>

            <div :class="indicatorClass">
                <svg>
                    <circle :class="indicatorCircleClass(1)"></circle>
                    <circle :class="indicatorCircleClass(2)"></circle>
                    <circle :class="indicatorCircleClass(3)"></circle>
                    <circle :class="indicatorCircleClass(4)"></circle>
                    <circle :class="indicatorCircleClass(5)"></circle>
                </svg>
            </div>
            <!-- Page THREE -->
            <div :class="centredInfoClass">

                <div class="introWrapper">
                    <div class="contentLimiter">
                        <div class="upper">
                            <img width="90" src="assets/index__iconFeature1.svg"/>
                            <h2 class="header">D-Act</h2>
                            <h3 class="sub">Sky is the limit to what the D-Act can offer.</h3>
                            <p class="text">以不同的形式，不同的議題，創造更多生活化的交流，帶動人潮與帶動人潮與溫度的匯聚，沖刷認知的堡壘。並在向前衝刺後留下寶貴的經驗。</p>
                        </div>
                        <div class="button">學院簡介</div>
                    </div>
                    <div class="contentLimiter">
                        <div class="upper">
                            <img width="90" src="assets/index__iconFeature2.svg"/>
                            <h2 class="header">D-Course</h2>
                            <h3 class="sub">We have no answer. Find your own one.</h3>
                            <p class="text">洞悉真正的問題洞悉真正的問題，才能真的一勞永逸。而這份才能誰也不能給你，請自己來培養吧！</p>
                        </div>
                        <div class="button">學院課程</div>
                    </div>
                    <div class="contentLimiter">
                        <div class="upper">
                            <img width="90" src="assets/index__iconFeature3.svg"/>
                            <h2 class="header">MakerSpace</h2>
                            <h3 class="sub">"Never Stop Trying"</h3>
                            <p class="text">親自動手實作，驗證設計，大師級的實作技術學習，以手作激發創意、從技藝汲取創新。</p>
                        </div>
                        <div class="button">實作中心</div>
                    </div>
                    
                </div>
            </div>
            <!-- Page FOUR -->
            <div :class="newsInfoClass">
                
                <div class="onCorners topRight infoWrapper">
                    <div class="topRow">
                        <div class="newsItem top" :style="{order:1}">
                            <div class="thumbnail">
                                <div class="imgWrapper">
                                    <img src="http://dschool.ntu.edu.tw/assets/images/2017/07/01.jpg"/>
                                </div>
                            </div>
                            <div class="text">
                                <div class="time">2017-07-15</div>
                                <h2 class="header">用一週的時間刨開心中對木工藝的愛</h2>
                                <div class="sub"></div>
                                <p class="intro">「動手做」，在台灣教育裡的缺席造成許多創新創意的空洞化，有鑑於此，帶領台大學生投入木工藝的領域，是D-School開課以來努力的方向。這一次非常感謝北科大W.School全心、全力的投入！由陳殿禮老師所帶領的團隊，從最初的課程設計，到全程課程的陪同與協助，到最後完美的成果發表。不僅提供完整的機械設備和環境，創造48小時的深刻體驗課程。</p>
                                <div class="actions">
                                    <div class="button">了解故事</div>
                                    <div class="button">報名活動</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bottomRow">
                        <div class="newsItem" :style="{order:2}">
                            <div class="thumbnail">
                                <div class="imgWrapper">
                                    <img src="http://dschool.ntu.edu.tw/assets/images/2017/06/052801.jpg"/>
                                </div>
                            </div>
                            <div class="text">
                                <h2 class="header">茶香之中人情更濃</h2>
                                <div class="sub">用樂音傳唱世代的記憶<span class="time">2017-05-28</span></div>
                                <p class="intro">舞臺上 蔡佳芬老師悠悠長笛聲與吉他樂音中能夠聽見「殺青」時機械運作的聲響。彷彿坪林的茶農日常，透過聲音已描繪成形。</p>
                            </div>
                        </div>
                        <div class="newsItem" :style="{order:3}">
                            <div class="thumbnail">
                                <div class="imgWrapper">
                                    <img src="http://dschool.ntu.edu.tw/assets/images/2017/06/052801.jpg"/>
                                </div>
                            </div>
                            <div class="text">
                                <h2 class="header">茶香之中人情更濃</h2>
                                <div class="sub">用樂音傳唱世代的記憶<span class="time">2017-05-28</span></div>
                                <p class="intro">舞臺上 蔡佳芬老師悠悠長笛聲與吉他樂音中能夠聽見「殺青」時機械運作的聲響。彷彿坪林的茶農日常，透過聲音已描繪成形。</p>
                            </div>
                        </div>
                        <div class="newsItem more" :style="{order:4}">
                            <div>更多消息<img src="assets/index__iconArrowRight.svg"/></div>
                        </div>
                    </div>
                </div>

                <div class="onCorners topLeft">
                    <h4 class="header1">焦點碰撞</h4>
                    <h1 class="header2">INSPIRATION</h1>
                </div>

            </div>
            <!-- Page FIVE -->
            <div :class="aboutSectionClass">
                <div class="aboutWrapper">
                    <div class="left">
                        <img class="logo" src="assets/index__heroTitle.svg"/>
                        <div class="buttonSection">
                            <div class="button">探索學院</div>
                            <div class="button">聯繫我們</div>
                        </div>
                        <div class="contactWrapper">
                            <div class="contactItem">
                                <h5 class="contactHeader">地址 Address</h5>
                                <div class="contactContent">10087 台北市中正區思源街18號卓越研究大樓四樓</div>
                            </div>
                            <div class="contactItem">
                                <h5 class="contactHeader">電話 Tel</h5>
                                <div class="contactContent">+886-2-3366-1869</div>
                            </div>
                            <div class="contactItem">
                                <h5 class="contactHeader">信箱 Email</h5>
                                <div class="contactContent">ntudschool@ntu.edu.tw</div>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <img src="assets/index__iconFooter1.svg"/>
                        <img src="assets/index__iconFooter2.svg"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// Vuex
import { mapGetters, mapActions } from 'vuex';

import Circle1 from '@/components/circles/Circle1';
import HomeSection1 from '@/components/page-sections/HomeSection1';
import HomeSection2 from '@/components/page-sections/HomeSection2';
import HomeSection3 from '@/components/page-sections/HomeSection3';
import HomeSection4 from '@/components/page-sections/HomeSection4';
import HomeSection5 from '@/components/page-sections/HomeSection5';
import HomeMenu from '@/components/HomeMenu';

export default {
    props: {
        contents: {
            required: false,
            type: Object
        },
        hidingToolbar: {
            type: Boolean,
            default: false
        }
    },
    data () {
        let objTemplate = {
            currentSection: 1,
            allowScrolling: true,
            rightNavItems: [],
            menuOpened: false
        };
        // rightNavMetre related
        for (let i = 0; i < 36; ++i) {
            var rightNavStep = 26;
            objTemplate.rightNavItems.push({x1: '56', y1: i * rightNavStep, x2: '64', y2: i * rightNavStep});
        }
        return objTemplate;
    },
    components: {
        HomeMenu,
        Circle1,
        HomeSection1,
        HomeSection2,
        HomeSection3,
        HomeSection4,
        HomeSection5
    },
    computed: {
        // Vuex store linked
        ...mapGetters({
            pageSectionIndex: 'pageSectionIndex'
        }),

        pageLogoClass () {
            switch (this.currentSection) {
                case 1:
                    return 'pageLogo';
                case 4:
                    return 'pageLogo up inverted'
                default:
                    return 'pageLogo up'
            }
        },
        heroTitleClass () {
            return (this.currentSection === 1) ? 'heroTitle' : 'heroTitle hide';
        },
        menuButtonClass () {
            return (this.currentSection === 1) ? 'onCorners topRight menuButton hideNoPointer' : 'onCorners topRight menuButton';
        },
        menuDisplayClass () {
            return (this.menuOpened) ? 'persistent menuDisplay' : 'persistent menuDisplay hideNoPointer'
        },
        langSelectClass () {
            return (this.currentSection === 1) ? 'onCorners bottomLeft langSelect' : 'onCorners bottomLeft langSelect hideNoPointer';
        },
        tagline1Class () {
            return (this.currentSection === 1) ? 'onCorners bottomLeft tagline1' : 'onCorners bottomLeft tagline1 hideNoPointer';
        },
        indicatorClass () {
            return (this.currentSection === 1) ? 'indicator' : 'indicator';
        },
        centredInfoClass () {
            return (this.currentSection === 3) ? 'centredInfo': 'centredInfo hideNoPointer';
        },
        newsInfoClass () {
            return (this.currentSection === 4) ? 'newsInfo': 'newsInfo hideNoPointer';
        },
        aboutSectionClass () {
            return (this.currentSection === 5) ? 'aboutSection': 'aboutSection hideNoPointer';
        },
        titularBannerClass () {
            return (this.currentSection === 1) ? 'titularBanner' : 'titularBanner hide';
        },
        giantQuoteClass () {
            return (this.currentSection === 2) ? 'onCorners bottomLeft giantQuote' : 'onCorners bottomLeft giantQuote hideNoPointer';
        },
        centreLineWrapperClass () {
            return (this.currentSection === 1 || this.currentSection === 2) ? 'centreLineWrapper' : 'centreLineWrapper hideNoPointer';
        },
        bottomNavMouseClass () {
            return (this.currentSection === 1) ? 'bottomNavMouse' : 'bottomNavMouse hide';
        },
        rightNavMetreClass () {
            return (this.currentSection === 1) ? 'rightNavMetre' : 'rightNavMetre hide';
        },
        centredCircleClass1 () {
            switch (this.currentSection) {
                case 1:
                    return 'circles'
                case 2:
                    return 'circles toLeft'
                default:
                    return 'circles toLeft'
            }
        },
        centredCircleClass2 () {
            switch (this.currentSection) {
                case 1:
                    return 'circles'
                case 2:
                    return 'circles mergeLeft'
                default:
                    return 'circles mergeLeft'
            }
        },
        centredCircleClass3 () {
            switch (this.currentSection) {
                case 1:
                    return 'circles'
                case 2:
                    return 'circles scaleOut'
                default:
                    return 'circles scaleOut'
            }
        },
        centredCircleClass4 () {
            switch (this.currentSection) {
                case 1:
                    return 'circles'
                case 2:
                    return 'circles mergeRight'
                default:
                    return 'circles mergeRight'
            }
        },
        centredCircleClass5 () {
            switch (this.currentSection) {
                case 1:
                    return 'circles'
                case 2:
                    return 'circles toRight'
                default:
                    return 'circles toRight'
            }
        },
        motionCircleMainClass () {
            switch (this.currentSection) {
                case 1:
                    return 'motionCircleMain one'
                case 2:
                    return 'motionCircleMain two'
                case 3:
                    return 'motionCircleMain three'
                case 4:
                    return 'motionCircleMain four'
                case 5:
                    return 'motionCircleMain five'
            }
        },
        motionCircle2Class () {     // Also the dotted circle
            switch (this.currentSection) {
                case 1:
                    return 'motionCircle2 hide'
                case 2:
                    return 'motionCircle2 shown'
                case 3:
                    return 'motionCircle2 expand'
                case 4:
                    return 'motionCircle2 four'
                case 5: 
                    return 'motionCircle2 five'
            }
        },
        motionCircle3Class () {
            switch (this.currentSection) {
                case 1:
                    return 'motionCircle3 hide'
                case 2:
                    return 'motionCircle3 shown'
                case 3:
                    return 'motionCircle3 expand'
                case 4:
                    return 'motionCircle3 four'
                case 5: 
                    return 'motionCircle3 five'
            }
        },
        motionCircle4Class () {
            switch (this.currentSection) {
                case 1:
                    return 'motionCircle4 hide'
                case 2:
                    return 'motionCircle4 shown'
                case 3:
                    return 'motionCircle4 expand'
                case 4:
                    return 'motionCircle4 four'
                case 5: 
                    return 'motionCircle4 five'
            }
        },
        motionCircle5Class () {
            switch (this.currentSection) {
                case 1:
                    return ''
                case 2:
                    return ''
                case 3:
                    return ''
                case 4:
                    return ''
                case 5: 
                    return ''
            }
        },
        leftSmallCircleClass () {
            switch (this.currentSection) {
                case 1:
                    return 'smallCircle left hide'
                case 2:
                    return 'smallCircle left'
                case 3:
                    return 'smallCircle left three'
                case 4:
                    return 'smallCircle left three'
                case 5:
                    return 'smallCircle left three hide'
            }
        },
        rightSmallCircleClass () {
            switch (this.currentSection) {
                case 1:
                    return 'smallCircle right hide'
                case 2:
                    return 'smallCircle right'
                case 3:
                    return 'smallCircle right three'
                case 4:
                    return 'smallCircle right three'
                case 5:
                    return 'smallCircle right three hide'
            }
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

        /**
         * Handles Section Scroll Event
         * @func
         */
        onSectionChange (eV) {
            switch (this.currentSection) {
                case 1:
                    this.$store.dispatch('changePageLogoState', 0);
                    break;
                case 4:
                    this.$store.dispatch('changePageLogoState', 2);
                    break;
                default:
                    this.$store.dispatch('changePageLogoState', 1);
            }
            
        },
        handleMouseWheel (eV) {
            eV.preventDefault();
            
            //
            if (!this.allowScrolling) {
                return;
            }

            if (eV.deltaY > 0) {
                // 向下捲動
                if (this.currentSection < 5) {
                    ++this.currentSection;
                } else {
                    return;
                }
                this.allowScrolling = false;
                let scrollVal = (this.$refs['section' + this.currentSection].$el.offsetTop);
                $('body').velocity('scroll', {
                    duration: 800,
                    easing: 'easeInOutCirc',
                    offset: scrollVal + 'px',
                    complete: () => {
                        setTimeout(() => {
                            this.allowScrolling = true;
                        }, 500);
                    }});
            } else {
                // 向上捲動
                if (this.currentSection > 1) {
                    --this.currentSection;
                } else {
                    return;
                }
                this.allowScrolling = false;
                let scrollVal = (this.$refs['section' + this.currentSection].$el.offsetTop);
                $('body').velocity('scroll', {
                    duration: 800,
                    easing: 'easeInOutCirc',
                    offset: scrollVal + 'px',
                    complete: () => {
                        setTimeout(() => {
                            this.allowScrolling = true;
                        }, 500);
                    }});
            }

            // Trigger callback
            this.onSectionChange();
        },
        // Select English
        selectEN () {
            // TODO: Link language module
            console.log('selectEN() called');
        },
        // Select Chinese
        selectZH () {
            // TODO: Link language module
            console.log('selectZH() called');
        },
        // Class Handler (Indicator Circles)
        indicatorCircleClass (n) {
            switch (n) {
                case 1:
                    if (this.currentSection === 1) {
                        return 'circle one default'
                    } else {
                        return 'circle one'
                    }
                case 2:
                    if (this.currentSection === 1) {
                        return 'circle two hide'
                    } else if (this.currentSection === 2){
                        return 'circle two focus'
                    } else {
                        return 'circle two'
                    }
                    
                case 3:
                    if (this.currentSection === 1) {
                        return 'circle three hide'
                    } else if (this.currentSection === 3){
                        return 'circle three focus'
                    } else {
                        return 'circle three'
                    }
                case 4:
                    if (this.currentSection === 1) {
                        return 'circle four hide'
                    } else if (this.currentSection === 4){
                        return 'circle four focus'
                    } else {
                        return 'circle four'
                    }
                case 5:
                    if (this.currentSection === 1) {
                        return 'circle five hide'
                    } else if (this.currentSection === 5){
                        return 'circle five focus'
                    } else {
                        return 'circle five'
                    }
                
            }
        },
        /**
         * Handles menu close event
         */
        closeMenuHandler (action) {
            console.log('closeMenuHandler() called: ' + action);
            this.menuOpened = false;
        }
    },
    mounted () {
        // Note: scroll/mouseWheel events moved to <App>
        this.onSectionChange();
        document.body.scrollTop = 0;
        window.scrollTo(0,0);
        window['home'] = this
    },
    beforeDestroy () {
        // Note: scroll/mouseWheel events moved to <App>
    },
    watch: {
        currentSection (newVal, oldVal) {
            //
            console.log('[HomePage] Scrolling to Section #' + newVal);
        },
        pageSectionIndex (newVal) {
            this.currentSection = (newVal + 1);
            this.onSectionChange();
        }
    }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '../shared'

$smallCircleSize: 54px

/* common styling */

.button
    display: inline-block
    font-weight: 600
    color: $theme1
    border: 3px solid $theme1
    padding: 8px 16px
    letter-spacing: 1px
    transition: 0.5s
    margin-right: 5px
    margin-top: 10px

    // vertical-align: bottom

            // .button
            //     display: inline-block
            //     padding: 4px 18px
            //     border: 2px solid $gradient4
            //     color: $gradient4
            //     font-weight: 600
            //     margin: 14px

.button:hover
    background: $theme1
    color: $bgColour
    cursor: pointer

/* Template Classes */
.hideNoPointer
    +hideNoPointer

.heroTitle
    width: 450px
    transform-origin: 0 0

.heroTitle.hide
    opacity: 0
    pointer-events: none
    transform: scale(0.92) translate3d(-10px, -10px, 0)
    +homePageTransitionFast

.pageLogo
    transform: translate3d(8px,28px,0)
    width: 41px
    opacity: 0
    +homePageTransitionFast

.pageLogo.up 
    opacity: 1
    transform: translate3d(8px,10px,0) scale(0.8)

.pageLogo.inverted
    filter: invert(2) brightness(10) saturate(0) contrast(2)

.tagline1
    color: $theme1
    font-size: 1.3em
    font-weight: 600
    padding: 0 0 80px 10px
    +homePageTransitionFast
    
    .decor
        padding: 10px 0 0 0
        width: 32px
        border-bottom: 8px solid $theme1


.menuButton
    z-index: 99200

.menuButton:hover
        cursor: pointer

.menuDisplay
    +homePageTransitionFast
    background: $bgColour

.centred
    position: absolute
    top: calc(50vh - 90px)
    width: calc(100% - 64px)
    text-align: center

    .circles
        pointer-events: none
        height: 180px
        margin: 0 -6px
        +homePageTransitionSlow

    .circles.toLeft
        transform: translate3d(calc(-50vw + 360px), 0, 0) scale(0.3)
        +hideNoPointer
    .circles.mergeLeft
        transform: translate3d(180px, 0,0) scale(0.7)
        +hideNoPointer
    .circles.mergeRight
        transform: translate3d(-180px, 0,0) scale(0.7)
        +hideNoPointer
    .circles.toRight
        transform: translate3d(calc(50vw - 360px), 0, 0) scale(0.3)
        +hideNoPointer
    .circles.scaleOut
        transform: scale(0)
        +hideNoPointer

    .centreLineWrapper
        border: none
        z-index: -1
        position: absolute
        top: 90px
        width: 100vw
        margin-left: -$pagePadding
        +homePageTransitionFast

        .centreLine
            width: 100%
    
    .centredCircles
        position: absolute
        top: 0
        left: 0
        pointer-events: none
        // border: 1px solid green
        width: 100%
        height: 100%
        +flexCentre
        justify-content: space-between

        .smallCircle
            +homePageTransitionFast
            
            
            width: $smallCircleSize
            height: $smallCircleSize

        .smallCircle.hide
            +hideNoPointer
        
        .smallCircle.left.three
            transform: translate3d(-60px, 0px, 0)

        .smallCircle.right.three
            transform: translate3d(60px, 0px, 0)

.centredInfo
    display: flex
    justify-content: space-between
    align-items: center
    padding: calc(4vw + 32px) calc(4vw + 64px)
    height: calc(100% - 8vw - 64px)
    z-index: 920
    +homePageTransitionSlow

    .introWrapper
        // height: calc(80vw / 3)
        padding: 20px
        box-sizing: border-box
        // flex-grow: 1
        display: flex
        text-align: center
        max-width: 1200px
        margin-left: auto
        margin-right: auto

        .contentLimiter
            display: inline-block
            // max-width: 430px
            text-align: left
            // flex: 1
            width: calc(100% / 3)
            flex-shrink: 0
            padding: 10px
            justify-content: center

            .upper
                min-height: 360px

    .header
        color: $theme1
        font-size: 46px
        font-weight: 800
        white-space: nowrap
    .sub
        color: $gradient0
        font-size: 20px
        font-weight: 600
        padding-bottom: 18px
    .text
        color: $gradient0
        font-size: 16px
        padding-bottom: 20px



.newsInfo
    +homePageTransitionLinear
    color: $gradient0

    .header1
        padding-top: 100px
        font-weight: 600
        color: $theme2
        font-size: 2em
        letter-spacing: 5px

    .header2
        font-weight: 600
        line-height: 0.9em
        font-size: 5em
        letter-spacing: 5px

    .infoWrapper        
        margin-top: $pagePadding
        margin-left: calc(30vw - 64px)
        height: calc(100vh - 128px)
        width: 70vw
        min-width: 1080px
        max-width: 1200px

        display: flex
        flex-direction: column

        .topRow
            height: calc(50vh - 90px)
        .bottomRow
            display: flex
            flex-direction: row
            height: calc(50vh - 64px)
            justify-content: space-between

        .newsItem
            position: relative
            flex-grow: 1
            flex-shrink: 1
            flex-basis: 0
            
            display: flex
            flex-direction: column

            margin: 14px 14px 14px 14px

            .thumbnail
                flex-basis: 0
                position: relative
                // width: calc((70vw - 84px) / 3)
                width: 95%
                .imgWrapper
                    overflow: hidden
                    width: 100%
                
                    img
                        width: 100%

            .text
                background: $gradient0
                padding: 14px 20px 10px 10px
                z-index: 920
                transform: translate3d(0, -32px ,0)
                box-shadow: 0 -2px 8px 0.6px rgba(20,20,20,0.2)
                margin: 0 8px 0 8px
                // max-height: calc(((70vw / 3))
                flex-grow: 1
                flex-basis: 0

                .time
                    color: $theme3
                    +geometricFont
                    font-size: 0.3em
                    font-weight: 400
                    padding-left: 8px
                    letter-spacing: 1px

                .header
                    color: $theme1
                    font-size: 1.8em
                    font-weight: 600
                .sub
                    color: $theme1
                    font-weight: 600

                .intro
                    color: $theme3
                    
                    font-size: 15px
                    line-height: 1.8em

                // .button
                //     display: inline-block
                //     border: 1px solid $theme1
                //     color: $theme1
                //     font-size: 15px
                //     font-weight: 500
                //     padding: 3px 15px
                //     margin: 2px 4px
                //     +homePageTransitionFast

                .button:hover
                    background: $theme1
                    color: $gradient0
                    cursor: pointer

        .newsItem.top
            flex-grow: 3
            flex-shrink: 3
            height: calc(100% - 64px)
            // max-height: calc(100% - 64px)
            display: flex
            background: $gradient0

            flex-direction: row
            .text
                padding: 24px 20px 10px 10px
                transform: none
                box-shadow: none
                margin: 0

                .time
                    color: $theme3
                    +geometricFont
                    font-weight: 600
                    font-size: 0.8em
                    letter-spacing: 2px
                .intro
                    color: $theme3
                    padding: 15px 0
                    
                    line-height: 1.8em

            .thumbnail
                width: calc(50vh - 64px)
                max-width: none
                transform: translate3d(-10px, -24px, 0)
            
                .imgWrapper
                    overflow: hidden
                    height: 100%
                    width: auto
                
                    img
                        height: 100%
                        width: auto

        .newsItem.more
            outline: 2px solid $gradient0
            +flexCentre

            div
                font-size: 1.2em
                font-weight: 600
                color: $gradient0

                img
                    padding-left: 17px
                    height: 2em
                    vertical-align: middle

.aboutSection
    padding: 90px 100px
    position: absolute
    top: 0
    left: 0
    width: calc(100vw - 200px)
    height: calc(100vh - 180px)
    +homePageTransitionSlow
    display: flex
    justify-content: center
    align-items: center

    .aboutWrapper
        
        display: flex
        padding: $pagePadding
        min-width: 900px

        .left
            flex-basis: 0
            flex-grow: 7

            .logo
                width: 80%
                max-width: 500px
            .buttonSection
                padding: 10px 0 20px 0


            .contactWrapper
                font-weight: 600
                color: $gradient0

                .contactItem
                    padding: 18px 15px 20px 25px
                    
                
                    .contactHeader
                        position: relative
                        &:before
                            position: absolute
                            top: 0.5em
                            left: -20px
                            content: ' '
                            background: $gradient4
                            border-radius: 100px
                            width: 10px
                            height: 10px


        .right
            
            padding-left: 20px
            padding-right: 40px
            border-left: 1px solid $gradient0
            flex-basis: 0
            flex-grow: 3

            img
                // width: calc(50% - 40px)
                height: 80px
                max-width: 140px
                margin: 15px
                vertical-align: top

$indicatorCircleMargin: 20px
.indicator
    position: absolute
    left: $pagePadding
    bottom: 20vh

    svg
        width: $pagePadding
        height: 150px

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

        .one
            cy: $indicatorCircleMargin * 1
        .two
            cy: $indicatorCircleMargin * 2
        .three
            cy: $indicatorCircleMargin * 3
        .four
            cy: $indicatorCircleMargin * 4
        .five
            cy: $indicatorCircleMargin * 5
        
.indicator.hide
    +hideNoPointer            

.bottomNavMouse
    position: absolute
    left: 0
    bottom: 0
    width: 100vw
    text-align: center
    color: #FFF
    +geometricFont
    letter-spacing: 3px
    pointer-events: none
    +homePageTransitionFast

    .mouseIcon
        width: 32px
    
    .caption
        padding: 0 0 0 5px
        font-weight: 600

    .arrowDown
        width: 32px
        margin: 10px 0
.bottomNavMouse.hide
    +hideNoPointer


.rightNavMetre
    position: absolute
    height: calc(100vh - 224px)
    width: 80px
    right: 0
    bottom: 0
    overflow: hidden
    +homePageTransitionFast

    svg
        width: 80px
        height: calc(100vh - 224px)

.rightNavMetre.hide
    transform: translate3d(42px, 0, 0)

.motionCircleWrapper
    position: absolute
    bottom: 10px
    left: 0
    width: 100vw
    pointer-events: none
    
    .motionCircle
        
        width: 100vw
        height: 100vh
        +homePageTransitionFast
        *
            +homePageTransitionFast
        .motionCircleMain.one
            fill: none
            cx: 50vw
            cy: calc(100vh + 30vw - 86px)
            r: 30vw
        .motionCircleMain.two
            fill: none
            cx: 50vw
            cy: 50vh
            r: 40vw
        .motionCircleMain.three
            cx: 50vw
            cy: 50vh
            r: 44vw
            stroke: $theme1 !important
            stroke-dasharray: 0
            fill: transparent
            stroke-width: 8px !important
        .motionCircleMain.four
            cx: 50vw
            cy: 50vh
            r: 80vw
            fill: $theme1
        .motionCircleMain.five
            cx: 50vw
            cy: 50vh
            r: 80vw
            fill: $bgColour


        .motionCircle2 // The dotted one in the middle
            fill: none
            cx: 50vw
            cy: 50vh
        .motionCircle2.hide
            +hideNoPointer
        .motionCircle2.shown
            r: 15vw
        .motionCircle2.expand
            r: 28vw
            stroke: $theme1 !important
            fill: transparent
        .motionCircle2.four
            r: 28vw
            stroke: $theme1 !important
            fill: $theme1
        .motionCircle2.five
            r: 28vw
            stroke: $bgColour !important
            fill: $bgColour

        .motionCircle3 // The red one in the middle
            fill: none
            cx: 50vw
            cy: 50vh
            r: 10vw
        .motionCircle3.hide
            +hideNoPointer
        .motionCircle3.shown
            fill: $theme1
            r: calc(15vw - 50px)
        .motionCircle3.expand
            fill: transparent
            r: calc(36vw + 30px)

        .motionCircle4 // The faded one in the middle
            fill: transparent
            cx: 50vw
            cy: 50vh
            r: 3vw
        .motionCircle4.hide
            +hideNoPointer
        .motionCircle4.shown
            fill: $theme1
            opacity: 0.2
            r: calc(15vw - 10px)
        .motionCircle4.expand
            fill: transparent
            opacity: 0.2
            r: calc(28vw + 60px)
            stroke: $theme1
            stroke-width: 3px

.titularBanner
    +homePageTransitionFast
    +foreGroundColour
    +geometricFont
    font-weight: 600
    border-bottom: 1px solid $gradient0
    width: 200px
    padding: 10px 0
    transform: rotate(90deg) translate3d(-30px, -10px, 0)
    transform-origin: 0 100%

    .main
        font-size: 1.2em
        padding: 0 0 2px 0
    .secondary
        font-size: 0.84em

.titularBanner.hide
    +hideNoPointer
    transform: rotate(90deg) translate3d(-30px, 210px, 0)

.giantQuote
    color: $gradient0
    font-weight: 600
    padding: 0 0 $pagePadding 20px
    +homePageTransitionSlow

    .text
        display: inline-block
        vertical-align: top
        font-size: 22px
        font-weight: 500
        .header
            font-size: 54px
            font-weight: 700
            margin-bottom: 20px


.langSelect
    +foreGroundColour
    +flexCentre
    font-size: 0.8em
    font-weight: 600

    .icon
        height: 48px
        padding-right: 10px
    .selector:hover
        cursor: pointer

/* Transitions */
.section-push-enter-active, .section-push-leave-active 
  transition: .8s cubic-bezier(.33,.85,.85,.99)
  

.section-push-enter 
  transform: translate3d(0, 100vh, 0)

.section-push-leave-to 
  transform: translate3d(0, -100vh, 0)

</style>
