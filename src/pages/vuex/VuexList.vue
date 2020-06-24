/* eslint-disable no-unused-vars */
<template>
    <div class="list">
      <ul>
        <li v-for="(data, index) in getList" :key="data.id">{{ data.id }}, {{ data.title }} : {{ index }}<button @click='delItem(index)'>삭제</button></li>
      </ul>
    </div>
</template>

<script>
// import { reactive, ref } from 'vue'
// eslint-disable-next-line no-unused-vars
import { computed, watch } from 'vue'
// eslint-disable-next-line no-unused-vars
import { useStore, mapGetters } from 'vuex'

export default {
  name: 'vuex-list',
  setup (props, context) {
    // eslint-disable-next-line no-use-before-define
    const store = useStore()
    console.log(store)

    const getList = computed(() => {
      return store.state.list
    })

    const delItem = (index) => {
      // store.commit('delItem', index)
      store.dispatch('delItemAsync', index)
    }
    watch(store.state.list, (newValue, oldValue) => {
      console.log('list watch => ', newValue, oldValue)
    })

    return {
      getList,
      delItem
    }
  }
}
</script>

<style scope>
.list {
  width: 300px;
  height: 500px;
  border: 1px solid #000
}

</style>
