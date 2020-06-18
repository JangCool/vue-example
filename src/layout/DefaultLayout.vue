<template>
    <div class="container">
        <default-header />
        <default-sidebar />
        <defalut-content>
          <!--
            이벤트 버블링 :
              - 안쪽 영역에서 이벤트가 발생 하면 부모 엘리먼트의 이벤트까지 전파 된다.
          -->
          <!--
            <div class="wrap" @click="clickWrap">
              <span>바깥쪽 영역</span>
              <div class="middle-wrap" @click="clickMiddleWrap">
                <span>중간 영역</span>
                <div class="last-wrap" @click="clickLastWrap">
                  <span>안쪽 영역</span>
                </div>
              </div>
            </div>
          -->
          <!--
            이벤트 capture :
              - 이벤트 버블링으로 인해 안쪽영역에서 발생한 이벤트가 안쪽에서 -> 바깥쪽 으로 이벤트가 발생한다.
              - 하지만 안쪽에서 이벤트가 발생하였을 때 바깥쪽에서 먼저 호출 된 뒤 마지막으로 실행되어야 할 경우가 있다.
              - 이때 capture 이벤트 수식어를 사용한다.

          -->
          <!--
            <div class="wrap" @click="clickWrap">
              <span>바깥쪽 영역</span>
              <div class="middle-wrap" @click.capture="clickMiddleWrap">
                <span>중간 영역</span>
                <div class="last-wrap" @click="clickLastWrap">
                  <span>안쪽 영역</span>
                </div>
              </div>
            </div>
          -->
          <!--
            이벤트 prevent :
              - last-wrap에서 contextmenu 기본 이벤트를 동작하지 않도록 한다.
          -->
          <!--
            <div class="wrap" @click="clickWrap">
              <span>바깥쪽 영역</span>
              <div class="middle-wrap" @click.capture="clickMiddleWrap">
                <span>중간 영역</span>
                <div class="last-wrap" @contextmenu.prevent="clickLastWrap">
                  <span>안쪽 영역</span>
                  <button @click.once="clickOnce">.once확인</button>
                </div>
              </div>
            </div>
          -->
          <!--
            이벤트 key :
              - 키이벤트 수식어로 enter, ctrl 버튼 클릭시 실행 한다.
              - .exact 수식어로 정확하게 이벤트 발생상황을 명시해준다.
                       .exact 수식어는 다른 시스템 수식어와 조합해 그 핸들러가 실행되기 위해 정확한 조합이 눌러야하는 것을 보여준다.
          -->

            <div class="wrap" @click="clickWrap">
              <span>바깥쪽 영역</span>
              <div class="middle-wrap" @click="clickMiddleWrap">
                <span>중간 영역</span>
                <div class="last-wrap" @click="clickLastWrap">
                  <span style="border 1px red" @mousedown.right.prevent="mouserRight">안쪽 영역 이곳을 마우스로 클릭 하세요!!</span>
                  <input type="text" @keydown.enter.exact="keyEnter"  @keydown.ctrl="keyCtrl" />.enter
                </div>
              </div>
            </div>
          <slot></slot>
        </defalut-content>
        <default-footer />
    </div>
</template>

<script>

import DefaultHeader from '@/layout/default/DefaultHeader.vue'
import DefaultSideBar from '@/layout/default/DefaultSideBar.vue'
import DefaultContent from '@/layout/default/DefaultContent.vue'
import DefaultFooter from '@/layout/default/DefaultFooter.vue'

export default {
  name: 'default-layout',
  components: {
    'default-header': DefaultHeader,
    'default-sidebar': DefaultSideBar,
    'defalut-content': DefaultContent,
    'default-footer': DefaultFooter
  },
  setup (props) {
    const clickWrap = () => {
      console.log('clickWrap')
    }
    const clickMiddleWrap = () => {
      console.log('clickMiddleWrap ==> Middle')
    }
    const clickLastWrap = () => {
      console.log('clickLastWrap ==> Last')
    }
    const clickOnce = () => {
      console.log('clickOnce ==> once')
    }
    const keyEnter = () => {
      console.log('keyEnter ==> Enter')
    }
    const keyCtrl = () => {
      console.log('keyCtrl ==> Ctrl')
    }
    const mouserRight = () => {
      alert('마우스 오른쪽 버튼 클릭 이벤트 발생!!')
    }
    return {
      clickWrap,
      clickMiddleWrap,
      clickLastWrap,
      clickOnce,
      keyEnter,
      keyCtrl,
      mouserRight
    }
  }
}
</script>

<style>
.wrap{
  width: 250px;
  height: 250px;
  background-color: chocolate;
  border: 1px solid #6d6d6d;
}

.middle-wrap {
  width: 180px;
  height: 180px;
  background-color: aquamarine;
  border: 1px solid #6d6d6d;
}

.last-wrap{
  width: 100px;
  height: 100px;
  background-color: brown;
  border: 1px solid #6d6d6d;
}
</style>
