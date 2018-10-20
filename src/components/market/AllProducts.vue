<template>
  <v-container fluid>
      <div>
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
            <v-btn  icon>
                <v-icon>apps</v-icon>
            </v-btn>
            <v-btn  icon>
                <v-icon>list</v-icon>
            </v-btn>
        </v-breadcrumbs>
      </div>

    <v-layout>
        <v-flex>
            <v-container class="grid-list-lg" fluid>
            <v-layout row wrap>
                <v-flex
                    v-for="n in 9"
                    :key="n"
                    xs12 sm6 md4
                    >
                    <v-card
                        class="my_card"
                        flat tile
                        :to="'/product'"
                    >
                        <v-card-media
                        :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                        height="200px"
                        >
                            <v-layout>
                                <!-- <img src="http://moldir.su/wp-content/uploads/2016/11/moldir.su_vsye_v_nalichii-300x300.png" class="in_stock"> -->
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
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>
    </v-layout>
    <div class="text-xs-center">
        <v-container>
            <v-layout justify-center>
                <v-flex xs8>
                    <v-pagination
                        v-model="page"
                        :length="15"
                        circle
                    ></v-pagination>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      page: 1
    }
  }
}
</script>

<style scoped>
v-pagination {
  outline: none;
}
.my_card {
  cursor: pointer;
}
.my_card:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}
.in_stock {
  height: 100px;
  width: 100px;
}
.info_card {
    margin: 0;
    padding-bottom: 0;
    font-size: 12px;
}
.info_price {
    font-weight: bold;
    font-size: 20px;
}
</style>
