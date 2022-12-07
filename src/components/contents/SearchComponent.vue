<template>
  <div>
    <h3>Search</h3>
    <hr class="d-block" />
    <div>
      <form @submit.prevent="searchRead()">
        <input type="text" placeholder="Search" v-model="q" />
        <button>Search</button>
      </form>
    </div>
    <hr class="d-block" />
    <div>
      <table class="table-search">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(member, key) in members" :key="key">
            <td>{{member.name}}</td>
            <td>{{member.age}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      q: ''
    }
  },
  computed: {
    members() {
      return this.$store.state.$members.members
    }
  },
  methods: {
    searchRead() {
      this.$router.push({
        name: 'Search',
        query: { q: this.q }
      })
    }
  },
  created() {
    this.q = this.$route.query.q || ''
    this.$store.dispatch('searchRead', this.q)
  }
}
</script>
