<template>
  <div>
    <v-row class="d-flex ma-12">
      <v-col cols="8">
        <v-card class="pa-12">
          <v-card-title>
            <slot name="title"></slot>
          </v-card-title>
          <v-spacer></v-spacer>
          <v-card-text class="subtitle-1">
            <slot name="text"></slot>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>