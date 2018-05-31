<template>
    <div>
        <h1> v-on 예제입니다. </h1>
        <h1> v-on 를 이용해 아래의 프로그램을 완성하세요. </h1>
        <div class="example">
            <h3> 문제1 </h3>
            <input  v-model="inputValue">
            <p> {{ message }} </p>

        </div>    
        <div class="example">
            <h3> 문제2 </h3>
             <md-button class="md-icon-button md-accent md-raised"  >
                 <md-icon>thumb_up</md-icon>
             </md-button>
            <p>위 버튼을 클릭한 횟수는 {{ counter }} 번 입니다.</p>
        </div>
        <div class="example">
            <h3> 문제3 </h3>
            <md-button class="md-icon-button md-accent md-raised"  >
                 <md-icon>thumb_up</md-icon>
             </md-button>
        </div>
       
    </div>
</template>

<script>
    export default {
        data(){
            return {
                inputValue : '',
                message: '데이터를 입력하세요',   
                counter :0,
            }
        },
        methods: {
            addToCount:function(){
                // message 에 수정 메세지 입력
                
            },
            greet: function (event) {
                alert('Hello ' + this.name + '!')
                if (event) {
                    alert(event.target.tagName)
                }
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