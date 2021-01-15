<template>
    <form v-on:submit.prevent="onSubmit">
    <input type="text" v-model="inputValue" v-on:keyup="onKeyup" placeholder="검색어를 입력하세요" autofocus>
    <button v-show="inputValue.length" v-on:click="onReset" type="reset" class="btn-reset"></button>
  </form>
</template>

<script>
export default {
    //단일 파일 컴포넌트에선 template 프로퍼티를 지정하지않는다
    //template: '#search-form',
    
    props:['input'],
    data(){
        return {
            inputValue: this.input
        }
    },
    //input 프로퍼티의 변경을 감시
    watch:{
        input: function(newVal,oldVal){
            this.inputValue = newVal
        }
    },
    methods:{
        onSubmit(){
            this.$emit('@submit', this.inputValue.trim())
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
</script>