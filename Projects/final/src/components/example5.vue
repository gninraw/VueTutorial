<template>
    <div>
        <h1> v-for 예제입니다. </h1>
        <div class="example">
            <h3> 문제1 </h3>
            <div class="example">
            <h1>v-for 예제입니다.</h1>
            <div class="example">
                <h3>데이터 리스트를 반복합니다.</h3>
                <ul>
                    <li >
                        {{ item.key }} - {{ item.value }}
                    </li>
                </ul>
            </div>
            <div class="example">
                <h3>데이터 리스트를 인덱스와 같이 반복합니다.</h3>
                <ul>
                    <li>
                        {{ index }} - {{ item.key }} - {{ item.value }}
                    </li>
                </ul>
            </div>
            <div class="example"> 
                <h3>데이터 하나의 값을 확인합니다.</h3>
                <ul>
                    <li >
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>

        </div>    
        <div class="example">
            <h3> 문제2 </h3>
             <div id="app">
                <ul>
                    <li>
                     {{car.name}}: {{car.brand}}
                    </li>
                </ul>
                <input type="text" v-model="car.name" placeholder="차 이름"/>
                <input type="text" v-model="car.brand" placeholder="차 브랜드"/>
                <button v-on:click="add">추가</button>
            </div>
        </div>
       
       
    </div>
</template>

<script>
    export default {
        data(){
            return {
                items: [
                    {
                        key: "아이템 1",
                        value: '첫번째 아이템'
                    },
                    {
                        key: "아이템 2",
                        value: '두번째 아이템'
                    },
                    {
                        key: "아이템 3",
                        value: '세번째 아이템'
                    },
                    {
                        key: "아이템 4",
                        value: '네번째 아이템'
                    }
                ],
                cars: [
                { name: '소나타', brand: '현대'},
                { name: 'K5', brand: '기아'}
                ],
                car: {
                name: '',
                brand: ''
                }
            }
        },
        methods: {
             add () {
                this.cars.push(this.car);
                this.car = {};
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