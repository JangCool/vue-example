<template>
    <div class="sidebar border">
        <p>사이드바 입니다.</p><br>
        <router-link to="/">Home</router-link><br>
        <router-link to="/user">User</router-link><br>
        <router-link to="/user/jangcool">User/jangcool</router-link><br>
        <router-link to="/user/betterfly01">User/betterfly01</router-link><br>
        <router-link to="/user/betterfly01/posts">User/betterfly01/posts</router-link><br>
        <router-link to="/chart-card">Chart Card</router-link><br>
        <router-link to="/example/form">Form Example</router-link><br>
        <router-link to="/example/directive">Directive Example</router-link><br>
        <router-link to="/example/lifecycle">LifeCycle Example</router-link><br>
        <router-link to="/example/event">Event Example</router-link><br>
        <router-link to="/example/axios">Axios Example</router-link><br>
        <router-link to="/example/vuex">Vuex Example</router-link><br>

    </div>
</template>

<script>
export default {
  name: 'default-sidebar'
}
</script>

<style>
.border {
    border: 1px solid #000;
}
</style>
