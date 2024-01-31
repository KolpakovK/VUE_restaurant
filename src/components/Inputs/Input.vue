<template>
    <div class="relative">
        
        <!-- Left Icon -->
        <i v-if="leftIcon != ''" class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-900" :class="leftIcon"></i>
        
        <!-- Prefix -->
        <div v-if="prefix" :class="prefixClasses">
            {{ prefix }}
        </div>
        
        <!-- Input field -->
        <input
        :id="id"
        v-model="value"
        :name="id"
        :type="type"
        :placeholder="placeholder"
        @input="fieldInput"
        :class="computedClasses"
        :required="required"
        />
        
        <!-- Right Icon with click action  -->
        <i v-if="rightIcon != ''" class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-900" :class="rightIcon" @click="handleRightIconClick"></i>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            value: this.propValue,
        }
    },
    props: {
        propValue: {
            type: String,
            default: ""
        },
        id:{
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: "text"
        },
        error:{
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: "text"
        },
        prefix: {
            type: String,
            default: ''
        },
        leftIcon: {
            type: String,
            default: ''
        },
        rightIcon: {
            type: String,
            default: ''
        },
        required: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleRightIconClick() {
            this.$emit('right-icon-click');
        },
        fieldInput($event){
            this.$emit('update', this.value)
        }
    },
    computed: {
        computedClasses() {
            let baseClasses = "w-full field";
            
            let leftPadding = "pl-3.5";
            if (this.leftIcon!='' && this.prefix!=''){
                leftPadding = "pl-20";
            }
            else if (this.leftIcon!=''){
                leftPadding = "pl-8";
            }
            else if (this.prefix!=''){
                leftPadding = "pl-16";
            }
            
            let rightPadding = this.rightIcon!='' ? "pr-8" : "pr-3.5";
            
            let errorClasses = this.error ? 'field-error' : '';

            return `${baseClasses} ${leftPadding} ${rightPadding} ${errorClasses}`;
        },
        prefixClasses() {
            let baseClasses = "text-base absolute inset-y-0 left-0 flex items-center pl-3 w-12 text-gray-900";
            
            let leftPadding = this.leftIcon!='' ? "pl-8" : "pl-3";
            
            return `${baseClasses} ${leftPadding}`;
        }
    }
};
</script>