<template>
    <div>
        <h1> watch/compute </h1>
        
        <div class="example">
            <h3> Watch </h3>
            <!-- 수치가 모두 연동되도록 watch 를 사용하세요. -->
            <label>km: <input type="text" v-model="km2"></label><br/>
            <label>cm: <input type="text" v-model="cm"></label><br/>
            <label>mm: <input type="text" v-model="mm"></label><br/>
        </div>

        <div class="example">
            <h3> Compute </h3>
            <!-- 뒤집힌 메세지가 나오도록 computed 를 작성하세요  -->
            <p>원본 메시지: "{{ message }}"</p>
            <p>뒤집히도록 계산된 메시지: "{{ reversedMessage }}"</p>
        </div>
 
    </div>
</template>

<script>
    export default {
        data(){
            return {
                km2: 0,
                cm: 0,
                mm: 0,

                message : '안녕하세요',

            }
        },
        methods: {
           
        },
        watch: {
           
        },
        computed:{
            
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