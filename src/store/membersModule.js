import axios from 'axios'

export const membersModule = {
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
      axios.post('/api/v1/members', member).then(function(response) {
        console.log('Done membersCreate', response)
        thisStore.dispatch('membersRead')
      }).catch(function(error) {
        thisStore.dispatch('axiosError', error)
      })
    },
    membersRead(thisStore) {
      axios.get('/api/v1/members').then(function(response) {
        console.log('Done membersRead', response)
        thisStore.commit('membersRead', response.data.members)
      }).catch(function(error) {
        thisStore.dispatch('axiosError', error)
      })
    },
    membersDelete(thisStore, index) {
      axios.delete('/api/v1/members/' + index).then(function(response) {
        console.log('Done membersDelete', response)
        thisStore.dispatch('membersRead')
      }).catch(function(error) {
        thisStore.dispatch('axiosError', error)
      })
    },
    membersUpdate(thisStore, { index, member }) {
      axios.patch('/api/v1/members/' + index, member).then(function(response) {
        console.log('Done membersUpdate', response)
        thisStore.dispatch('membersRead')
      }).catch(function(error) {
        thisStore.dispatch('axiosError', error)
      })
    }
  }
}
