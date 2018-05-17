<template>
    <p> {{ greeting }} World </p>
</template>

<script>
    module.export = {
        data : function() {
            return {
                greeting : 'Hello'
            }
        }
    }

</script>

<style>
p {
    font-size : 2em;
    text-align : center;
}

</style>