<template>
  <div>
  <div v-if="loading">
    <v-overlay >
      <v-progress-circular
      :size="70"
      :width="7"
      color="purple"
      indeterminate
    ></v-progress-circular>
    </v-overlay>
  </div>
    <router-view></router-view>
    <v-row class="mb-6" no-gutters>
        <v-col
          v-for="category in categories" :key="category.value"
          cols="12"
          sm="6"
        >
        <div v-if="gallery[category.value].length">
          <ImageCard  :gallery="gallery[category.value]" :text="category.title"/>
        </div>
        </v-col>
      </v-row>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import ImageCard from '@/components/ImageCard/ImageCard';
const categories = [
  {title:'Гифки', value: 'animated', params: {mime_types:'gif'}},
  {title:'Коты в коробке', value: 'boxes', params: { category_ids: 5} },
  {title:'Кошки в шляпках', value: 'hats', params: { category_ids: 1}},
  {title:'Космокотs', value: 'space', params: { category_ids: 2}},
]


export default {
  name: 'Gallery',

  components: {
    ImageCard,
  },
  data(){
    return {
    }
  },

  computed:{
    ...mapGetters({
      gallery: 'gallery/gallery',
      loading: 'gallery/loading',
    }),
    categories(){
      return categories;
    }
  },
  methods: {
    ...mapActions({
      getPictures: 'gallery/getPictures',
      flush: 'gallery/flush'
    }),
    getAllPictures(){

      this.categories.forEach((category)=>{
        this.getPictures({type: category.value, params: category.params });
      })
    },
    init(){
      if(!this.gallery[this.categories[0].value].length){
        this.getAllPictures();
      }
    }
  },
  mounted() {
    this.init();
  },
};
</script>
