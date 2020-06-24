<template>
    <div class="header-vuex">
      <button>목록 출력({{ totalCount }})</button>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { computed } from 'vue'
// eslint-disable-next-line no-unused-vars
import { useStore, mapGetters } from 'vuex'

export default {
  name: 'vuex-top',
  setup (props, context) {
    const store = useStore()

    // const totalCount = () => {
    //   return store.state.list.length
    // }

    const totalCount = computed(() => {
      return store.state.list.length
    })

    return {
      totalCount
    }
  }
}
</script>

<style scope>
.header-vuex {
  width: 300px;
  border: 1px solid #000
}

</style>
