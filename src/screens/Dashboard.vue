<template>
    <div class="container mx-auto my-16">
        <div class="columns-4">
            <p class="text-5xl font-bold text-gray-900">Dashboard</p>
        </div>
        
        <div class="grid grid-cols-6 gap-4">
            <ButtonVue block="true" icon="ri-cloud-fill" variant="neutral" outline="true">Text</ButtonVue>
        </div>
        
        <div class="grid grid-cols-3 gap-4 pt-4">
            <InputVue
            type="text"
            rightIcon="ri-cloud-fill"
            prefix="https://"
            placeholder="Enter text"
            />
        </div>
    </div>
</template>

<script>
import ButtonVue from '@/components/Button.vue';
import InputVue from '@/components/Inputs/Input.vue';

export default{
    components: {
        ButtonVue,
        InputVue
    }
}
</script>