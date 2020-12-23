<template>
    <div v-bind:todo="NumberColors" style="color: blue;"></div>
</template>
<script>
    export default {
        props: {
            todo: {
                type: Object,
                required: true
            }
        }
    }
</script>