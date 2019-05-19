<template>
    <h2 class="title">{{greeting}}</h2>
</template>
<script>
    export default {
        data() {
            return {
                greeting: ''
            }
        },
        created() {
            fetch('/hello')
                
                .then(res => {
                    return res.json()
                })
                .then(json => {
                    this.greeting = json.texty
                })
        }
    }
</script>
<style scoped>
    .title {
        color: green;
    }
</style>