<template>
    <InputVue
    :defaultValue="defaultValue"
    :expression="expression"
    :placeholder="placeholder"
    :disabled="disabled"
    :required="required"
    :name="name"
    :type="currentType"
    :id="name"
    >
        <!-- Content before -->
        <template #contentBefore>
            <slot name="contentBefore"></slot>
        </template>
        <template #contentAfter>
            <i :class="currentIcon" @click="togglePassword"></i>
        </template>
    </InputVue>
</template>

<script>
import { ref } from "vue";

import InputVue from './Input.vue';

export default {
    setup(){
        const currentType = ref(0);
        currentType.value = "password";
        
        const currentIcon = ref(1);
        currentIcon.value = "ri-eye-line";
        
        return{
            currentType,
            currentIcon
        }
    },
    components:{
        InputVue
    },
    data: function () {
        return {
            value: this.defaultValue,
        }
    },
    props: {
        defaultValue: {
            type: String,
            default: ""
        },
        placeholder:{
            type: String,
            default: "Placeholder"
        },
        disabled:{
            type: Boolean,
            default: false
        },
        required:{
            type: Boolean,
            default: false
        },
        name:{
            type: String,
            default: ""
        },
        expression:{
            type: String,
            default: ""
        }
    },
    methods: {
        onChange($event){
            this.$emit('onChange', this.value)
        },
        togglePassword(){
            if (this.currentType == "password"){
                this.currentType = "text";
                this.currentIcon = "ri-eye-off-line";
            }
            else{
                this.currentType = "password";
                this.currentIcon = "ri-eye-line";
            }   
        }
    },
    computed: {
        
    }
};
</script>