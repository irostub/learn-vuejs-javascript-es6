import SearchModel from './models/SearchModel.js'

new Vue({
    el: '#app',
    data: {
        query: '',
        searchResult: [],
        submitted: false
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
        }
    }
})
