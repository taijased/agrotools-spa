<template>
    <div>
        <v-navigation-drawer
            :clipped="$vuetify.breakpoint.lgAndUp"
            v-model="drawerState"
            fixed
            app
            >
            <v-toolbar flat>
                <v-list>
                <v-list-tile>
                    <v-list-tile-title class="title">
                    Категории
                    </v-list-tile-title>
                </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-divider></v-divider>
            <v-list dense class="pt-0">
            <v-list-tile
                v-for="item in getAllCategories"
                :key="item.title"
                @click="toCategory(item.Id)"
            >
                <v-list-tile-content>
                <v-list-tile-title>{{item.Name}}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            </v-list>
            </v-navigation-drawer>
            <v-toolbar
            :clipped-left="$vuetify.breakpoint.lgAndUp"
            color="blue darken-3"
            dark
            app
            fixed
            >
            <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
                <v-toolbar-side-icon @click="drawerState = !drawerState"></v-toolbar-side-icon>
                <router-link to="/store">
                    <span class="hidden-sm-and-down">AgroTools</span>
                </router-link>
            </v-toolbar-title>
            <v-text-field
                flat
                solo-inverted
                hide-details
                prepend-inner-icon="search"
                label="Search"
                class="hidden-sm-and-down"
            ></v-text-field>
            <v-btn large icon>
                <v-icon large>search</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-badge left color="red">
                <span  slot="badge">6</span>
                <v-icon
                large
                btn
                >
                shopping_cart
                </v-icon>
            </v-badge>
            </v-toolbar>

    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      getAllCategories: "header/getAllCategories",
    }),
    drawerState: {
      get() {
        return this.$store.getters["header/getDrawerState"];
      },
      set(val) {
        this.$store.dispatch("header/setMenu", val);
      }
    }
  },
  methods: {
    ...mapActions({
      fetchCategory: "header/fetchCategory"
    }),
    toCategory(id) {
      console.log(id);
    }
  },
  created() {
    this.fetchCategory();
  }
};
</script>

<style lang="less">
a {
    text-decoration: inherit;
    color: inherit;
}
</style>
