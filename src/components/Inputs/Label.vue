<template>
    <div class="label">
        <label :for="target">
            <slot></slot>
        </label>
        <p v-if="required" class="text-red-500 font-bold">
            *
        </p>
    </div>
</template>

<script>
export default{
    props: {
        target: {
            type: String,
            default: ""
        },
        required:{
            type: Boolean,
            default: false
        }
    }
}
</script>