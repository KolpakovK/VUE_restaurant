<template>
    <div class="flex flex-col">
        <LabelVue
        :target="name"
        :required="required"
        >{{ labelText }}</LabelVue>
        <InputVue v-if="type != 'password'"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :name="name"
        :expression="expression"
        @onChange="onChange"
        >
            <template #contentBefore><slot name="contentBefore"></slot></template>
            <template #contentAfter><slot name="contentAfter"></slot></template>
        </InputVue>
        <InputPasswordVue v-if="type == 'password'"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :name="name"
        :expression="expression"
        @onChange="onChange"
        >
            <template #contentBefore><slot name="contentBefore"></slot></template>
        </InputPasswordVue>
        <MessageVue :message="message" :error="!this.validationResult"></MessageVue>
    </div>
</template>

<script>
import InputVue from './Input.vue';
import InputPasswordVue from './InputPassword.vue';
import LabelVue from './Label.vue';
import MessageVue from './Message.vue';

export default {
    components:{
        InputVue,
        InputPasswordVue,
        LabelVue,
        MessageVue
    },
    data: function () {
        return {
            value: this.defaultValue,
            message: this.defaultMessage,
            validationResult: true,
        }
    },
    props: {
        defaultValue: {
            type: String,
            default: ""
        },
        type:{
            type: String,
            default: "text"
        },
        placeholder:{
            type: String,
            default: ""
        },
        disabled:{
            type: Boolean,
            default: false
        },
        name:{
            type: String,
            default: ""
        },
        defaultMessage:{
            type: String,
            default: ""
        },
        expression:{
            type: String,
            default: ""
        },
        required:{
            type: Boolean,
            default: false
        },
        errorMessage:{
            type: String,
            default: "Error"
        },
        labelText:{
            type: String,
            default: "Base label"
        }

    },
    methods: {
        onChange(value){
            if (this.expression){
                let validation = new RegExp(this.expression).test(value);

                if (validation){
                    this.validationResult=true;
                    this.message = this.defaultMessage;
                }
                else{
                    this.validationResult=false;
                    this.message = this.errorMessage;
                }
            }
            this.value = value;
        }
    },
};
</script>