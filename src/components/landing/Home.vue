<template>
	<v-content>
      <Header/>
      <section>
        <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <img src="https://png.icons8.com/color/160/gears.png" alt="Vuetify.js" height="200">
            <h1 class="white--text mb-2 display-1 text-xs-center">
            	Магазин сельхоз запчасти, инструменты, материалы, РТИ.
            </h1>
            <div class="subheading mb-3 text-xs-center">Наше счастье в общем труде.</div>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              to='/store'
            >
              Перейти в магазин
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section id="about_us">
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Онлайн магазин AgroStore.ru</h2>
              <span class="subheading">
                Интернет магазин агрозапчастей является превосходным решением для покупки запчастей
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-start justify-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">store</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Широкий ассортимент</div>
                    </v-card-title>
                    <v-card-text>
					 <p>На сегодняшний день ассортимент товара представленного в интернет магазине запчастей на автомобили превысил 18 000 позиций. Если вы не нашли в каталоге необходимых комплектующих, оставьте заявку менеджерам– искомые запчасти будут доставлены в кратчайшие сроки со складов наших партнеров и поставщиков.</p>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Отличный сервис</div>
                    </v-card-title>
                    <v-card-text>
                      <p>Если Вам нужна помощь по поиску и подбору запчастей, менеджеры к Вашим услугам, свяжитесь любым удобным для вас способом, раздел контакты. Понимая, что завоевать доверие клиента намного сложнее, мы прилагаем максимум усилий повышая уровень сервиса, постоянно развивая и улучшая ресурс, а также предлагая своим заказчикам сопутствующие товары – расходные материалы и аксессуары</p>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Оригинальные товары</div>
                    </v-card-title>
                    <v-card-text>
                      <p>Покупая запчасти в у нас немаловажно то, что Вам ненужно переживать о том настоящие сельхоззапчасти и другие сопутсвующие товары, мы принципиально не продаем поддельную (контрафактную) продукцию, а приобретаем их только у производителей, официальных представительств или дистрибьюторов, что дает возможность быть уверенным в оригинальности запчастей.</p> 
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
      <section id="payment">
        <v-parallax src="http://znak.at.ua/_ph/12/229054640.jpg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Стоимость доставки заказов в пункты выдачи онлайн магазина AgroShop.ru</div>
            <em>Нажав ниже можно узнать цену доставки</em>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
            >
              Узнать цену
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>
     
      <section id="contacts">
        <v-container grid-list-xl>
          <v-layout row wrap align-start justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Реквизиты</div>
                </v-card-title>
                <v-card-text>
                	<p>ПАО "ЛУЧШИЙБАНК" г.Можга</p>
                	<p>ОГРН1037739431744</p>
                	<p>ИНН7723166538</p>
                	<p>Кор/сч 30101810500000000256</p>
                		<p>БИК 044525246</p>
                	<p>р/с 40702810497320000019</p>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Контакты</div>
                </v-card-title>
                <v-card-text>
                	<p>Онлайн магазин работат круглосуточно. Самовывоз Пн-Пт с 8-00 до 17-00 ч
						Сб-Вс с 8-00 до 14-00 ч</p>
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>8 (34139) 3-50-42</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      	<v-list-tile-title>
                      		Россия, Удмуртская республика,
                  		</v-list-tile-title>
                  		<v-list-tile-title>
                  			г. Можга, ул. Ивана Быстрых, 74А
                  		</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>agrostore@agrostore.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <Footer/>
    </v-content>

</template>
<script>
import Footer from './Footer'
import Header from './Header'
	export default {
    components: {
      Header,
      Footer
    }
	}
</script>