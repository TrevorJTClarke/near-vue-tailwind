<template>
  <main>
    <div class="z-0 relative overflow-hidden bg-gray-100 dark:bg-gray-700">
      <div class="relative mx-auto z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

        <main class="my-40 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="text-center">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-50 sm:text-5xl md:text-6xl">
              <span class="block xl:inline">NEAR, Vue 3</span><br>
              <span class="block text-orange-300 xl:inline">Tailwind 2</span>
            </h1>
            <p class="mt-3 text-base text-gray-500 sm:max-w-lg mx-auto">
              A quick starter kit including all the pre-configured basics, enabling easy setup for a blockchain dApp.
            </p>
            <div class="mt-5 sm:mt-8 sm:flex justify-center">
              <div class="rounded-md shadow">
                <router-link to="/onboarding" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Click Me →
                </router-link>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                  Or Click This
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

    <div class="bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span class="block text-gray-900 dark:text-white">Cool CTA in footer area</span>
          <span class="block text-gray-600">Because actions need noticing somewhere.</span>
        </h2>
        <div class="mt-8 lex lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex rounded-md shadow">
            <router-link to="/onboarding" class="inline-flex items-center justify-center px-10 py-5 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">
              Do thing →
            </router-link>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
export default {
  name: 'Home',
}
</script>