<template>
    <div class="card-header">
      <p>{{title}}, {{isButton}}</p>
    </div>
</template>

<script>
export default {
  name: 'card-header',
  props: {
    title: String,
    isButton: Boolean
  }
}
</script>

<style>
.card-header {
  color: #fff!important;
  background-color: #2196F3!important;
  padding: 0.01em 16px;
  box-sizing: inherit;
  content: "";
  display: table;
  clear: both;
}
</style>
