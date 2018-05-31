<template>
    <div>
        <h1> v-if 예제입니다. </h1>
       

       <div class="example">
            <h1>조건부 디렉티브 예제입니다.</h1>
            <div class="example">

                <h3>v-if, v-else-if, v-else 예제입니다.</h3>
                
                <input type="radio" v-model="radioValue" value="0" name='exampleGroup'> 첫번째
                <input type="radio" v-model="radioValue" value="1" name='exampleGroup'> 두번째
                <input type="radio" v-model="radioValue" value="2" name='exampleGroup'> 세번째
                <p>
                    <!-- <h3>v-if, v-else-if, v-else 를 사용해서 조건에 따라 텍스트가 나오게 하세요.</h3> -->
                    <span>첫번째 라디오 버튼이 눌렸어요.</span>
                    <span>두번째 라디오 버튼이 눌렸어요.</span>
                    <span>세번째 라디오 버튼이 눌렸어요.</span>
                </p>
            </div>
            <div class="example">
                <h3>v-show 예제입니다.</h3>
               
                <input type="checkbox" v-model="isChecked" value="0" name='exampleGroup'> 체크박스
                 <!-- v-show 를 사용하세요. -->
                <p>
                    <span>체크 박스가 눌렸어요.</span>
                </p>
            </div>
        </div>
    
       
    </div>
</template>

<script>
    export default {
        data(){
            return {
                isChecked: false,
                radioValue: 0,
            }
        },
        methods: {
           
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