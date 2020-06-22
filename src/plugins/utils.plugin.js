export default {
  install (Vue, options) {
    console.log(Vue, options)

    // Vue.component('컴포넌트명', 컴포넌트)
    // Vue.directive('지시자명', 지시자)

    // Vue.globalValiable = 'Vue객체 글로벌속성'
    // Vue.isEmpty = (text) => {
    //   if (text && text !== '') {
    //     console.log('값이 존재합니다.')
    //   } else {
    //     console.log('값이 존재하지 않습니다.')
    //   }
    // }

    // Vue.prototype.$isEmpty = (text) => {
    //   if (text && text !== '') {
    //     console.log('값이 존재합니다.')
    //   } else {
    //     console.log('값이 존재하지 않습니다.')
    //   }
    // }

    window.Utils = {
      text: {
        isEmpty: (text) => {
          if (text && text !== '') {
            console.log('값이 존재합니다.')
          } else {
            console.log('값이 존재하지 않습니다.')
          }
        }
      }
    }
  }
}
