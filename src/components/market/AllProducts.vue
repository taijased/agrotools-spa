<template>
  <v-container fluid>
    <v-layout>
        <v-flex>
            <v-container class="grid-list-lg" v-if="getViewCards" fluid>
                <AppCards/>
            </v-container>
            <v-container v-else>
                <ListCards/>
            </v-container>
        </v-flex>
    </v-layout>
    <Pagination/>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";

import Pagination from "./Pagination";
import AppCards from "./cards/AppCards";
import ListCards from "./cards/ListCards";
export default {
  computed: {
    ...mapGetters({
      getViewCards: "breadcrumbs/getViewCards"
    })
  },
  components: {
    Pagination,
    ListCards,
    AppCards
  }
};
</script>

<style lang"less" scoped>
</style>
