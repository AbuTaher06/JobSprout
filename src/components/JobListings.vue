<script setup>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import JobListing from '@/components/JobListing.vue';

import axios from 'axios';
import { reactive, defineProps,onMounted } from 'vue';

import { RouterLink } from 'vue-router';


const props = defineProps({
  limit: Number,
  showButton:{
    type: Boolean,
    default: true,
  },
});

const state = reactive({
  jobs: [],
  isLoading: true,
});
onMounted(async () => {
  try{
    const response = await axios.get('http://localhost:8000/jobs');
    state.jobs = response.data;
  }catch(error){
    console.error('Error fetching jobs:', error); 
  }finally{
    state.isLoading = false;
  }
  

})
</script>

<template>
  <section  v-if="showButton" class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <!-- Show loading spinner or placeholder while isLoading is true -->
       <div v-if="state.isLoading" class="text-center text-gray-500 py-6"><PulseLoader />
      </div>

       <!-- Show job listings when isLoading is false -->

      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Iterate over jobs array -->
        <JobListing
         v-for="(job,index) in state.jobs.slice(
          0,
           props.limit || state.jobs.length)"
            :key="job.id||index "
            :job="job" />
      </div>
    </div>
  </section>

  <section class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      href="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>