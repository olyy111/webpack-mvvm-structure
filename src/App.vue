<template>
    <div>
        <h2 class="title">
            {{greeting}}
            <h3 class="subtitle">这是副标题</h3>
        </h2>
        <p class="content">这是一条新闻, 前天北京下了冰雹</p>
        <img src="./landscape.jpg" alt="">
    </div>
</template>
<script>
    export default {
        data() {
            return {
                greeting: '',
                title: ''
            }
        },
        created() {
            // console.log('sourcemap')
            Promise.resolve('foo').then(val => alert(val))
            const foo = (a, b) => a + b
            // fetch('/hello')
                
            //     .then(res => {
            //         return res.json()
            //     })
            //     .then(json => {
            //         this.greeting = json.text
            //     })
        },
        methods: {
            sum(a, b) {
                console.log(a + b)
                return a + b
            }
        }
    }
</script>
<style scoped lang="scss">
    .title {
        color: green;
        .subtitle {
            color: pink;
        }
    }
</style>