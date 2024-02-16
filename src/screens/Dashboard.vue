<template>
    <div class="container mx-auto my-16">
        <div class="grid-cols-2 md:grid-cols-3">
            <p class="text-5xl font-bold text-gray-900">Dashboard</p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
            <ButtonVue block="true" icon="ri-cloud-fill" variant="neutral" outline="true">Text</ButtonVue>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">

            <FieldVue expression="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" errorMessage="Please, enter a valid email" labelText="Please enter your email" type="email"></FieldVue>

            <FieldVue required="true" labelText="Your name"></FieldVue>

            <FieldVue expression="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" type="password" defaultMessage="Password should contain a capital letter and numbers" labelText="Enter your password"></FieldVue>
            
        </div>
        
    </div>
</template>

<script>
import ButtonVue from '@/components/Buttons/Button.vue';
import FieldVue from '@/components/Inputs/Field.vue';

export default{
    components: {
        ButtonVue,
        FieldVue
    },
    data: function(){
        return {
            message: "",
        }
    }
}
</script>