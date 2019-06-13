const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
];
const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
];

module.exports = (api) => {
    api.cache(true);
    return {
        plugins,
        presets,
    };
};
