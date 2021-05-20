<template>
  <v-card elevation="0" class="ma-14" color="blue-grey lighten-5">
    <v-carousel
      show-arrows-on-hover
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="300"
    >
      <div v-for="picture in gallery" :key="picture.id">
        <v-hover v-model="hover">
          <v-carousel-item :src="picture.url">
            <v-row class="fill-height" align="center" justify="center" v-show="hover">
              <v-btn elevation="2" rounded @click="handleOnClick(picture)">
                Подробнее
              </v-btn>
            </v-row>
          </v-carousel-item>
        </v-hover>
      </div>
    </v-carousel>
    <v-card-title>{{ text }}</v-card-title>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props:{
    gallery: Array,
    text: String,
  },
  data(){
    return {
      hover: false,
    }
  },
  methods: {
    ...mapActions({
      setCurrentPic: 'gallery/setCurrentPic',
    }),
    handleOnClick(picture){
      this.$router.push({name: 'details'});
      this.setCurrentPic(picture);
    },
  },
}
</script>

<style></style>
