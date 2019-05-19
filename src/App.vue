<template>
    <h2 class="title">hello, VUE!!!!</h2>
</template>
<script>
    export default {
        created() {
            alert('created hook')
        }
    }
</script>
<style>
    .title {
        color: green;
    }
</style>