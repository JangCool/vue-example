import { createStore } from 'vuex'

export const store = createStore({
  modules: {
    moduleA: {
      state: {}
    }
  },
  state () {
    return {
      count: 1,
      delListCount: 0,
      list: [
        { id: '0000001', title: '목록 1 입니다.' },
        { id: '0000002', title: '목록 2 입니다.' },
        { id: '0000003', title: '목록 3 입니다.' }
      ]
    }
  },
  getters: {
    getList: (state) => {
      console.log('##### state =>', state)
      return state.list
    }
  },
  mutations: {
    delItem: (state, index) => {
      console.log('delItem index : ', state)
      console.log('delItem index : ', index)
      state.list.splice(index, 1)
    }
  },
  actions: {
    delItemAsync: ({ state, commit, rootState }, index) => {
      console.log('delItemAsync state : ', state)
      console.log('delItemAsync commit : ', commit)
      console.log('delItemAsync rootState : ', rootState)
      console.log('delItemAsync index : ', index)
      state.list.splice(index, 1)
    }
  }
})
