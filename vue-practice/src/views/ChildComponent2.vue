<template>
    <button type="button" @click="callFromParent">click</button>
</template>
<script>
export default {
    methods: {
        callFromParent() {
            console.log('부모 컴포넌트에서 직접 호출한 함수');
        }
    }
}
</script>