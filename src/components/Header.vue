<template>
<header>
  <div class="z-10 relative">
    <div class="mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/">
            <img class="h-10 w-auto sm:h-10" src="/near-logo.svg" alt="">
          </router-link>
        </div>
        <div :class="{hidden: mobileMenuActive}" @click.prevent="mobileMenuActive = true" class="-mr-2 -my-2 md:hidden">
          <button type="button" class="p-2 inline-flex items-center justify-center text-gray-300 hover:text-gray-50 focus:outline-none">
            <span class="sr-only">Open menu</span>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav class="hidden md:flex space-x-10">
          <router-link to="/#1" class="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">
            Link 1
          </router-link>
          <router-link to="/#2" class="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">
            Link 2
          </router-link>
          <router-link to="/#3" class="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">
            Link 3
          </router-link>
        </nav>

        <div v-if="accountId" class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <div class="relative inline-block text-left">
            <div>
              <button type="button" @click.prevent="toggleAccountMenu" class="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-700 shadow-sm px-4 py-2 bg-opacity-0 text-sm font-medium text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true">
                <svg class="-ml-1 mr-2 h-5 w-5 stroke-current text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <span v-if="accountId">{{ accountId }}</span>
                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>

            <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5" :class="{hidden: !accountMenuActive}">
              <div @click="accountMenuActive = false" class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <router-link to="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-50" role="menuitem">Link 1</router-link>
                <button @click.prevent="logout" type="submit" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-50" role="menuitem">
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-if="!accountId" class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a href="" @click.prevent="login" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-200">
            Log in
          </a>
          <router-link to="/" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blush-600 hover:bg-blush-700">
            Link 4
          </router-link>
        </div>

        <!-- <div class="flex justify-end flex-0">
          <ToggleTheme />
        </div> -->
      </div>
    </div>

    <div :class="{hidden: !mobileMenuActive}" class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div class="pt-5 pb-6 px-5">
          <div class="flex items-center justify-between">
            <div>
              <img class="h-8 w-auto sm:h-10" src="/near-logo.svg" alt="">
            </div>
            <div class="-mr-2" @click.prevent="mobileMenuActive = false">
              <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span class="sr-only">Close menu</span>
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-6">
            <nav class="grid gap-y-8">
              <router-link to="/#1" @click="mobileMenuActive = false" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                <svg class="flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900">
                  Link 1
                </span>
              </router-link>

              <router-link to="/#2" @click="mobileMenuActive = false" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                <svg class="flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900">
                  Link 2
                </span>
              </router-link>

              <router-link to="/#3" @click="mobileMenuActive = false" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                <svg class="flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900">
                  Link 3
                </span>
              </router-link>
            </nav>
          </div>
        </div>
        <div class="py-6 px-5 space-y-6">
          <div>
            <router-link to="/#" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blush-600 hover:bg-blush-700">
              Link 4 →
            </router-link>
            <p class="mt-6 text-center text-base font-medium text-gray-500">
              Existing customer?
              <a href="" @click.prevent="login" class="text-blush-600 hover:text-blush-700">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</header>
</template>

<script>
import { mapActions } from 'vuex'
import ToggleTheme from './ToggleTheme.vue'

export default {
  name: 'Header',

  components: {
    ToggleTheme,
  },

  data() {
    return {
      accountId: null,
      mobileMenuActive: false,
      accountMenuActive: false,
      timer: null,
    }
  },

  methods: {
    ...mapActions(['update']),
    hideAccountMenu() {
      this.accountMenuActive = false
    },
    toggleAccountMenu() {
      if (this.timer) clearTimeout(this.timer)
      if (this.accountMenuActive === false) {
        setTimeout(() => {
          this.accountMenuActive = false
        }, 5000)
      }
      this.accountMenuActive = !this.accountMenuActive
    },

    async login() {
      await this.$near.loginAccount()
    },
    logout() {
      this.$near.logoutAccount()
    },
    setAccount() {
      this.accountId = this.$near.user && this.$near.user.accountId ? this.$near.user.accountId : null
      this.update({ key: 'account_id', value: this.accountId })
      this.update({ key: 'account', value: { ...this.$near.user } })
    },
  },

  mounted() {
    // Just needs to wait for next tick
    setTimeout(() => {
      this.setAccount()
    }, 40)
    setTimeout(() => {
      this.setAccount()
    }, 4000)
  },

  watch: {
    $route: ['hideAccountMenu'],
  },
}
</script>
