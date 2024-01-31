<template>
    <div class="container mx-auto my-16">
        <div class="grid-cols-2 md:grid-cols-3">
            <p class="text-5xl font-bold text-gray-900">Dashboard</p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
            <ButtonVue block="true" icon="ri-cloud-fill" variant="neutral" outline="true">Text</ButtonVue>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
            <p>Message is: {{ message }}</p>
            <div class="flex flex-col">
                
                <LabelVue target="test" required="true">Test</LabelVue>
                <InputVue id="test" type="text" rightIcon="ri-cloud-fill" prefix="https://" placeholder="Enter text" @update="value => message = value" />
                <MessageVue>Test message</MessageVue>
                    
                </div>
                
                <div class="flex flex-col">
                    
                    <LabelVue target="test1" required="true">Test</LabelVue>
                    <InputVue error="true" id="test1" type="text" rightIcon="ri-cloud-fill" prefix="https://" placeholder="Enter text"/>
                    <MessageVue error="true">Test message</MessageVue>
                        
                    </div>
                </div>
            </div>
        </template>
        
        <script>
        import ButtonVue from '@/components/Button.vue';
        import InputVue from '@/components/Inputs/Input.vue';
        import LabelVue from '@/components/Inputs/Label.vue';
        import MessageVue from '@/components/Inputs/Message.vue';
        
        export default{
            components: {
                ButtonVue,
                InputVue,
                LabelVue,
                MessageVue
            },
            data: function(){
                return {
                    message: "",
                }
            }
        }
    </script>