# Development

## Bump Dependencies
1. `yarn set version latest`
1. `yarn upgrade-interactive`
2. `yarn dlx @yarnpkg/sdks`

## Release

0. Switch to a bash shell
1. `./scripts/release.sh`
    - do *not* press <kbd>Enter</kbd> to open browser to authenticate npm on WSL
2. `./scripts/docs.sh` if documentation not already updated
3. `git push --follow-tags` on `master` branch
4. `git push` on `docs` branch
5. Create a new release on GitHub
    - use the tag created by `release.sh`
    - use the "Generate release notes" button
