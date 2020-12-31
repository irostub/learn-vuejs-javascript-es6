import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function(el){
    this.init(el)
    this.inputEl = el.querySelector('[type=text]')
    this.resetEl = el.querySelector('[type=reset]')
    this.showResetBtn(false)
    this.bindEvents()
    return this
}

FormView.showResetBtn = function(show = true){
    this.resetEl.style.display = show ? 'block' : 'none'
}

//inputEl은 html element input을 가져왔으므로 addEventListner를 통해 DOM에서 keyup 이벤트를 받아서 onKeyup함수로 핸들링
FormView.bindEvents = function(){
    this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
}

FormView.onKeyup = function(e) {
    const enter = 13 //Enter의 키 값
    //inputEl input필드값의 길이,
    this.showResetBtn(this.inputEl.value.length)
    if (e.keyCode !== enter) return 
    this.emit('@submit', {input: this.inputEl.value})
}


export default FormView