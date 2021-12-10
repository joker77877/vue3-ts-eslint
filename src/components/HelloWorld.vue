<template>
    <h1>{{ msg }}</h1>
    <Table size="small" :columns="columns" />
    <p>
        Recommended IDE setup:
        <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
        +
        <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank">Vetur</a>
        or
        <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
        (if using
        <code>&lt;script setup&gt;</code>)
    </p>

    <p>See <code>README.md</code> for more information.</p>

    <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>
        |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>

    <button @click="count++">count is: {{ count }}</button>
    <p>
        Edit
        <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

import { Table, TableColumnsType } from 'ant-design-vue';

export default defineComponent({
    name: 'HelloWorld',
    components: { Table },
    props: {
        msg: {
            type: String,
            required: true,
        },
    },
    setup: () => {
        const count = ref(0);
        const columns: TableColumnsType<{ name: string }> = [{ title: '1', key: 'name' }];
        return { count, columns };
    },
});
</script>

<style lang="scss">
a {
    color: #42b983;
}
label {
    margin: 0 0.5em;
    font-weight: bold;
}
code {
    padding: 2px 4px;
    color: #304455;
    background-color: #eee;
    border-radius: 4px;
}
</style>
