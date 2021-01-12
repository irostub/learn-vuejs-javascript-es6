export default
{
    //query는 다른 컴포넌트에서도 사용을 함으로 더 상위 객체인
    //부모 vue인스턴스의 query와 fromComponent를 분리해야함.
    //컴포넌트가 바인딩 될 template, dom selector
    template: '#search-form',
    data(){
        return {
            query:''
        }
    },
    methods:{
        onSubmit(){

        },
        onKeyup(){

        },
        onReset(){

        }
    }
}