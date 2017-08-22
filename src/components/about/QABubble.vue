<template>
    <div class="col">
        <div class="note">ONE</div>
        <div class="dialogue" @click="toggleQALayer()">
            
            <img class="bubble" src="assets/about_sectionQa_dialogBlueL.svg"/>
            <div class="dialogueInner">
                <h3>咦~台大創新設計學院是什麼地方啊?平常都在幹嘛呢~?</h3>
            </div>
        </div>
        <div class="description" :class="{show: (section2Layer == 1)}">
            <p>創新設計學院以創造跨領域合作為目標，邀請不同系所、不同專業的師生來到學院。</p>
            <p>開設校內學分課程、舉辦工作坊及講座活動等。並設計優質的討論空間及休息室，讓大家在舒適的環境中發揮想像和創意。</p>
            <p>同時，學院為了鼓勵同學們將想法落實，提倡動手做的精神，我們也建置了「實作中心」!實作中心內設有雷射切割機、3D印表機、CNC等等機械設備。所以~只要你走近學院，就會發現有人在上課、在為了某個理想激烈討論、在放空思索人生、在把玩機械或是模型、或是在吃東西</p>
        </div>
    </div>
</template>

<script>
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

</style>
