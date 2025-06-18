<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hero Section -->
    <div class="flex-grow flex items-center justify-center mt-6">
      <div class="text-center">
        <h1 class="text-5xl font-bold mb-4">
          <span class="text-gray-800">Build Something</span>
          <span class="text-blue-600"> Amazing</span>
        </h1>
        <p class="text-gray-600 mb-6 max-w-lg mx-auto">
          We help businesses grow with innovative solutions and exceptional service. Transform your ideas into reality with our expert team.
        </p>
        <div class="space-x-4">
          <button class="bg-black text-white px-6 py-2 rounded-none hover:bg-gray-800">
            Get Started <span class="ml-2">→</span>
          </button>
          <button class="bg-white text-gray-800 px-6 py-2 border border-gray-300 hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </div>
    </div>

    <!-- Why Choose Us Section -->
    <div class="bg-gray-50 py-12">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
        <p class="text-gray-600 mb-10 max-w-2xl mx-auto">
          We deliver exceptional results with our proven approach and dedicated team.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          <div class="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div class="flex justify-center mb-2">
              <div class="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Quality First</h3>
            <p class="text-gray-600">
              We never compromise on quality. Every project is crafted with attention to detail and excellence.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div class="flex justify-center mb-4">
              <div class="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Expert Team</h3>
            <p class="text-gray-600">
              Our experienced professionals bring years of expertise to every project we undertake.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div class="flex justify-center mb-4">
              <div class="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
            <p class="text-gray-600">
              We understand deadlines matter. Quick turnaround without sacrificing quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Additional custom styles if needed */
</style>