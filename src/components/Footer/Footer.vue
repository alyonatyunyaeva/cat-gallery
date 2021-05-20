<template>
  <div>
    <v-footer color="blue-grey lighten-3" padless>
      <v-row justify="center" no-gutters>
        <v-col class="blue-grey lighten-3 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>AlyonaTyunyaeva on </strong>
          <a href="https://github.com/alyonatyunyaeva?tab=repositories"> gitHub</a>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({})
};
</script>
