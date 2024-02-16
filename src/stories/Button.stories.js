import { userEvent, within, fn } from '@storybook/test';
import ButtonVue from '../components/Buttons/Button.vue';

export default {
    title:"Design System/Buttons/Button",
    component: ButtonVue,
    argTypes: {
        variant: { 
            options: ['primary', 'neutral','link'],
            description: 'Test description',
            control: 'radio'
        },
        disabled:{
            description: 'Test description',
            control: 'boolean'
        },
        block:{
            description: 'Test description',
            control: 'boolean'
        },
        outline:{
            description: 'Test description',
            control: 'boolean'
        },
        icon:{
            description: 'Test description',
            control: 'text'
        },
        'button-content':{
            description: 'Test description',
            control: 'text'
        }
    },
    args: {
        variant: 'primary',
        disabled: false,
        block: false,
        outline: false,
        icon: "",
        'button-content': "Button text",
        onClick: fn()
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await userEvent.hover(canvas.getByRole('button'));
        await userEvent.click(canvas.getByRole('button'));
        await userEvent.unhover(canvas.getByRole('button'));
    },
    render: (args) => ({
        setup() {
            return { args };
        },
        components: { ButtonVue },
        template: `
        <ButtonVue v-bind="args">
            <template #button-content>
                {{args["button-content"]}}
            </template>
        </ButtonVue>`,
    }),
};

export const Primary = {
    args: {
        variant: 'primary'
    },
};