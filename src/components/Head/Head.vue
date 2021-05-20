<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" @click="handleClick(item.value)">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://avatars.githubusercontent.com/u/59454440?v=4"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>Alyona Tyunyaeva</v-list-item-title>
          <v-list-item-subtitle>
            <v-icon x-small>mdi-send</v-icon>
            @tyunyaevaa
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <v-icon x-small>mdi-email</v-icon>
            alyonatyunyaeva@gmail.com
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <h1>
          Cat gallery
        </h1>
      </v-toolbar-title>
    </v-app-bar>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        items: [
          { title: 'Gallery', value: 'gallery', icon: 'mdi-image-outline' },
          { title: 'About',value: 'about', icon: 'mdi-information-outline' },
        ],
        mini: true,
      }
    },
    methods:{
      handleClick(route){
        this.$router.push({name: route});
      },
    }
  }
</script>

<style></style>
