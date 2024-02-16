<template>
    <div class="p-8 grid gap-4 grid-cols-3">
        
        <div class=" fixed left-0 bottom-0 w-full h-screen bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat brightness-50 bg-bottom"></div>
        <ToastVue ref="toast"/>
        <PanelVue class="flex gap-16 flex-col z-[1]">
            
            <img :src="logo" alt="Logo" class=" w-32">
            
            <div class="flex gap-6 flex-col">
                <div class="flex gap-1 flex-col">
                    <p class="text-base italic text-gray-500">Welcome!</p>
                    <h2 class="text-6xl font-semibold text-gray-950">We are glad to see you here! Let's make <span class="text-primary-500">your business grow.</span> </h2>
                </div>
                <p class="text-base text-gray-500">Don`t have an account?
                    <span>
                        <ButtonVue variant="link">
                            <template #button-content>Sign up</template>
                        </ButtonVue>
                    </span>
                </p>
            </div>
            
            <form action="#" class="flex gap-8 flex-col">
                <div class=" flex gap-4 flex-col items-end">
                    <FieldVue class="w-full" name="email-field" type="email" expression="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" error-message="Please, enter a valid e-mail" label-text="E-mail" required="true"></FieldVue>
                    <FieldVue class="w-full" name="password-field" type="password" label-text="Password" required="true"></FieldVue>
                    <ButtonVue variant="link"><template #button-content>Forgot password?</template></ButtonVue>
                </div>
                
                <ButtonVue @click="showToast">
                    <template #button-content>
                        Login
                    </template>
                </ButtonVue>
            </form>
            
            <p class="text-base text-gray-500">
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
        ToastVue,
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