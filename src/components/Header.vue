<script setup>
import { useAuth } from '@/stores/stores';
import { RouterLink } from 'vue-router';

const authStore = useAuth();

function login() {
    authStore.isAuth = !authStore.isAuth
}
</script>

<template>
    <div class="main__header">
        <nav class="header__container">
            <RouterLink to="/" class="header__logo"><img src="/img/header_logo.svg" alt=""></RouterLink>
            <div class="list">
                <RouterLink to="/" class="list__item">Главная</RouterLink>
                <RouterLink to="/" class="list__item">Маршруты</RouterLink>
                <RouterLink @click="login" v-if="authStore.isAuth" to="/" class="list__item">Профиль</RouterLink>
                <RouterLink @click="login" v-else to="/" class="list__item">Войти</RouterLink>
            </div>
        </nav>
    </div>
</template>

<style scoped>
.main__header{
    width: 100%;
    background-color: #B4D7D9;
    padding: 9px 0;
}

.header__container{
    min-height: 79px;
    margin: 0 auto;
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 19%;
}

.list{
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 10%;
}

.list__item{
    font-size: 22px;
    font-weight: bold;
}

</style>