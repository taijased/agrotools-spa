
<template>
  <div>
    <Toolbar/>
    <v-content>
      <BreadCrumbs/>
      <router-view></router-view>
    </v-content>
  </div>
</template>

<script>
  import BreadCrumbs from '../components/market/BreadCrumbs.vue'
  import Toolbar from '../components/market/Toolbar.vue'
  export default {
    components: {
      BreadCrumbs,
      Toolbar
    }
  }
</script>
