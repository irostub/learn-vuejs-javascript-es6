import FormView from '../views/FormView.js'
const tag = '[MainController]'

export default{
    init(){
        console.log(tag, 'init()')
        FormView.setup(document.querySelector('form'))

        //@submit 이벤트가 발생했을 때 onSubmit함수 호출
        .on('@submit', e => this.onSubmit(e.detail.input))
    },

    onSubmit(input){
        console.log(tag, 'onSubmit()', input)
    }
}