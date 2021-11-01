<template>
    <div>
        <slot name="default" :title="title">
            {{title}}
        </slot>
        <slot name="foot" :title="title">
            ===={{title}}====
        </slot>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title:"Hello World"
        }
    },
}
</script>