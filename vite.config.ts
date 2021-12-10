/*
 * @Description: vite配置
 * @Author: 尹彬宇
 * @Date: 2021-11-12 10:43:06
 * @LastEditors: 尹彬宇
 * @LastEditTime: 2021-11-18 16:54:36
 * @FilePath: /vue3-ts-eslint/vite.config.ts
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import visualizer from 'rollup-plugin-visualizer';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import packageInfo from './package.json';

export default ({ mode }: { mode: string }) => {
    return defineConfig({
        plugins: [
            vue(),
            // Components({
            //     dirs: ['src'],
            //     extensions: ['vue', 'tsx'],
            //     dts: true,
            //     resolvers: [AntDesignVueResolver({ importStyle: 'less', resolveIcons: true })],
            // }),
        ],
        css: {
            postcss: '',
            preprocessorOptions: {
                less: {
                    modifyVars: {
                        'primary-color': '#1db5ad',
                    },
                    javascriptEnabled: true,
                },
            },
        },
        base: mode === 'production' ? `https://s3-gz01.didistatic.com/mapp/${packageInfo.name}/` : '/',
        build: {
            assetsDir: '',
            outDir: 'output',
            cssCodeSplit: false,
            rollupOptions: {
                plugins: [visualizer({ open: true })],
                input: 'src/single-spa-config.ts',
                preserveEntrySignatures: 'exports-only',
                external: ['vue', 'single-spa', 'single-spa-vue', 'moment'],
                output: {
                    format: 'system',
                    entryFileNames: `${packageInfo.name}.[format].[hash].js`,
                },
            },
            manifest: true,
        },
    });
};
