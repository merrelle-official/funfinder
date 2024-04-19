<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps(['url', 'content'])
</script>

<template>

        <div class="slide__container" :style="{ backgroundImage: 'url(' + props.url + ')' }">
        <h1 v-html="props.content.text" class="slide__title"></h1>
        <RouterLink to="/asdas" class="button slider__button">{{ props.content.buttonText }}</RouterLink>
    </div>

    
</template>

<style scoped>
.slide__container{
    height: 35rem;
    border-radius: 30px;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 0;
    width: 100%;
    flex-shrink: 0;
}

.slide__title{
    font-weight: normal;
    font-size: 36px;
    width: 80%;
}

.slider__button{
    font-size: 36px;
    padding: 1rem 3rem 1.4rem 3rem;
    text-align: center;
}


</style>
