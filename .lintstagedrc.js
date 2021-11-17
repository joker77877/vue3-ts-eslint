module.exports = {
    'src/**/*{js,jsx,ts,tsx,vue}': ['eslint --fix', 'prettier --write'],
    'src/**/*{css,less,scss,vue}': ['stylelint --fix'],
};
