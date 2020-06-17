<template>
    <card>
    <!-- 단일 slot 예제-->
        <card-header v-bind="state">
            <button-group />
        </card-header>
        <card-body />
    <!-- 단일 slot 예제-->

    <!--
        <template v-slot:card-body>
            <card-header>
            </card-header>
        </template>
        <template v-slot:card-header>
            <card-body>
            </card-body>
        </template>
    -->
    </card>
</template>

<script>

import Card from '@/components/cards/default/Card.vue'
import CardHeader from '@/components/cards/default/CardHeader.vue'
import CardBody from '@/components/cards/default/CardBody.vue'
import ButtonGroup from '@/components/buttons/ButtonGroup.vue'

export default {
  name: 'chart-card',
  components: {
    card: Card,
    'card-header': CardHeader,
    'card-body': CardBody,
    'button-group': ButtonGroup
  },
  setup () {
    return {
      state: { title: '차트 제목', isButton: false }
    }
  }
}
</script>

<style>

</style>
