<script setup>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import { RouterView } from "vue-router";

</script>

<template>
    <main class="main">
        <Header></Header>
        <div class="content__container">
            <RouterView/>
        </div>
    </main>
    <Footer></Footer>
</template>

<style scoped>
.main{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    width: 100%;
}

.content__container{
    flex: 1;
    width: 75%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}
</style>
