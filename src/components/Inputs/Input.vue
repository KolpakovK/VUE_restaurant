<template>
    <div class="field" :class="validationInput">
        
        <!-- Content before -->
        <span class="field-content-span">
            <slot name="contentBefore"></slot>
        </span>
        
        <!-- Input -->
        <input
        v-model="value"
        @input="onChange"
        class="grow focus:outline-none"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :name="name"
        :id="name"
        />
        
        <!-- Content after -->
        <span class="field-content-span">
            <slot name="contentAfter"></slot>
        </span>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            value: this.defaultValue,
            validationResult: true
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
            if (this.expression){
                let validation = new RegExp(this.expression).test(this.value);

                if (validation){
                    this.validationResult=true;
                }
                else{
                    this.validationResult=false;
                }
            }
            this.$emit('onChange', this.value)
        }
    },
    computed: {
        validationInput(){
            let baseStyle = "";

            if (this.expression!=""){
                if (!this.validationResult){
                    baseStyle = "field-error";
                }
                else{
                    baseStyle = "";
                }
            }

            return `${baseStyle}`;
        }
    }
};
</script>