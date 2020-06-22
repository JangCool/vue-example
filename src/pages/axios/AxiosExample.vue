<template>
  <div>
    <button @click='getSampleJson' >axios get방식 호출</button><br>
    <button @click='postSampleJson' >axios post방식 호출</button><br>
    <button @click='constructorSampleJson' >axios 생성자 호출</button><br>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'axios-example',
  setup (props) {
    const getSampleJson = () => {
      axios.get('/api/f1/2004/1/results.json')
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    const postSampleJson = () => {
      axios.get('/api/f1/2004/1/results.json')
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    const constructorSampleJson = () => {
      axios({
        method: 'post',
        url: '/user/12345',
        data: { firstName: 'Fred' }
      })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    return {
      getSampleJson,
      postSampleJson,
      constructorSampleJson
    }
  }
}
</script>

<style>

</style>
