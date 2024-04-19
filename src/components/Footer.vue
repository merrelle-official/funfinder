<script setup>

</script>

<template>
    <div class="main__footer">
        <div class="footer__container">
            <nav class="footer__menu">
                <div class="footer__logo">
                    <img src="/img/footer_logo.svg" alt="" class="footer__img">
                    <p class="footer__img-desc">Открывай места -<br>узнавай себя.</p>
                </div>

                <ul class="footer__list">
                    <li class="footer__list-item"><RouterLink class="footer__list-link" to="/">Главная</RouterLink></li>
                    <li class="footer__list-item"><RouterLink class="footer__list-link" to="/">Маршруты</RouterLink></li>
                    <li class="footer__list-item"><RouterLink class="footer__list-link" to="/">Политика конфиденциальности</RouterLink></li>
                </ul>
            </nav>
            <p class="footer__made-by">Все права защищены</p>
        </div>
    </div>
</template>

<style scoped>
.main__footer{
    width: 100%;
    background-color: #B4D7D9;
    padding: 2% 0 1% 0;
}

.footer__container{
    width: 60%;
    margin: 0 auto;
}

.footer__menu{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer__logo{
    font-weight: bold;
    font-size: 18px;
    display: flex;
    flex-direction: column;
}

.footer__img-desc{
    display: inline-block;
    margin: 4% auto;
}

.footer__list-item{
    font-size: 18px;
    font-weight: bold;
}

.footer__list-item:not(:last-child){
    margin-bottom: 2%;
}

.footer__made-by{
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    margin-top: 26px;
}

</style>