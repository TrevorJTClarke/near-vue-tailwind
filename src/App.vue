<template>
  <main class="bg-turquoise-50 dark:bg-turquoise-1000">
    <Header />

    <router-view />
  </main>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: {
    Header,
  },

  async mounted() {
    await this.$nearInit()
  }
}
</script>

<style>
.filter-blur {
  filter: blur(5px)
}
</style>