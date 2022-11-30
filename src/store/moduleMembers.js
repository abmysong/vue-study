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
      axios.get('http://localhost:3100/api/v1/members').then(function(response) {
        console.log('Done membersRead', response)
        thisStore.commit('membersRead', response.data.members)
      }).catch(function(error) {
        thisStore.dispatch('axiosError', error)
      })
    },
    membersDelete(thisStore, index) {
      axios.delete('http://localhost:3100/api/v1/members/' + index).then(function(response) {
        console.log('Done membersDelete', response)
        thisStore.dispatch('membersRead')
      }).catch(function(error) {
        thisStore.dispatch('axiosError', error)
      })
    },
    membersUpdate(thisStore, { index, member }) {
      thisStore.state.members[index] = member
      console.log('Done membersUpdate', thisStore.state.members)
    }
  }
}
