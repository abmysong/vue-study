import { createStore } from 'vuex'
import { membersModule } from './membersModule.js'
import { searchModule } from './searchModule.js'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    axiosError(_, error) {
      console.error(error.response || error.message || error)
      alert((error.response && error.response.statusText) || error.message || '알 수 없는 오류가 발생 하였습니다.')
    }
  },
  modules: {
    $members: membersModule,
    $search: searchModule
  }
})
