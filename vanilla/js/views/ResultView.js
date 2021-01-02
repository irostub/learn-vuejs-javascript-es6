import View from './View.js'

const tag = '[ResultView]'

const ResultView = Object.create(View)

ResultView.setup = function(el){
    this.init(el)
}

ResultView.render = function(data=[]){
    console.log(tag,'render()',data)
    this.el.innerHTML = data.length ? this.getSearchResultsHtml(data): '검색 결과가 없습니다'
    this.show()
}

//reduce 는 리스트 안에서 하나씩 요소를 꺼내와서 작업을 처리한다. 첫번째 param은 누적될 변수, 두번째 param은 리스트에서 꺼내온 요소, 세번째는 누적변수에 초기값을 설정할 수 있다.
ResultView.getSearchResultsHtml = function(data){
    return data.reduce((html,item)=>{
        html += this.getSearchItemHtml(item)
        return html
    },'<ul>') + '</ul>'
}

ResultView.getSearchItemHtml = function(item){
    return `<li>
        <img src="${item.image}">
        <p>${item.name}</p>
    </li>`
}

export default ResultView