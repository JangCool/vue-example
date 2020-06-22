<template>
    <div class="button-group">
        <button v-on:click="updateTitle('값1')">Emit 전달</button>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'button-group',
  setup (props, { emit }) {
    const updateTitle = (value1) => {
      console.log('click updateTitle...')
      console.log('event => ', event)
      console.log('value1 => ', value1)

      //   emit('update-parent')
      emit('update-parent', { message: '데이터를 전송 합니다' })
    }

    const callParentFunction = () => {
      alert('부모 컴포넌트에서 자식 컴포넌트 함수를 호출 했습니다.')
    }

    return {
      updateTitle: updateTitle,
      callParentFunction
    }
  }

})
</script>

<style>
.button-group{
    float: right;
}
</style>
