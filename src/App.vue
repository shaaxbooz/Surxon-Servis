<template>
  <header>
    <Navbar />
  </header>
  <section>
    <router-view/>
  </section>
  <footer>
    <Footer />
  </footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
    font-family: "Inter";
    font-weight: 400;
}
</style>