
<template>
  <div>
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
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
        v-for="item in allCategories"
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
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">AgroTools</span>
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
       <!-- <v-btn large icon>
        <v-icon large>list</v-icon>
      </v-btn>
      <v-btn large icon>
        <v-icon large>apps</v-icon>
      </v-btn>
      -->
      <v-badge left color="red">
        <span  slot="badge">6</span>
        <v-icon
          large
          btn
        >
          shopping_cart
        </v-icon>
      </v-badge>
      <!-- <v-badge color="red">
        <span  slot="badge">!</span>
        <v-icon
          large
          btn
        >
          mail
        </v-icon>
      </v-badge> -->
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data: () => ({
      baseUrl: 'http://agrotools.store/',
      drawer: null,
      errors: [],
      allCategories: null
    }),
    methods: {
      toCategory (id) {
        console.log(id)
      }
    },
    created () {
      axios.get(this.baseUrl + 'categories')
        .then(response => {
          this.allCategories = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
</script>
