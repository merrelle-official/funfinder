<script setup>
import SliderCard from '@/components/SliderCard.vue';
import { ref } from 'vue';
const isAnimating = ref(false); // Флаг для отслеживания состояния анимации

const sliderObj = [
    {
        text: `<strong>FunFinder</strong> поможет найти новый интересные места, основываясь на ваших интересах!</h1>`,
        buttonText: `К маршрутам`,
        buttonToUrl: `/routes`
    },
    {
        text: `<strong>Сохраняйте</strong> любимые маршруты, <strong>создавайте</strong> новые места, а также <strong>редактируйте</strong> коллекции в своём профиле!`,
        buttonText: `В профиль`,
        buttonToUrl: `/profile`
    },
    {
        text: `Приложение разработанно студентом <strong>МГППУ</strong> в рамках выпускной квалификационной работы`,
        buttonText: `К диплому`,
        buttonToUrl: `/routes`
    }
]

const currentSlideIndex = ref(0);

const prevSlide = () => {
    if (!isAnimating.value && currentSlideIndex.value > 0) {
        isAnimating.value = true; // Устанавливаем флаг анимации в true
        currentSlideIndex.value--;
        setTimeout(() => {
            isAnimating.value = false; // По завершению анимации устанавливаем флаг в false
        }, 1000); // Установите таймер на основе времени анимации
    }
};

const nextSlide = () => {
    if (!isAnimating.value && currentSlideIndex.value < sliderObj.length - 1) {
        isAnimating.value = true;
        currentSlideIndex.value++;
        setTimeout(() => {
            isAnimating.value = false;
        }, 1000);
    }
};

</script>

<template>
    <div class="main__slider">
        <button @click="prevSlide" class="prev__slide btn"><img src="/img/main_p/arrow.svg" alt="Стрелочка"></button>
        <div class="container__slider">
            <div class="slider__inner" :style="{ transform: `translateX(-${currentSlideIndex * 105}%)` }">
                <SliderCard v-for="(slide, index) in sliderObj" :key="index" :url="`/img/main_p/slider_imges/home_p${index}.png`" :content="slide"></SliderCard>
                <!-- <SliderCard :url="`/img/main_p/slider_imges/home_p1.png`" :content="sliderObj[0]"></SliderCard>
                <SliderCard :url="`/img/main_p/slider_imges/home_p1.png`" :content="sliderObj[1]"></SliderCard>
                <SliderCard :url="`/img/main_p/slider_imges/home_p1.png`" :content="sliderObj[2]"></SliderCard> -->
            </div>
        </div>
        <button @click="nextSlide" class="next__slide btn"><img src="/img/main_p/arrow.svg" alt="Стрелочка"></button>
    </div>
</template>

<style scoped>
.main__slider{
    display: flex;
    width: 100%;
    gap: 5%;
}

.container__slider{
    width: 80%;
    overflow: hidden;
}

.slider__inner{
    display: flex;
    gap: 5%;
    transition: all 1s ease-in;
    
}

.btn>img{
    cursor: pointer;
}

.next__slide{
    transform: rotate(180deg);
}

.prev__slide:disabled>img{
    cursor: default;
    opacity: 0.5;
}
</style>