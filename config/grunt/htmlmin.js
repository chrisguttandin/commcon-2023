module.exports = {
    default: {
        files: [
            {
                cwd: 'build/commcon-2023/browser',
                dest: 'build/commcon-2023/browser',
                expand: true,
                src: ['**/404.html']
            }
        ],
        options: {
            caseSensitive: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            minifyCSS: true,
            removeComments: true
        }
    }
};
