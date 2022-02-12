// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        'src': '/link-cue'
    },
    plugins: [
        '@snowpack/plugin-typescript',
    ],
    packageOptions: {
        /* ... */
    },
    devOptions: {
        /* ... */
    },
    buildOptions: {
        sourcemap: true,
    },
    alias: {
        'react': 'preact/compat',
        'react-dom': 'preact/compat',
    },
};
