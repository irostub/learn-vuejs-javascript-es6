export default {
    template: '#result-form',
    props:['data', 'query'],
    data(){
        return {
            temp: this.data
        }
    }
}
