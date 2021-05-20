<template>
  <div>
    <AboutCard>
      <template v-slot:title>
        <h1>Опыт работы в It?</h1>
      </template>
      <template v-slot:text>
        <div>
          Есть! Работала специалистом по тестированию на проекте Сбербанка и в стартапе Briskly.
          <br />
          Но ломать — не строить, хочу заниматься разработкой.
          <br />
          Что даже получилось на последнем месте работы! Я участвовала в разработке внутреннего
          сервиса компании: исправляла баги вестки и логики, делала новые компоненты в экосистеме
          Vue.
        </div>
      </template>
    </AboutCard>

    <AboutCard>
      <template v-slot:title>
        <h1>А что закончила?</h1>
      </template>
      <template v-slot:text>
        <div>
          РХТУ им. Д.И. Менделеева. Причем дважды.
          <br />
          Одно образование инженерное — технолог химических производств.
          <br />
          А второе гуманитарное — переводчик в сфере науки и техники (что ооочень мне помогло в
          прохождении курсов по JS)
          <br />
          Сам Js изучала по самому популярному учебнику learn.javascript.ru и с помощью тренажера на
          codecademy.com
          <br />
          Также проходила курс по Vue с преподавателем и практикой. Вот мой
          <a
            href="https://learn.javascript.ru/courses/vue-20201210/alyonatyunyaeva/ru/certificate.jpg"
            >сертификат</a
          >.
        </div>
      </template>
    </AboutCard>
    <AboutCard>
      <template v-slot:title>
        <h1>А по жизни?</h1>
      </template>
      <template v-slot:text>
        <div>
          Постоянно стремлюсь к развитию, расширяю и углубляю свои знания и разделяю в жизни научный
          подход. В работе ценю слаженность в коллективе, открытость и взаимоподдержку.
          <br />Иногда занудничаю, но это из-за того что мир сложный и интересный.
          <br />
          В последнее время в сферу моих интересов входят: чтение русской классической литературы,
          просмотр корейских сериалов, изучение английского и занятия спортом.
        </div>
      </template>
    </AboutCard>
  </div>
</template>

<script>
import AboutCard from '@/components/AboutCard/AboutCard';

export default {
  components: {
    AboutCard,
  }
};
</script>

<style></style>
