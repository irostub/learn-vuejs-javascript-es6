import View from './View.js'

const tag = '[TabView]'

const TabView = Object.create(View)

TabView.setup = function(el){
    this.init(el)
    return this
}
//Array.from()은 배열과 유사한 객체나 iterable한 객체를 얕은 복사(중요)해서 새로운 Array를 만든다.
TabView.setActiveTab = function(tabName){
    Array.from(this.el.querySelectorAll('li')).forEach(li=>{
        li.className = li.innerHTML === tabName ? 'active' : ''
        console.log('li: '+li)
        console.log('className: '+li.className)
    })
    this.bindEvent()
}
//호환성을 위해선 Array.prototype.forEach() 를 사용할 수 있음
TabView.bindEvent = function(){
    this.el.querySelectorAll('li').forEach(li=>{
        console.log(li)
        console.log(typeof(li.innerHTML))
        li.addEventListener('click', () => this. onClickTab(li.innerHTML))
    })
}

TabView.onClickTab = function(tabClass){
    this.setActiveTab(tabClass)
    this.emit('@tabClick', {tabName: tabClass})
}
export default TabView