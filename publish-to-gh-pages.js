import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/ierezell/ierezell.github.io.git', // Update to point to your repository
        user: {
            name: 'ierezell',
            email: 'ierezell@gmail.com'
        },
        dotfiles: true
    },
    () =>
    {
        console.log('Deploy Complete!');
    }
);