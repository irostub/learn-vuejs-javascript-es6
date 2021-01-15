<template>
<div>
  <header>
    <h2 class="container">검색</h2>
  </header>
  <div class="container">
    <search-form :input='query' @@submit='onSubmit' @@reset='onReset'></search-form>
    <div class="content">
        <div v-if="submitted">
          <result-form :data="searchResult" :query="query"></result-form>
        </div>
        <div v-else>
          <tab-form @@click="onClickTab" :tablist="tabs" :select="selectedTab"></tab-form>
          <div v-if="selectedTab === tabs[0]">
            <list-form :data="keywords" @@click="onClickKeyword" type="keyword"></list-form>
          </div>
          <div v-else>
            <list-form :data="history" @@click="onClickKeyword" @@remove="onClickRemoveHistory" type="history"></list-form>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import SearchModel from './models/SearchModel.js'
import KeywordModel from './models/KeywordModel.js'
import HistoryModel from './models/HistoryModel.js'

import FormComponent from './components/FormComponent.vue'
import ListComponent from './components/ListComponent.vue'
import TabComponent from './components/TabComponent.vue'
import ResultComponent from './components/ResultComponent.vue'

export default {
  name: 'App',
  data(){
    return {
      query: '',
      submitted: false,
      tabs: ['추천 검색어', '최근 검색어'],
      selectedTab: '추천 검색어',
      keywords: [],
      history: [],
      searchResult: []
    }
  },
  components: {
    'search-form':FormComponent,
    'result-form': ResultComponent,
    'list-form':ListComponent,
    'tab-form': TabComponent,
  },
  created() {
    this.selectedTab = this.tabs[0]
    this.fetchKeyword()
    this.fetchHistory()
  },
  methods:{
    onSubmit(e) {
      this.query = e
      this.search()
    },
    onReset(e) {
      this.resetForm()
    },
    onClickKeyword(keyword) {
      this.query = keyword;
      this.search()
    },
    onClickTab(tab){
      this.selectedTab = tab
    },
    onClickRemoveHistory(keyword) {
      HistoryModel.remove(keyword)
      this.fetchHistory()
    },
    fetchKeyword() {
      KeywordModel.list().then(data => {
        this.keywords = data
      })
    },
    fetchHistory() {
      HistoryModel.list().then(data => {
        this.history = data
      })
    },
    search() {
      SearchModel.list().then(data => {
        this.submitted = true
        this.searchResult = data
      })
      HistoryModel.add(this.query)
      this.fetchHistory()
    },
    resetForm() {
      this.query = ''
      this.submitted = false
      this.searchResult = []
    }
  }
}
</script>
