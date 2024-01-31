<template>
    <div :class="computedClasses">
        <i :class="iconClasses"></i>
        <slot></slot>
    </div>
</template>

<script>
export default{
    props: {
        state: {
            type: String,
            default: ""
        },
        error:{
            type: Boolean,
            default: false
        }
    },
    computed:{
        computedClasses(){
            let baseClasses = "field-message";

            let errorClasses = this.error ? "text-red-500" : "";

            return `${baseClasses} ${errorClasses}`;
        },
        iconClasses(){
            let baseClasses = "text-gray-700";

            let iconClasses = "ri-information-fill";

            switch (this.state){
                case "warning":
                    iconClasses = "ri-spam-2-fill";
                    baseClasses = "text-yellow-500";
                    break;
                case "success":
                    iconClasses = "ri-checkbox-circle-fill";
                    baseClasses = "text-green-500";
                    break;
                default:
                    break;
            }

            if (this.error){
                iconClasses = "ri-error-warning-fill";
                baseClasses = "text-red-500";
            }

            return `${baseClasses} ${iconClasses}`;
        }
    }
}
</script>