const data = [
  {
    id: 1,
    name: '[키친르쎌] 홈메이드 칠리소스 포크립 650g',
    image: 'https://view01.wemep.co.kr/wmp-deal/1/749/605717491/605717491_large.jpg?1600909614'
  },
  {
    id: 2,
    name: '[키친르쎌] 이탈리아 파티 세트 3~4인분',
    image: 'https://www.goobnemall.com/static-root/prdct/2017/12/22/a264241ce0d34b319bf08ee85507bd7d.jpg'
  }
]

export default {
  list(query) {
    return new Promise(res => {
      setTimeout(()=> {
        console.log(res)
        res(data)
      }, 200);
    })
  }
}