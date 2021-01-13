export default
{
    //컴포넌트가 바인딩 될 template, dom selector
    template: '#search-form',
    //props속성은 FromComponent의 외부의 변수와 바인딩 할 때, 이 속성 안에 선언헌다.
    //여기선 부모인 app.js의 query와 연결한다. index.html의 search-form 디렉티브를 확인하면 v-bind를 사용해 바인딩 한 것을 볼 수 있다.
    props:['input'],
    data(){
        return {
            inputValue: this.input
        }
    },
    methods:{
        onSubmit(){
            //이벤트 방출, $emit으로 사용하며 인자로 방출할 이벤트 이름과 방출할 때 전달할 인자를 지정한다.
            //submit에 대한 이벤트를 FormComponent에서 처리하지 않고 이벤트를 방출하는 이유는
            //submit시 inputValue에 있는 값을 부모인 query에 전달해야하기 때문
            //굳이 이렇게 나눠놓은 이유는 최대한 결합도를 낮추기 위함이라 생각된다.
            this.$emit('@submit', this.inputValue.trim())
            //console.log(this)
            //console.log(this._data.inputValue)
            //console.log(this.inputValue)
        },
        onKeyup(){
            if (!this.inputValue.length) this.onReset()
        },
        onReset(){
            this.inputValue = ''
            this.$emit('@reset')
        }
    }
}