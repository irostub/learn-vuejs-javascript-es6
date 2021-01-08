import SearchModel from './models/SearchModel.js'
import KeywordModel from './models/KeywordModel.js'

new Vue({
    el: '#app',
    data: {
        query: '',
        searchResult: [],
        submitted: false,
        selectedTab:'',
        tabs: ['추천 검색어', '최근 검색어'],
        keywords:[]
    },
    //vue 인스턴스가 생성될 때 호출
    created(){
        this.selectedTab=this.tabs[0]
        this.fetchKeyword()
    },
    methods: {
        onSubmit(e){
            this.search()
        },
        onKeyup(e){
            if(!this.query.length)this.onReset()
        },
        onReset(e){
            this.query=''
            this.searchResult=[]
            this.submitted=false
        },
        search(){
            SearchModel.list().then(data=>{
                this.submitted =true
                this.searchResult = data
            })
        },
        fetchKeyword(){
            KeywordModel.list().then(data=>{
                this.keywords=data
            })
        },
        onClickTab(e){
            this.selectedTab=e.currentTarget.innerHTML
            //console.log(this.selectedTab)
        },
        onClickKeyword(keyword){
            this.query=keyword
            this.search()
        }
    }
})
