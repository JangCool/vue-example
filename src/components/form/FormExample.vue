<template>
    <input v-bind:value="name" v-on:input="events.updateName">
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'form-example',
  setup (props) {
    const data = reactive({
      name: ''
    })

    const updateName = (event) => {
      var updatedName = event.target.value
      data.name = updatedName
      console.log('update name => ', data)
    }

    return {
      data,
      events: {
        updateName
      }
    }
  }

}
</script>

<style>

</style>
