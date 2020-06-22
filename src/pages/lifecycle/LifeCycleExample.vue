<template>
  <div class="life-cycle">
      life cycle
  </div>
</template>

<script>
import {
  // reactive,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onErrorCaptured,
  onMounted,
  onUnmounted,
  onUpdated
} from 'vue'

export default {
  name: 'lifecycle-example',
  setup (props) {
    // const data = reactive({
    //   lifeCycle: 'life cycle'
    // })

    console.log('lifecycle-example... setup()')

    onBeforeMount(() => {
      console.log('lifecycle-example... onBeforeMount()')
    })

    onMounted(() => {
      console.log('lifecycle-example... onMounted()')
    })

    onBeforeUpdate(() => {
      console.log('lifecycle-example... onBeforeUpdate()')
    })

    onUpdated(() => {
      console.log('lifecycle-example... onUpdated()')
    })

    onBeforeUnmount(() => {
      console.log('lifecycle-example... onBeforeUnmount()')
    })

    onUnmounted(() => {
      console.log('lifecycle-example... onUnmounted()')
    })

    onErrorCaptured(() => {
      console.log('lifecycle-example... onErrorCaptured()')
    })

    return {}
  }
}
</script>

<style>
.life-cycle{
  border: 1px solid red;
  width: 500px;
  height: 300px;
}
</style>
