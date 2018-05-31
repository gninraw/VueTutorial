<template>
    <div>
        <button @click="add"> {{ name }} : {{ count }} </button>
    </div>
</template>

<script>
    export default {
        props :[  ],
        data(){
            return {
                count : 0
            }
        }, 
        methods:{
            add:function(){
                // 카운트를 증가시키고, 이벤트를 보내세요.
            }
        }
    }
</script>

<style scoped>

</style>