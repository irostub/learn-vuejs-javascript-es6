<template>
    <ul class="tabs">
    <li v-for="tab in tablist" :key="tab" v-bind:class="{active: tab === select}"
    @click="onClickTab(tab)">
      {{tab}}
    </li>
  </ul>
</template>

<script>
export default {
    props:['tablist','select'],
    methods:{
        onClickTab(tab){
            this.$emit('@click',tab)
        }
    }
}
</script>