<template>
  <p>메인페이지 입니다.!!</p>
</template>

<script>

import { useRouter } from 'vue-router'

export default {
  name: 'main-page',
  setup (props, context) {
    const router = useRouter()
    const path = router.currentRoute.value.path

    console.log('context...', context)
    console.log('router...', router)
    console.log('path...', path)
  }
}
</script>
