/* eslint-disable no-undef */
<template>
    <div class="container">

        <default-header />
        <default-sidebar />
        <defalut-content>
          <transition name="slide-fade">
            <router-view name="body"></router-view>
          </transition>
          <br><br>
          --- 기본 라우터뷰 출력 ---
          <router-view></router-view>
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

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
