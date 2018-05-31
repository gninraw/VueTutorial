<template>
    <div>
        <h1> v-model 예제입니다. </h1>
        <h1> v-model 를 이용해 아래의 프로그램을 완성하세요. </h1>
        <div class="example">
            <h3> 문제1 </h3>
            <input v-model="text">
            <p>
                <span>input : {{ text }} </span>
            </p>
        </div>    
        <div class="example">
            <h3> 문제2 </h3>
            <input type="checkbox" id="jack" value="Jack" >
            <label for="jack">Jack</label>
            <input type="checkbox" id="john" value="John" >
            <label for="john">John</label>
            <input type="checkbox" id="mike" value="Mike" >
            <label for="mike">Mike</label>
            <br>
            <span>체크한 이름: {{ checkedNames }}</span>
        </div>
        <div class="example">
            <h3> 문제3 </h3>
            <input type="radio" id="one" value="One" >
            <label for="one">One</label>
            <br>
            <input type="radio" id="two" value="Two" >
            <label for="two">Two</label>
            <br>
            <span>선택: {{ picked }}</span>
            <br>
        </div>
        <div class="example">
             <h3> 문제4 </h3>
            <select >
                <option disabled value="">Please select one</option>
                <option>사과</option>
                <option>배</option>
                <option>오렌지</option>
          </select>
          <br/>
          <span>선택함: {{ selected }}</span>
        </div>
        <div class="example">
             <h3> 문제4 </h3>
             <h1> v-model 과 v-for 를 이용해 아래의 프로그램을 완성하세요. </h1>
            <select >
            <option >
                {{ option.text }}
            </option>
            </select>
            <span>Selected: {{ selected2 }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                text: '',
                checkedNames : [],
                picked:'',
                selected:'',
                selected2:'',
                 options: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
                ]
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