# Vue 3 + Typescript + Vite

## 初始化

### 使用 vite 脚手架初始化

```
yarn create @vitejs/app vue-vite-example --template vue-ts
```

### 安装依赖

```
yarn
yarn add single-spa-vue single-spa
```

### 编辑构建入口 src/build-entry.ts

```ts
import { h, createApp, ComponentPublicInstance } from 'vue';
import singleSpaVue from 'single-spa-vue';
import { AppProps } from 'single-spa';
import App from './App.vue';

interface myAppProps {
  myProp: string;
}

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      const that = this as ComponentPublicInstance<AppProps, myAppProps>;
      return h(App, {
        name: that.name,
        mountParcel: that.mountParcel,
        singleSpa: that.singleSpa,
        myProp: that.myProp,
      });
    },
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
```

### 为组件 src/App.vue 声明 props

```ts
defineComponent({
  props: {
    name: {
      type: String,
      default: 'default name',
    },
    mountParcel: {
      type: Function as PropType<AppProps['mountParcel']>,
      default: 'default name',
    },
    singleSpa: {
      type: Object as PropType<AppProps['singleSpa']>,
      default: 'default name',
    },
    myProp: {
      type: String,
      default: 'defaultV',
    },
  },
})
```


online example https://ff.intra.xiaojukeji.com/t#/vue-vite-example