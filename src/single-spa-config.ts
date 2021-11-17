import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';
import { AppProps } from 'single-spa';
import App from './App.vue';

interface MyAppProps {
    myProp: string;
}

const vueLifecycles = singleSpaVue({
    createApp,
    appOptions: async (props: AppProps & MyAppProps) => {
        return {
            render() {
                return h(App, props);
            },
        };
    },
});

export const { bootstrap, mount, unmount, update } = vueLifecycles;
