<template>
    <div v-show="!menuEnabled" class="persistent menuButtonLayer">
        <div class="float">
            <div class="onCorners topRight" @click="$store.dispatch('toggleMenu')">
                <svg :style="{width:'40px',height:'60px'}" class="menuIcon">
                    <line x1="0" y1="10" x2="28" y2="10" :style="strokeStyle"/>
                    <line x1="0" y1="22" x2="28" y2="22" :style="strokeStyle"/>
                    <line x1="0" y1="34" x2="28" y2="34" :style="strokeStyle"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'MenuButton',
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
        strokeStyle () {
            switch (this.menuStyle) {
                case 0:
                    return {stroke:'#FFF',strokeWidth:'3px'};
                    
                case 1:
                    return {stroke:'#FF5559',strokeWidth:'3px'};
            }
            
        },
        ...mapGetters({
            menuEnabled: 'menuEnabled',
            menuStyle: 'menuStyle'
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

.menuButtonLayer
    +noPointer

    .menuIcon
        +autoPointer

        .iconLine
            stroke: $gradient0
            stroke-width: 3px
    .menuIcon:hover
        cursor: pointer
        .iconLine
            stroke: $theme1
            
</style>
