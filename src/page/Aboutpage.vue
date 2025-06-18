<template>
  <div class="min-h-screen flex flex-col">
    <!-- Our Services Section -->
    <div class="bg-gray-50 py-12">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p class="text-gray-600 mb-10 max-w-2xl mx-auto">
          Comprehensive solutions tailored to meet your unique business needs.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Web Development</h3>
            <p class="text-gray-600 mb-4">
              Custom websites and web applications built with modern technologies.
            </p>
            <p class="text-blue-600 mb-2">Starting at $2,999</p>
            <router-link to="/services/web-development" class="inline-block bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition-colors">
              Learn More
            </router-link>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Mobile Apps</h3>
            <p class="text-gray-600 mb-4">
              Native and cross-platform mobile applications for iOS and Android.
            </p>
            <p class="text-blue-600 mb-2">Starting at $4,999</p>
            <router-link to="/services/mobile-apps" class="inline-block bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition-colors">
              Learn More
            </router-link>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Digital Marketing</h3>
            <p class="text-gray-600 mb-4">
              SEO, social media, and online advertising to grow your business.
            </p>
            <p class="text-blue-600 mb-2">Starting at $999/mo</p>
            <router-link to="/services/digital-marketing" class="inline-block bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition-colors">
              Learn More
            </router-link>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Brand Design</h3>
            <p class="text-gray-600 mb-4">
              Logo design, brand identity, and visual communication solutions.
            </p>
            <p class="text-blue-600 mb-2">Starting at $1,499</p>
            <router-link to="/services/brand-design" class="inline-block bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition-colors">
              Learn More
            </router-link>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Consulting</h3>
            <p class="text-gray-600 mb-4">
              Strategic business consulting and technology advisory services.
            </p>
            <p class="text-blue-600 mb-2">Starting at $199/hr</p>
            <router-link to="/services/consulting" class="inline-block bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition-colors">
              Learn More
            </router-link>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Support</h3>
            <p class="text-gray-600 mb-4">
              Ongoing maintenance and support for all our digital assets.
            </p>
            <p class="text-blue-600 mb-2">Starting at $299/mo</p>
            <router-link to="/services/support" class="inline-block bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition-colors">
              Learn More
            </router-link>
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