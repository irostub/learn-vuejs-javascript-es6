export default {
    template: "#tabs",
    props:['tablist','select'],
    methods:{
        onClickTab(tab){
            this.$emit('@click',tab)
        }
    }
}