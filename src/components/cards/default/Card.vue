<template>
    <div class="card">
      <slot><p>카드입니다. 아무내용이 없으면 해당 내용이 출력 됩니다.</p></slot>
      <!--
        <slot name="card-header"></slot>
        <slot name="card-body"></slot>
        <slot name="card-footer"></slot>
      -->
    </div>
</template>

<script>
export default {
  name: 'card'
}
</script>

<style>
.card {
  display: inline-block;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.15);
  margin: 20px;
  position: relative;
  margin-bottom: 50px;
  transition: all .2s ease-in-out;
}
</style>
