import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function(el){
    this.init(el)
    //console.log(el)
    this.inputEl = el.querySelector('[type=text]')
    this.resetEl = el.querySelector('[type=reset]')
    //console.log(this.inputEl)
    //console.log(this.resetEl)
    this.showResetBtn(false)
    this.bindEvents()
    return this
}

FormView.showResetBtn = function(show = true){
    this.resetEl.style.display = show ? 'block' : 'none'
}

//inputEl은 html element input을 가져왔으므로 addEventListner를 통해 DOM에서 keyup 이벤트를 받아서 onKeyup함수로 핸들링
FormView.bindEvents = function(){
    //this.on('submit',e => e.preventDefault()) Enter를 눌러서 submit 했을 때 페이지 재로딩을 막기위해 사용
    this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
    this.resetEl.addEventListener('click', () => this.onClick())
}

FormView.onClick = function(){
    this.emit('@reset')
    this.showResetBtn(false)
}

FormView.onKeyup = function(e) {
    const enter = 13 //Enter의 키 값
    //inputEl input필드값의 길이,
    this.showResetBtn(this.inputEl.value.length)
    if(this.inputEl.value.length===0) {
        this.emit('@reset')
        this.showResetBtn(false)
        console.log('onkeyup()')
    }
    if (e.keyCode !== enter) return 
    this.emit('@submit', {input: this.inputEl.value})
}

FormView.setKeyword = function (keyword){
    this.inputEl.value = keyword
    this.showResetBtn()
}


export default FormView