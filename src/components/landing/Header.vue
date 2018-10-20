<template>
    <header>
        <v-navigation-drawer
          app
          temporary
          v-model="drawer"
      >
          <v-list>
            <v-list-tile
              v-for="link in links"
              :key="link.title"
              :to="link.url"
            >
              <v-list-tile-action>
                <v-icon>{{link.icon}}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="link.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>exit_to_app</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="'Logout'"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
      </v-navigation-drawer>
          <v-toolbar>
            <v-toolbar-side-icon
              @click="drawer = !drawer"
              class="hidden-md-and-up"
             ></v-toolbar-side-icon>
              
            <img src="https://png.icons8.com/color/160/gears.png" alt="Vuetify.js" height="100%">
         
            <v-spacer></v-spacer>
            <v-toolbar-items 
              class="hidden-sm-and-down"
              v-if="searchIsActive"
            >
              <v-btn flat 
                v-for="link in links"
                :key="link.title"
                :to="link.url"
              >{{link.title}}</v-btn>
            </v-toolbar-items>
          </v-toolbar>
    </header>
</template>
<script>
export default {
  data () {
    return {
      drawer: false,
      searchIsActive: true,
      searchQuery: '',
      links: [
        {
          title: 'О компании',
          url: '',
          icon: ''
        },
        {
          title: 'Доставка и Оплата',
          url: '',
          icon: ''
        },
        {
          title: 'Контакты',
          url: '',
          icon: ''
        },
        {
          title: 'Магазин',
          url: '/store',
          icon: ''
        }
      ]
    }
  }
}
</script>