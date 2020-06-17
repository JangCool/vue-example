<template>
    <default-layout>
      <chart-card></chart-card>
<!--      <chart-card></chart-card>-->
    </default-layout>
</template>

<script>
import DefaultLayout from '@/layout/DefaultLayout.vue'
import ChartCard from '@/components/cards/ChartCard.vue'

export default {
  name: 'App',
  components: {
    'default-layout': DefaultLayout,
    'chart-card': ChartCard
  }
}
</script>

<style>
@import "~@/assets/main.css";
</style>
