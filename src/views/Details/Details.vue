<template>
  <div v-if="currentPic">
    <v-overlay>
      <v-card class="pa-xs-2 pa-md-10" max-width="600" color="white">
        <v-card-text class="text--primary">
          <p class="display-1 text--primary text-h6">
            Самые горячие подробности о картинке:
          </p>
          <div class="text--primary">
            ID: {{ currentPic.id }} <br />
            URL: {{ currentPic.url }}
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="teal accent-4" @click="goBack">
            Назад
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-overlay>
  </div>
</template>
<script>
import { mapGetters} from 'vuex';

export default {
  name: 'Details',
  computed: {
    ...mapGetters({
      currentPic: 'gallery/currentPic',
    }),
  },
  methods: {
    goBack(){
      this.$router.back();
    }
  }
}
</script>

<style></style>
