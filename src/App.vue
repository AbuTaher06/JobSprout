<script setup>
import { RouterView } from 'vue-router';
import App from './App.vue';
import Toast from 'vue-toastification'; // Add this line
import 'vue-toastification/dist/index.css'; // Add this line
import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <Navbar />
  <RouterView />
</template>