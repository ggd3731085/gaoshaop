<template>
  <div id="apps">
    <v-card class="mx-auto overflow-hidden" height="400">
      <v-app-bar color="deep-purple" dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>{{title}}</v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title @click="search">検索画面</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title @click="input">入力画面</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title @click="list">社員一覧</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

	<div v-if="title=='検索画面'">
		  <v-data-table
		  	:headers="headers"
		  	:items="desserts"
		  	:items-per-page="5"
		  	class="elevation-1"
		  ></v-data-table>
	    </div>
	    <div v-else-if="title=='入力画面'">
	    	<InputMainView></InputMainView>
	    </div>
	    <div v-else-if="title=='社員一覧'">
	    	<ListMainView></ListMainView>
	    </div>

    </v-card>

  </div>
</template>
<script>
import InputMainView from './InputPage.vue'
import ListMainView from './ListPage.vue'
export default{
  data () {
        return {
          drawer: false,
          group: null,
          title: '検索画面',
            headers: [
              {
                text: 'Dessert (100g serving)',
                align: 'start',
                sortable: false,
                value: 'name',
              },
              { text: 'Calories', value: 'calories' },
              { text: 'Fat (g)', value: 'fat' },
              { text: 'Carbs (g)', value: 'carbs' },
              { text: 'Protein (g)', value: 'protein' },
              { text: 'Iron (%)', value: 'iron' },
            ],
            desserts: [
              {
                name: 'Frozen Yogurt',
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                iron: '1%'
              },
              {
                name: 'Ice cream sandwich',
                calories: 237,
                fat: 9.0,
                carbs: 37,
                protein: 4.3,
                iron: '1%'
              },
              {
                name: 'Eclair',
                calories: 262,
                fat: 16.0,
                carbs: 23,
                protein: 6.0,
                iron: '7%'
              },
              {
                name: 'Cupcake',
                calories: 305,
                fat: 3.7,
                carbs: 67,
                protein: 4.3,
                iron: '8%'
              },
              {
                name: 'Gingerbread',
                calories: 356,
                fat: 16.0,
                carbs: 49,
                protein: 3.9,
                iron: '16%'
              },
              {
                name: 'Jelly bean',
                calories: 375,
                fat: 0.0,
                carbs: 94,
                protein: 0.0,
                iron: '0%'
              },
              {
                name: 'Lollipop',
                calories: 392,
                fat: 0.2,
                carbs: 98,
                protein: 0,
                iron: '2%'
              },
              {
                name: 'Honeycomb',
                calories: 408,
                fat: 3.2,
                carbs: 87,
                protein: 6.5,
                iron: '45%'
              },
              {
                name: 'Donut',
                calories: 452,
                fat: 25.0,
                carbs: 51,
                protein: 4.9,
                iron: '22%'
              },
              {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: '6%'
              }
            ]
        }
    },
    components: {
	    InputMainView,
			ListMainView
	  },
    methods: {
      input () {
        this.title = '入力画面'
        console.log(this.title)
      },
      list () {
        this.title = '社員一覧'
        console.log(this.title)
      },
      search () {
      this.title = '検索画面'
      console.log(this.title)
      }
    }
}
</script>
