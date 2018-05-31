<template>
    <div>
        <div class="example">
            <h3> 콤포넌트 예제입니다. </h3>
            <p> 총 합계 : {{ total }}</p>
            <!-- 아래와 같은 형태로 사용가능하도록 컴포넌트를 개발하고, 이벤트를 받아 총계가 집계되도록 개발하세요. -->
            <comp-button name="사과"  @increment="add" >  </comp-button>
            <comp-button name="배" @increment="add" >    </comp-button>
            <comp-button name="오렌지" @increment="add" >    </comp-button>
        </div>
        
    </div>
</template>

<script>
    import CompButton from '@/components/button'
    export default {
        data(){
            return {
                total :0
            }
        },
        methods:{
            add:function(){
                
            }
        },
        components: { CompButton }
    }
</script>

<style scoped>

</style>