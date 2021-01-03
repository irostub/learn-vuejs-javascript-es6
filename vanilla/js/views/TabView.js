import View from './View.js'

const tag = '[TabView]'

const TabView = Object.create(View)

TabView.tabNames = {
    recommend: '추천 검색어',
    recent: '최근 검색어',
}

TabView.setup = function(el){
    this.count = 0
    this.init(el)
    this.bindEvent()
    return this
}
//Array.from()은 배열과 유사한 객체나 iterable한 객체를 얕은 복사(중요)해서 새로운 Array를 만든다.
TabView.setActiveTab = function(tabName){
    Array.from(this.el.querySelectorAll('li')).forEach(li=>{
        li.className = li.innerHTML === tabName ? 'active' : ''
    })
    this.show()
}
//호환성을 위해선 Array.prototype.forEach() 를 사용할 수 있음
TabView.bindEvent = function(){
    this.el.querySelectorAll('li').forEach(li=>{
        li.addEventListener('click', e => this.onClickTab(li.innerHTML))
    })
}

TabView.onClickTab = function(tabClass){
    this.setActiveTab(tabClass)
    this.emit('@tabClick', {tabName: tabClass})
}
export default TabView