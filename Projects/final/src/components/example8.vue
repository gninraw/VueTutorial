<template>
    <div>
        <h1> lifecycle </h1>
        
        <div class="example">
            {{text}}
            <br/>
            <button @click="changeText">변경!!</button>
            <br/>
            <button @click="destroyApp">파괴!?</button>
        </div>
 
    </div>
</template>

<script>
    export default {
        data(){
            return {
                text: '안녕하세요~'     
            }
        },
        methods: {
                changeText: function() {
                    this.text = '반갑습니다!'
                },
                destroyApp: function() {
                    console.group('--- destroyApp method ---');
                    console.log(this.$destroy());
                    console.groupEnd();
                }
        },
        beforeCreate: function() {
            // 아직 데이터 및 이벤트 정의 안됨
            console.group('--- beforeCreate ---');
            console.log('text : ', this.text); // undefined
            console.groupEnd();
        },
        created: function() {
            // 데이터와 이벤트는 접근 가능하지만, 아직 마운트가 안되서 $el 접근 불가
            console.group('--- created ---');
            console.log('text : ', this.text); // 안녕하세요~
            console.log('element :', this.$el); // undefined
            console.groupEnd();
        },
        mounted: function() {
            // el에 접근이 가능합니다. 보통 여기서 초기 데이터를 불러오곤 합니다.
            // beforeMount 에서는 el 접근 불가합니다.
            console.group('--- mounted ---');
            console.log('element : ↓');
            console.log(this.$el); // object HTMLDivElement
            console.groupEnd();
        },
        beforeUpdate: function() {
            // data가 변경된 후 DOM 랜더링 직전에 실행 됩니다. 그로 인해 변경될 text data를 가지고 있는 것 입니다.
            console.group('--- beforeUpdate ---');
            console.log('before update : ', this.text); // 반갑습니다!
            console.groupEnd();
        },
        updated: function() {
            // DOM 랜더링이 끝난 후 실행됩니다. DOM 변경이 완료 된 후 특정 작업을 실행해야할 경우 이곳에..
            console.group('--- updated ---');
            console.log('updated : ', this.text); // 반갑습니다!
            console.groupEnd()
        },
        destroyed: function() {
            console.group('--- destroyed ---');
            console.log('watcher : ', this._watcher.active);
            this.text = '변해라 ㅠ 안변한다 ㅠ';
            console.groupEnd();
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