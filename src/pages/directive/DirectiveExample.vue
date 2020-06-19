<template>
   <div>
    <!-- "v-text와 v-html <i>차이점</i>을 알아봅시다." 문자열이 그대로 출력 -->
    <div v-text="data.rawHtml" />sdffds
    <!-- <h2> 태그가 적용된 결과가 출력 -->
    <div v-html="data.rawHtml" />sdfsdf

    <br><br>

    ---------------------------------- v-once ----------------------------------
    <br>
    <!-- 단일 엘리먼트 -->
    <span v-once>This will never change: {{data.msg}}</span>
    <!-- 자식 엘리먼트를 포함하는 엘리먼트 -->
    <div>
        <h1>comment</h1>
        <p>{{data.msg}}</p>
    </div>
    <button @click='events.clickVonce' >v-once테스트</button>
    <!-- v-for 디렉티브 -->
    <!-- <ul v-once> -->
    <ul v-once>
        <li v-for="(row, index) in data.list" :key="row.id" v-once>{{ index }} {{ row.name }}</li>
    </ul>

    <br><br>

    ---------------------------------- v-bind ----------------------------------
    <br>

    <!-- 속성을 바인딩 합니다. -->
    <div v-bind:id="data.bind.idValue">v-bind 지정 연습</div>
    <!-- 속성의 Key값을 바인딩 합니다 -->
    <button v-bind:[data.bind.key]="btnId">버튼</button>

    <!-- 약어 (v-bind를 콜론(:)으로 줄여씀)-->
    <div :id="data.bind.idValue">v-bind 지정 연습</div>
    <button :[data.bind.key]="btnId">버튼</button>

    <br><br>

    ---------------------------------- v-show ----------------------------------
    <br>
    <input type="text" v-model="data.msg" placeholder="텍스트를 입력하세요">
    <!-- msg의 문자열 길이가 1 이상인 경우에만 보이게 됩니다. -->
    <h3 v-show="data.msg.trim().length > 0">텍스트를 입력했습니다.</h3>
    <h1 v-show="data.show.isShow">버튼눌러서 v-show 확인</h1>
    <button @click='events.clickToggle'>v-show 확인</button>

    <br><br>

    -------------------------- v-if, v-else-if, v-else -------------------------
    <br>

    <div v-if="data.condition.type === 'A'">
    A
    </div>
    <div v-else-if="data.condition.type === 'B'">
    B
    </div>
    <div v-else-if="data.condition.type === 'C'">
    C
    </div>
    <div v-else>
    Not A/B/C
    </div>

  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'directive-example',
  setup (props) {
    const data = reactive({
      rawHtml: '<h2>v-text와 v-html <i>차이점</i>을 알아봅시다.</h2>',
      msg: '처음에 그려질때 화면 보여짐.',
      list: [
        { id: '10001', name: '장진철' },
        { id: '20001', name: '홍길동' },
        { id: '30001', name: '슈퍼맨' }
      ],
      bind: {
        idValue: 'test-id',
        key: 'id',
        btnId: 'btn1'
      },
      show: {
        isShow: false
      },
      condition: {
        type: 'B'
      }
    })

    const clickVonce = () => {
      changeVonce()
    }
    const clickToggle = () => {
      if (data.show.isShow) {
        data.show.isShow = false
      } else {
        data.show.isShow = true
      }
    }

    const changeVonce = () => {
      if (data.msg === '처음에 그려질때 화면 보여짐.') {
        data.msg = '두 번째 이후에도 실행되어 바뀜.'
      } else {
        data.msg = '데이터가 계속 바뀌는걸 확인 할 수 있다.' + (Math.random() * 1000)
      }
    }

    return {
      data,
      events: {
        clickVonce,
        clickToggle
      },
      methods: {
        changeVonce
      }
    }
  }
}
</script>

<style>

</style>
