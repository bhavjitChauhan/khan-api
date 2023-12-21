# Khan Proxy

Access Khan Academy's API from anywhere.

## Background

Khan Academy's CORS policy does not allow cross-origin requests from other domains. This proxy allows you to make requests to Khan Academy's API from any domain.

## Usage

### [Khan API Library](https://github.com/bhavjitChauhan/khan-api)

Since version [0.7.0](https://github.com/bhavjitChauhan/khan-api/releases/tag/v0.7.0), the library will seemlessly use this proxy if not on Khan Academy's domain.

### Manual

Replace `www.khanacademy.org` with `khan-proxy.bhavjit.com` in your requests.

See the [examples](examples) directory for working demos.