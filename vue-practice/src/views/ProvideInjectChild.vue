<template>
    <h1></h1>
</template>
<script>
export default {
    inject: ['itemLength'],
    mounted() {
        console.log(this.itemLength);
    }
}
</script>