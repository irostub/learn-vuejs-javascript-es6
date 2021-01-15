<template>
<div>
  <header>
    <h2 class="container">검색</h2>
  </header>
  <div class="container">
    <search-form :input='query' @@submit='onSubmit' @@reset='onReset'></search-form>
  </div>
</div>
</template>

<script>
import SearchModel from './models/SearchModel.js'
import KeywordModel from './models/KeywordModel.js'
import HistoryModel from './models/HistoryModel.js'

import FormComponent from './components/FormComponent.vue'
export default {
  name: 'App',
  data(){
    return {
      query: '',
      submitted: false,
      tabs: ['추천 검색어', '최근 검색어'],
      selectedTab: '',
      keywords: [],
      history: [],
      searchResult: []
    }
  },
  components: {
    'search-form':FormComponent
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
