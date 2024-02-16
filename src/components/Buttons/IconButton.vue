<template>
    <button 
    :class="computedClasses"
    @click="onClick"
    :disabled="disabled"
    >
    <i :class="icon"></i>
    </button>
</template>

<script>
export default {
    props: {
        variant: {
            type: String,
            default: "primary"
        },
        disabled: {
            type: Boolean,
            default: false
        },
        outline:{
            type:Boolean,
            default: false
        },
        icon:{
            type:String,
            default: ''
        }
    },
    computed: {
        computedClasses() {
            let baseClasses = "btn w-8";
            let variantClasses = "";
            
            switch (this.variant) {
                case "primary":
                    if (this.outline) {
                        variantClasses += "btn-primary-outline";
                    } else {
                        variantClasses += "btn-primary-fill";
                    }
                    break;
                case "neutral":
                    if (this.outline) {
                        variantClasses += "btn-neutral-outline";
                    } else {
                        variantClasses += "btn-neutral-fill";
                    }
                    break;
                case "link":
                    variantClasses = "btn-link";
                    break;
                    
                default:
                    variantClasses = "btn-neutral-fill";
            }
            
            let disabledClasses = this.disabled ? "btn-disabled" : "";
            return `${baseClasses} ${variantClasses} ${disabledClasses}`;
        }
    },
    methods:{
        onClick(){
            this.$emit("click");
        }
    }
};
</script>