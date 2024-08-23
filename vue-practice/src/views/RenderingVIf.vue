<template>
    <div>
        <h1 v-if="type=='A'">A</h1>
        <h1 v-else-if="type=='B'">B</h1>
        <h1 v-else>C</h1>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            type: 'A'
        };
    }
}
</script>

<!--
    v-if와 v-show
    v-if : 조건을 만족하면 그 순간에 html 블록이 생성되고, 조건에 만족하지 않으면 html 블록이 삭제된다.
    v-show : 조건 여부에 상관없이 무조건 html 블록이 생성되며, 조건을 만족하면 css의 display를 이용해서 화면에 보이게 되고,
             조건을 만족하지 않으면 화면에서 숨기도록 처리가 된다. 즉, 조건의 만족 여부에 상관없이 무조건 랜더링 된다.
    
    tip) 해당 html 블록이 화면 내에서 자주 toggle이 일어나면 v-show을 사용하고,
    toggle이 일어나는 빈도가 작다면 v-if를 사용하는 것이 좋다. 
-->