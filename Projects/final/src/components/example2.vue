<template>
    <div class="example">
        <h1>v-bind 예제입니다.</h1>
        <h1>v-bind 를 이용해 아래의 프로그램을 완성하세요. </h1>
        <div class="example">

            <h3> v-bind:title로 바인딩 해봅니다. </h3>
            <div>
                <!-- v-bind -->
                <span >마우스를 올리면 message 값을 볼수 있어요.</span>
            </div>
        </div>


        <div class="example">
            <h3>:title로 바인딩 해봅니다.</h3>
            <div>
                <!-- v-bind 방법 2. -->
                <span >마우스를 올리면 message 값을 볼수 있어요.</span>
            </div>
        </div>
    </div>       
</template>

<script>
    export default {
        data(){
            return {
                message: 'Vue.js는 쉽고 재미있어요'
            }
        }
    }
</script>

<style scoped>
    .example {
        border: 1px blue solid;
        margin: 5px;
        padding: 10px;
    }
</style>