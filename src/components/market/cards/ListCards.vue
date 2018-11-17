<template>
    <v-layout row wrap>
        <v-flex 
            v-for="n in 9"
            :key="n"
            class="list-card"
            xs12
        >
            <v-layout row>
                <v-card-text @click="toProduct(n)">
                    <h3>Далеко-далеко за словесными горами, в стране гласных и согласных.</h3>
                    <div class="info_price">
                        123 500 руб
                    </div>
                    <div>
                        <v-icon color="green">done</v-icon>
                        <span>есть в наличии</span>
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-layout column>
                        
                        <v-layout row>
                            <v-btn color="primary darken-1" dark>
                                <v-icon dark left>shopping_cart</v-icon>В Корзину
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn color="red darken-2" dark>
                                Купить
                            </v-btn>
                        </v-layout>
                    </v-layout>
                    
                   
                </v-card-actions>
            </v-layout>
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
};
</script>

<style lang="less">
.list-card {
  margin: 10px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  .v-card__text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
}
</style>
