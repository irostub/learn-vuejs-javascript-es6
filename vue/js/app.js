new Vue({
    el: '#app',
    data: {
        query: ''
    },
    methods: {
        onSubmit(e){
            
            debugger
        },
        onKeyup(e){
            if(!this.query.length)this.onReset()
        },
        onReset(e){
            this.query=''
        }
    }
})
