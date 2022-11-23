<template>
  <div id="app">
    <HeaderComponent v-show="true"></HeaderComponent>
    <hr />
    <div class="container">
      <NavComponent v-if="true"></NavComponent>
      <hr />
      <section class="contents">
        <router-view></router-view>
      </section>
      <hr />
    </div>
    <FooterComponent :title="'카피라이트'"></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import NavComponent from './components/NavComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  components: {
    HeaderComponent,
    NavComponent,
    FooterComponent
  }
}
</script>
