import View from './View.js'

const tag = '[KeywordView]'

const KeywordView = Object.create(View)

KeywordView.setup = function(el){
    this.init(el)
    return this
}

KeywordView.render = function(data=[]){
    this.el.innerHTML = data.length ? this.getKeywordsHtml(data):"추천 검색어가 없습니다"
    this.bindEvent()
    this.show()
    return this
}

KeywordView.getKeywordsHtml = function(data){
    return data.reduce((html, item, index)=>{
        html += `<li data-keyword="${item.keyword}">
        <span class="number">${index +1}</span>
        ${item.keyword}
        </li>`
        return html
    },'<ul class ="list">')+'</ul>'
}

KeywordView.bindEvent = function(){
    this.el.querySelectorAll('li').forEach(li=>{
        li.addEventListener('click',e => this.onClickKeyword(e))
    })
}

KeywordView.onClickKeyword = function (e){
    console.log(e)
    console.log(e.currentTarget.dataset) //DomStringMap형식
    console.log(e.currentTarget.dataset.keyword) //String 반환 
    const {keyword} = e.currentTarget.dataset //할당 구조 분해 문법
    this.emit('@keywordClick', {keyword})
}

export default KeywordView