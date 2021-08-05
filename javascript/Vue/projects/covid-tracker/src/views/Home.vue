<template>
  <main>
    <DataTitle :dataDate="dataDate" :text="title" />
    안녕
  </main>
</template>

<script>
import {ref} from 'vue'
import DataTitle from '@/components/DataTitle'

export default {
  name: 'Home',
  components: {
    DataTitle,
  },
  setup() {
    const loading = ref(true)
    const title = ref('Global')
    const dataDate = ref('');
    const status = ref({})
    const countries = ref([])

    const fetchCovidData = async () => {
      const res = await fetch('https://api.covid19api.com/summary');
      return await res.json();
    };

  }
}
</script>
