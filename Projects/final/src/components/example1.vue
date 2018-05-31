<template>
    <div>
        <div class="example">
            <h1>텍스트 보간법 예제입니다.</h1>
            <div class="example">
                <h3>기본 데이터는 다음과 같습니다.</h3>
                <div>
                    <span> message : {{ message }}</span>
                    <br/>
                    <span v-once> message-once : {{ message }}</span>
                    
                </div>

                <button @click="clicked"> 메세지변경 </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
              return {
                
              }
            },
        methods: {
            clicked: function () {
                
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