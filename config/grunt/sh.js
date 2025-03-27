module.exports = () => {
    return {
        'analyze': {
            cmd: `npx ng build --configuration production --source-map --stats-json && \
                webpack-bundle-analyzer build/commcon-2023/stats.json`
        },
        'build': {
            cmd: 'npx ng build --base-href /commcon-2023/ --configuration production --subresource-integrity'
        },
        'continuous': {
            cmd: 'npx ng test'
        },
        'e2e': {
            cmd: `npx playwright install --with-deps && \
                npx playwright test --config config/playwright/config.ts`
        },
        'monitor': {
            cmd: 'npx ng serve'
        },
        'preview': {
            cmd: 'npx ng serve --configuration production'
        },
        'rimraf-source-maps': {
            cmd: 'rimraf build/commcon-2023/browser/**.map'
        },
        'smoke': {
            cmd: `npx playwright install --with-deps && \
                IS_SMOKE_TEST=true npx playwright test --config config/playwright/config.ts && \
                npx hint --telemetry=off https://chrisguttandin.github.io/commcon-2023`
        },
        'test': {
            cmd: 'npx ng test --watch false'
        },
        'verify': {
            cmd: `npx bundle-buddy build/commcon-2023/browser/*.js.map && \
                grep -r build/commcon-2023/browser/*.js.map -e '/environments/environment.ts'; test $? -eq 1`
        }
    };
};
