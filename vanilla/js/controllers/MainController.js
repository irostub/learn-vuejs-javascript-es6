import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import SearchModel from '../models/SearchModel.js'
const tag = '[MainController]'

export default{
    init(){
        console.log(tag, 'init()')
        FormView.setup(document.querySelector('form'))

        //@submit 이벤트가 발생했을 때 onSubmit함수 호출
        .on('@submit', e => this.onSubmit(e.detail.input))
        .on('@reset', () => this.onReset())

        ResultView.setup(document.querySelector('#search-result'))
    },

    search(query){
        console.log(tag, 'search()', query)
        SearchModel.list(query).then(data=>{
            this.onSearchResult(data)
        })
    },

    onSubmit(input){
        console.log(tag, 'onSubmit()', input)
        this.search(input)
    },

    onReset(){
        console.log(tag, 'onReset()')
    },

    onSearchResult(data){
        ResultView.render(data)
    }
}