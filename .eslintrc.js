module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'airbnb-base',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint',
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    plugins: ['import'],
    rules: {
        'prettier/prettier': 0,
        'no-undef': 0,
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // 'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'import/no-extraneous-dependencies': ['error', { devDependencies: ['vite.config.ts'] }],
        'import/no-unresolved': [
            2,
            {
                ignore: ['^@/'], // @ 是设置的路径别名
            },
        ],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                    normal: 'never',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
        'vue/v-on-event-hyphenation': [
            'error',
            'never',
            {
                autofix: true,
            },
        ],
        'vue/attribute-hyphenation': ['error', 'never'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-void': ['error', { allowAsStatement: true }],
        'no-restricted-globals': ['error', 'event', 'fdescribe'],
        'import/prefer-default-export': 0,
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            alias: {
                map: [['/@', './src']],
                extensions: ['.ts', '.js', '.jsx', '.json', '.scss'],
            },
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
