# Development

## Bump Dependencies
```bash
npx npm-check-updates -i
```

## Release

0. Switch to a bash shell
1. `./scripts/release.sh`
    - do *not* press <kbd>Enter</kbd> to open browser to authenticate npm on WSL
2. `git push --follow-tags` on `master` branch
3. Create a new release on GitHub
    - use the tag created by `release.sh`
    - use the "Generate release notes" button
4. Update docs
