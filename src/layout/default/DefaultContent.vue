<template>
    <div class="content border">
        <slot>
            <p>
                컨텐츠 입니다.
            </p>
        </slot>
    </div>
</template>

<script>
export default {
  name: 'default-content'
}
</script>

<style>
.border {
    border: 1px solid #000;
}
</style>
