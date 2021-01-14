export default {
    template: "#list-form",
    props: ['data','type'],
    //index.html에서 반복적으로 사용되는 조건문 코드를 computed로 빼낼 수 있다. 반응형 getter라고 한다.
    computed:{
        keywordType(){
            return this.type === 'keywords'
        },
        historyType(){
            return this.type === 'history'
        }
    },
    methods:{
        onClickList(keyword){
            this.$emit('@click', keyword)
        },
        onClickRemoveList(keyword){
            this.$emit('@remove',keyword)
        }
    }
}