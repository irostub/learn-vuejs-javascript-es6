<template>
    <div v-if="temp.length">
    <ul>
      <li v-for="item in temp" :key="item.keyword">
        <img v-bind:src="item.image"> {{item.name}}
      </li>
    </ul>
  </div>
  <div v-else>
    {{query}} 검색어로 찾을수 없습니다 
  </div>
</template>


<script>
export default {
    props:['data', 'query'],
    data(){
        return {
            temp: this.data
        }
    }
}
</script>