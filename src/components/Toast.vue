<template>
    <div v-if="showToast" class="toast" :class="positionClasses">
        <div class="absolute left-0 top-0 h-full w-2 bg-green-500" :class="sideClasses"></div>
        <i :class="iconClasses"></i>
        <div class="flex flex-col gap-0">
            <span class=" font-semibold text-gray-950">{{ title }}</span>
            <span class=" text-gray-700">{{ message }}</span>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    setup(){
        const currentColor = new ref(0);
        currentColor.value = "green-500"

        const currentIcon = new ref(1);
        currentIcon.value = "ri-checkbox-circle-fill"

        const currentPosition = new ref(2);
        currentPosition.value = "RB"

        return{
            currentColor,
            currentIcon,
            currentPosition
        }
    },
    data() {
        return {
            showToast: false,
            message: '',
            title: '',
        };
    },
    methods: {
        showToastMessage(data) {
            this.message = data.message ? data.message : "";
            this.title = data.title ? data.title : "";
            let color = data.color ? data.color : "green";

            this.currentPosition = data.position ? data.position : "RB";
            this.showToast = true;

            switch (color){
                case "green":
                    this.currentColor = "green";
                    this.currentIcon = "ri-checkbox-circle-fill";
                    break;
                case "red":
                    this.currentColor = "red";
                    this.currentIcon = "ri-alert-fill";
                    break;
                case "yellow":
                    this.currentColor = "yellow";
                    this.currentIcon = "ri-spam-2-fill";
                    break;
                default:
                    this.currentColor = "green";
                    this.currentIcon = "ri-checkbox-circle-fill";
                    break;
            }
            
            // Hide the toast after a certain duration (e.g., 3 seconds)
            setTimeout(() => {
                this.hideToast();
            }, 10000);
        },
        hideToast() {
            this.showToast = false;
            this.message = '';
            this.title = '';
        },
    },
    computed:{
        iconClasses(){
            const colorVariants = {
                green: 'text-green-500',
                red: 'text-red-500',
                yellow: 'text-yellow-500',
                default: 'text-green-500',
            }
            let textClasses = colorVariants[this.currentColor] + " "+this.currentIcon;
            return `${ textClasses }`;
        },
        positionClasses(){
            let positionClasses = "right-8 bottom-8";

            switch (this.currentPosition){
                case "RB":
                    positionClasses = "right-8 bottom-8";
                    break;
                case "LB":
                    positionClasses = "left-8 bottom-8";
                    break;
                case "LT":
                    positionClasses = "left-8 top-8";
                    break;
                case "RT":
                    positionClasses = "right-8 top-8";
                    break;
                default:
                    break;
            }

            return `${ positionClasses }`;
        },
        sideClasses(){
            const colorVariants = {
                green: 'bg-green-500',
                red: 'bg-red-500',
                yellow: 'bg-yellow-500',
                default: 'bg-green-500',
            }

            return `${ colorVariants[this.currentColor] }`;
        }
    }
};
</script>
