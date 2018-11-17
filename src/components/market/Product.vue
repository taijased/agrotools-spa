<template>
    <v-container fluid>
        <v-card
            class="my_card"
            flat tile
            >
            <v-card-media
                :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                height="200px"
                >
                <v-layout>
                    <v-spacer></v-spacer>
                    <img src="https://www.ecco-shoes.ru/assets/projects/desert/img/stock.png" class="in_stock">
                </v-layout>
            </v-card-media>
            <v-card-title class="info_card">
                <div>
                    <v-icon color="green">done</v-icon>
                    <span>есть в наличии</span>
                </div>
                <v-spacer></v-spacer>
                <div class="info_price">
                    123 500 руб
                </div>
            </v-card-title>
            <v-card-text>
                <h3>Далеко-далеко за словесными горами, в стране гласных и согласных.</h3>
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary darken-1" dark>
                    <v-icon dark left>shopping_cart</v-icon>В Корзину
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="red darken-2" dark>
                    Купить
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      titleName: "Название товара"
    };
  },
  methods: {
    ...mapActions({
      setNewUrl: "breadcrumbs/setNewUrl"
    })
  },
};
</script>
