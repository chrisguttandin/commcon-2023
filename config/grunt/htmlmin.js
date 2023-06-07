module.exports = {
    default: {
        files: [
            {
                cwd: 'build/commcon-2023',
                dest: 'build/commcon-2023',
                expand: true,
                src: ['**/*.html']
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
