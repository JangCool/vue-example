<template>
  <div>
    <p>사용자 페이지 입니다! {{params.id}}</p>
    <router-view></router-view>
  </div>
</template>

<script>

import { useRouter } from 'vue-router'

export default {
  name: 'profile',
  setup (props, context) {
    const router = useRouter()
    const params = router.currentRoute.value.params

    console.log('context...', context)
    console.log('router...', router)
    console.log('params...', params)

    return {
      params
    }
  }
}
</script>
