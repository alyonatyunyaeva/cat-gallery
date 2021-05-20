<template>
  <div>
    <v-row class="ma-md-12 ma-xs-2">
      <v-col cols="md-8">
        <v-card class="pa-md-12 pa-xs-2">
          <v-card-title class="text-body-2 text-md-h6">
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
export default {};
</script>

<style></style>
