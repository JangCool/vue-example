<template>
    <div class="container">
        <default-header />
        <default-sidebar />
        <defalut-content>
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
  }
}
</script>

<style>

</style>
