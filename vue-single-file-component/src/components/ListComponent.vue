<template>
    <div v-if="data.length">
        <ul class="list">
            <!--[vue/require-v-for-key] error(vue 2.2.0 이상에서 오류) v-bind:key="index" index혹은 다른 id로 구분-->
            <li v-for="(item, index) in data" :key="item.keyword"
                v-on:click="onClickList(item.keyword)">
            <span v-if="keywordType" class="number">{{index + 1}}</span> 
            {{item.keyword}}
            <span v-if="historyType" class="date">{{item.date}}</span>
            <button v-if="historyType" class="btn-remove" v-on:click.stop="onClickRemoveList(item.keyword)"></button>
            </li>
        </ul>
    </div>
    <div v-else>
        <span v-if="keywordType">추천 검색어가 없습니다</span>
        <span v-if="historyType">최근 검색어가 없습니다</span>
    </div>
</template>

<script>
export default {
    props: ['data','type'],

    computed:{
        keywordType(){
            return this.type === 'keywords'
        },
        historyType(){
            return this.type === 'history'
        }
    },
    methods:{
        onClickList(keyword){
            this.$emit('@click', keyword)
        },
        onClickRemoveList(keyword){
            this.$emit('@remove',keyword)
        }
    }
}
</script>