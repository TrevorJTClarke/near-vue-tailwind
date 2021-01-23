<template>
  <main class="bg-gray-50 dark:bg-gray-900">
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
}
</script>

<style>
.filter-blur {
  filter: blur(5px)
}
</style>