<template>
    <v-breadcrumbs>
        <v-icon slot="divider">chevron_right</v-icon>
        <v-breadcrumbs-item
            v-for="item in 3"
            :disabled="item.disabled"
            :key="item"
            class="gray"
        >
            {{ 'Link' + item }}
        </v-breadcrumbs-item>
        <v-spacer></v-spacer>
        <div>
            <v-btn 
                icon 
                :disabled="getViewCards"
                @click="setViewCards(!getViewCards)"
                >
                <v-icon>apps</v-icon>
            </v-btn>
            <v-btn 
                icon 
                :disabled="!getViewCards"
                @click="setViewCards(!getViewCards)"
                >
                <v-icon>list</v-icon>
            </v-btn>
        </div>
    </v-breadcrumbs>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      getViewCards: "breadcrumbs/getViewCards"
    })
  },
  methods: {
    ...mapActions({
      setViewCards: "breadcrumbs/setViewCards"
    })
  }
};
</script>

<style lang="less">
.v-pagination__item {
  outline: none !important;
}
</style>

