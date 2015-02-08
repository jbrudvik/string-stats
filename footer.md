# Development

## Generate documentation

    $ npm install -g dox
    $ ./generate-docs > README.md

## Deploy

### bower

Where X.Y.Z is the new version number:

    $ git tag -a vX.Y.Z
    $ git push --tags

### npm

- Bump version in `package.json`
- `$ npm publish`
