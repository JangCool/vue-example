<template>
    <div>
        <input v-bind:value="name" v-on:input="events.updateName">
        <br><br>

        <input type="checkbox" id="checkbox" v-model="data.checked">
        <label for="checkbox">{{ data.checked }}</label>
        <br><br>

        <input type="checkbox" id="jack" value="Jack" v-model="data.checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="data.checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="data.checkedNames">
        <label for="mike">Mike</label>
        <br><br>

        <span>체크한 이름: {{ data.checkedNames }}</span><br>

        <input type="radio" id="one" value="One" v-model="data.picked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two" v-model="data.picked">
        <label for="two">Two</label>
        <br>
        <span>선택: {{ data.picked }}</span>
        <br><br>

        <select v-model="data.selected">
        <option disabled value="">Please select one</option>
        <option value="avalue">A</option>
        <option>B</option>
        <option>C</option>
        </select>
        <span>선택함: {{data.selected }}</span>
        <br><br>

        <select v-model="data.selected">
            <option v-for="option in data.options" v-bind:key="option.value">
                {{ option.text }}
            </option>
        </select>
        <span>Selected: {{ selected }}</span>

    </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'form-example',
  setup (props) {
    const data = reactive({
      name: '',
      checked: false,
      checkedNames: [],
      picked: '',
      selected: '',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
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
