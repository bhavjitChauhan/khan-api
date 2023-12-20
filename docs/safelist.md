# Safelist

Khan Academy's internal GraphQL API only allows a set of "safelisted" queries and mutations for security reasons. This can lead to your app breaking when Khan inevitably changes these to make way for new features or remove old ones. This repository keeps track of the queries and mutations that are currently safelisted.

:::info

Since version [0.6.0](https://github.com/bhavjitChauhan/khan-api/releases/tag/v0.6.0), the library will seemlessly fall back to using the safelist if any query is outdated

:::

## Usage

Get the latest `getFullUserProfile` query:

```js
const GET_FULL_USER_PROFILE_QUERY = await fetch('https://cdn.jsdelivr.net/gh/bhavjitChauhan/khan-api@safelist/query/getFullUserProfile')
    .then((response) => response.text());
```

You can either use the safelist for every request or as a fallback when a request fails.

```js
const response = await fetch(/* ... */)
if (response.status === 403) {
    // Fall back to the safelist
}
```
