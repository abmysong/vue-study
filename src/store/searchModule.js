import axios from 'axios'

export const searchModule = {
  actions: {
    searchRead(thisStore, q) {
      const url = '/api/v1/search?q=' + q
      axios.get(url).then(function(response) {
        console.log('Done searchRead', response)
        thisStore.commit('membersRead', response.data.members)
      }).catch(function(error) {
        thisStore.dispatch('axiosError', error)
      })
    }
  }
}
