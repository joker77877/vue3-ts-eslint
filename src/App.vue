<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld :msg="`Hello ${name} with props myProp: ${myProp}`" />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { AppProps } from 'single-spa';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
    name: 'App',
    components: {
        HelloWorld,
    },
    props: {
        name: {
            type: String,
            default: 'default name',
        },
        mountParcel: {
            type: Function as PropType<AppProps['mountParcel']>,
        },
        singleSpa: {
            type: Object as PropType<AppProps['singleSpa']>,
        },
        myProp: {
            type: String,
            default: 'defaultV',
        },
    },
});
</script>
