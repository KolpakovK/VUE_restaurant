<template>
    <div class="relative">

        <!-- Left Icon -->
        <i v-if="leftIcon != ''" class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" :class="leftIcon"></i>
        
        <!-- Prefix -->
        <div v-if="prefix" :class="prefixClasses">
            {{ prefix }}
        </div>
        
        <!-- Input field -->
        <input
        :value="value"
        :type="type"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
        :class="computedClasses"
        />
        
        <!-- Right Icon with click action  -->
        <i v-if="rightIcon != ''" class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" :class="rightIcon" @click="handleRightIconClick"></i>
    </div>
</template>

<script>
export default {
    props: {
        value: String,
        type: {
            type: String,
            default: "text"
        },
        placeholder: String,
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
    },
    methods: {
        handleRightIconClick() {
            this.$emit('right-icon-click');
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

            return `${baseClasses} ${leftPadding} ${rightPadding}`;
        },
        prefixClasses() {
            let baseClasses = "text-base absolute inset-y-0 left-0 flex items-center pl-3 w-12";

            let leftPadding = this.leftIcon!='' ? "pl-8" : "pl-3";

            return `${baseClasses} ${leftPadding}`;
        }
    }
};
</script>