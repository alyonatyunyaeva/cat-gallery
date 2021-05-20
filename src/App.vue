<template>
  <v-app>
    <Head>
      <v-main>
        <router-view/>
      </v-main>
    </Head>
    <Footer/>
  </v-app>
</template>

<script>
import Head from '@/components/Head/Head';
import Footer from '@/components/Footer/Footer';

export default {
  name: 'App',
  components: {
    Head,
    Footer,
  },
  data: () => ({
  }),
};
</script>
