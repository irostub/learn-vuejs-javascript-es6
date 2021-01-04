import KeywordView from './KeywordView.js'

const tag = '[HistoryView]'

//keywordView에서 파생
const HistoryView = Object.create(KeywordView)

//override
HistoryView.getKeywordsHtml = function(data){
    return data.reduce((html, item) => {
        html += `<li data-keyword="${item.keyword}">
        ${item.keyword}
        <span class="date">${item.date}</span>
        <button class="btn-remove"></button>
        </li>`
        return html
    },'<ul class="list">')+'</ul>'
}

HistoryView.bindEvent = function(){
    this.el.querySelectorAll('button.btn-remove').forEach(btn=>{
        btn.addEventListener('click', e => this.onClickHistory(e, btn.parentElement.dataset.keyword))
    })
}

HistoryView.onClickHistory = function(e, keyword){
    e.stopPropagation()
    this.emit('@remove',{keyword})
}



export default HistoryView