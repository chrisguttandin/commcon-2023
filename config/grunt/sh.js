module.exports = () => {
    return {
        'analyze': {
            cmd: `npx ng build --configuration production --source-map --stats-json && \
                webpack-bundle-analyzer build/commcon-2023/stats.json`
        },
        'build': {
            cmd: 'npx ng build --base-href /commcon-2023/ --configuration production --subresource-integrity'
        },
        'rimraf-source-maps': {
            cmd: 'rimraf build/commcon-2023/browser/**.map'
        },
        'verify': {
            cmd: `npx bundle-buddy build/commcon-2023/browser/*.js.map && \
                grep -r build/commcon-2023/browser/*.js.map -e '/environments/environment.ts'; test $? -eq 1`
        }
    };
};
