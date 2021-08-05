<template>
  <Header/>
  <div class="container">
    <Home/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    Header
  }
}
</script>