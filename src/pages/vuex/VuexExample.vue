<template>
  <div>
    <p>Vuex 테스트 페이지 입니다!</p>
    <vuex-top></vuex-top>
    <vuex-list></vuex-list>
  </div>
</template>

<script>

import VuexTop from '@/pages/vuex/VuexTop.vue'
import VuexList from '@/pages/vuex/VuexList.vue'

export default {
  name: 'vuex-example',
  components: {
    'vuex-top': VuexTop,
    'vuex-list': VuexList
  },
  setup (props, context) {
  }
}
</script>
