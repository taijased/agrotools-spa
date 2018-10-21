<template>
    <v-layout row wrap>
        <v-flex
            v-for="n in 9"
            :key="n"
            xs12 sm6 md4
            >
            <v-card
                class="my_card"
                flat tile
            >
                <v-card-media
                  :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                  height="200px"
                  @click="toProduct(n)"
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
</template>

<script>
export default {
    methods: {
        toProduct (id) {
            this.$router.push('/product/' + id)
        }
    }

}
</script>

<style lang="less">
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
