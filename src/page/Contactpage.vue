<template>
  <div class="min-h-screen flex flex-col">
    <!-- Get In Touch Section -->
    <div class="bg-gray-50 py-12">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="text-center ">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p class="text-gray-600 mb-6 max-w-md">
            Ready to start your project? Contact us today for a free consultation.
          </p>
          <div class="space-y-6">
            <div class="flex items-center gap-3 justify-center ">
              <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <p class="font-medium">Email Us</p>
                <p class="text-gray-600">hello@yourbrand.com</p>
                <p class="text-gray-600">support@yourbrand.com</p>
              </div>
            </div>
            <div class="flex items-center gap-3 justify-center">
              <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <p class="font-medium">Call Us</p>
                <p class="text-gray-600">+1 (555) 123-4567</p>
                <p class="text-gray-600">Mon-Fri 9AM-6PM EST</p>
              </div>
            </div>
            <div class="flex items-center gap-3 justify-center ">
              <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <p class="font-medium">Visit Us</p>
                <p class="text-gray-600">123 Business Ave</p>
                <p class="text-gray-600">New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input v-model="form.firstName" type="text" placeholder="First Name" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input v-model="form.lastName" type="text" placeholder="Last Name" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <input v-model="form.email" type="email" placeholder="Email" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input v-model="form.subject" type="text" placeholder="Subject" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea v-model="form.message" placeholder="Message" class="w-full p-2 border border-gray-300 rounded h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            <button type="submit" class="w-full bg-black text-white p-2 rounded hover:bg-gray-800 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // Handle form submission logic here (e.g., send to an API)
  console.log('Form submitted:', form.value)
  // Reset form after submission
  form.value = { firstName: '', lastName: '', email: '', subject: '', message: '' }
}
</script>

<style scoped>
/* Additional custom styles if needed */
</style>