import axios from 'axios'

export const moduleMembers = {
  state: {
    members: [],
    member: {
      name: '',
      age: ''
    }
  },
  mutations: {
    membersRead(state, members) {
      state.members = members
    }
  },
  actions: {
    membersCreate(thisStore, member) {
      axios.post('http://localhost:3100/api/v1/members', member).then(function(response) {
        console.log('Done membersCreate', response)
        thisStore.dispatch('membersRead')
      }).catch(function(error) {
        thisStore.dispatch('axiosError', error)
      })
    },
    membersRead(thisStore) {
      const members = [{
        name: '홍길동',
        age: 20
      }]
      thisStore.commit('membersRead', members)
      // thisStore.state.members = members
      console.log('Done membersRead', thisStore.state.members)
    },
    membersDelete(thisStore, index) {
      thisStore.state.members.splice(index, 1)
      console.log('Done membersDelete', thisStore.state.members)
    },
    membersUpdate(thisStore, { index, member }) {
      thisStore.state.members[index] = member
      console.log('Done membersUpdate', thisStore.state.members)
    }
  }
}
