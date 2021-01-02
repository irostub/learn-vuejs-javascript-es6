const data = [
  {
    id: 1,
    name: '[키친르쎌] 홈메이드 칠리소스 포크립 650g',
    image: 'https://view01.wemep.co.kr/wmp-deal/1/749/605717491/605717491_large.jpg?1600909614'
  },
  {
    id: 2,
    name: '[키친르쎌] 이탈리아 파티 세트 3~4인분',
    image: 'https://lh3.googleusercontent.com/proxy/5QkSFXlVrJZbjpv4N-lS5OHcF9WX6OY-EEVTEyFUW_kzgGInjjYbzZHCDMt1c3j41GAwwmXqqHnZ_u5DW471BXEv-6nBLHfdST27aehUn0KscltXQhg'
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