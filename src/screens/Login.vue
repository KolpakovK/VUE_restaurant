<template>
    <div class="p-8 grid gap-4 grid-cols-3">
        
        <div class=" fixed left-0 bottom-0 w-full h-screen bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat brightness-50 bg-bottom"></div>
        <ToastVue ref="toast"/>
        <PanelVue class="flex gap-16 flex-col z-[1]">
            
            <img :src="logo" alt="Logo" class=" w-32">
            
            <div class="flex gap-6 flex-col">
                <div class="flex gap-1 flex-col">
                    <p class="text-base italic text-gray-500">Welcome!</p>
                    <h2 class="text-6xl font-semibold text-gray-950">Create your own powerful point of sales <span class="text-primary-500">in minutes.</span> </h2>
                </div>
                <p class="text-base text-gray-500">Are you already our partner?
                    <span>
                        <ButtonVue variant="link">
                            <template #button-content>Sign in</template>
                        </ButtonVue>
                    </span>
                </p>
            </div>
            
            <form action="#" class="flex gap-8 flex-col">
                <div class=" flex gap-4 flex-col">
                    <FieldVue name="full-name-field" label-text="Full name"></FieldVue>
                    <FieldVue name="email-field" type="email" expression="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" error-message="Please, enter a valid e-mail" label-text="E-mail" required="true"></FieldVue>
                    <FieldVue name="password-field" type="password" expression="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" error-message="Minimum eight characters, at least one letter and one number" label-text="Password" required="true" default-message="Minimum eight characters, at least one letter and one number"></FieldVue>
                    <FieldVue name="repeat-password-field" type="password" expression="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" error-message="Minimum eight characters, at least one letter and one number" label-text="Repeat password" required="true"></FieldVue>
                </div>
                
                <ButtonVue @click="showToast">
                    <template #button-content>
                        Start the journey
                    </template>
                </ButtonVue>
            </form>
            
            <p class="text-base text-gray-500">By signing up, I agree to the
                <span>
                    <ButtonVue variant="link">
                        <template #button-content>Terms of Service</template>
                    </ButtonVue>
                </span>
                and 
                <span>
                    <ButtonVue variant="link">
                        <template #button-content>Privacy Policy</template>
                    </ButtonVue>
                </span>
            </p>
        </PanelVue>
    </div>
</template>

<script>
import PanelVue from '@/components/Panel.vue';
import IconButtonVue from '@/components/Buttons/IconButton.vue';
import ButtonVue from '@/components/Buttons/Button.vue';
import FieldVue from '@/components/Inputs/Field.vue';

import ToastVue from '@/components/Toast.vue';

import logo from "../assets/logo.svg"

export default{
    components:{
        PanelVue,
        ButtonVue,
        FieldVue,
        IconButtonVue,
        ToastVue
    },
    data: function () {
        return {
            logo: logo
        }
    },
    methods: {
        showToast() {
            this.$refs.toast.showToastMessage({
                message: "This is a test message",
                position: "RB",
                color: "yellow"
            });
        },
    },
}
</script>