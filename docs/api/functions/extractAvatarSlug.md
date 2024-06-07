> **extractAvatarSlug**(`path`): [`AvatarSlug`](api%5Ctype-aliases%5CAvatarSlug.md) \| `null`

Extracts the avatar slug from a path or URL

## Parameters

• **path**: `"/images/avatars/svg/blobby-green.svg"` \| `"/images/avatars/svg/blobby-yellow.svg"` \| `"/images/avatars/svg/blobby-blue.svg"` \| `"/images/avatars/svg/blobby-purple.svg"` \| `"/images/avatars/svg/area-52-yellow.svg"` \| `"/images/avatars/svg/area-52-blue.svg"` \| `"/images/avatars/svg/area-52-green.svg"` \| `"/images/avatars/svg/area-52-purple.svg"` \| `"/images/avatars/svg/eggleston-blue.svg"` \| `"/images/avatars/svg/eggleston-yellow.svg"` \| `"/images/avatars/svg/eggleston-green.svg"` \| `"/images/avatars/svg/eggleston-orange.svg"` \| `"/images/avatars/svg/scuttlebug-purple.svg"` \| `"/images/avatars/svg/scuttlebug-yellow.svg"` \| `"/images/avatars/svg/scuttlebug-blue.svg"` \| `"/images/avatars/svg/scuttlebug-green.svg"` \| `"/images/avatars/svg/boggle-yellow.svg"` \| `"/images/avatars/svg/boggle-blue.svg"` \| `"/images/avatars/svg/boggle-green.svg"` \| `"/images/avatars/svg/boggle-purple.svg"` \| `"/images/avatars/svg/sneak-peak-green.svg"` \| `"/images/avatars/svg/sneak-peak-yellow.svg"` \| `"/images/avatars/svg/sneak-peak-blue.svg"` \| `"/images/avatars/svg/sneak-peak-purple.svg"` \| `"/images/avatars/svg/stelly-blue.svg"` \| `"/images/avatars/svg/stelly-yellow.svg"` \| `"/images/avatars/svg/stelly-green.svg"` \| `"/images/avatars/svg/stelly-orange.svg"` \| `"/images/avatars/svg/cacteye-purple.svg"` \| `"/images/avatars/svg/cacteye-yellow.svg"` \| `"/images/avatars/svg/cacteye-blue.svg"` \| `"/images/avatars/svg/cacteye-green.svg"` \| `"/images/avatars/svg/leaf-green.svg"` \| `"/images/avatars/svg/leaf-blue.svg"` \| `"/images/avatars/svg/leaf-grey.svg"` \| `"/images/avatars/svg/leaf-red.svg"` \| `"/images/avatars/svg/leaf-orange.svg"` \| `"/images/avatars/svg/leaf-yellow.svg"` \| `"/images/avatars/svg/leafers-seed.svg"` \| `"/images/avatars/svg/leafers-seedling.svg"` \| `"/images/avatars/svg/leafers-sapling.svg"` \| `"/images/avatars/svg/leafers-tree.svg"` \| `"/images/avatars/svg/leafers-ultimate.svg"` \| `"/images/avatars/svg/piceratops-seed.svg"` \| `"/images/avatars/svg/piceratops-seedling.svg"` \| `"/images/avatars/svg/piceratops-sapling.svg"` \| `"/images/avatars/svg/piceratops-tree.svg"` \| `"/images/avatars/svg/piceratops-ultimate.svg"` \| `"/images/avatars/svg/duskpin-seed.svg"` \| `"/images/avatars/svg/duskpin-seedling.svg"` \| `"/images/avatars/svg/duskpin-sapling.svg"` \| `"/images/avatars/svg/duskpin-tree.svg"` \| `"/images/avatars/svg/duskpin-ultimate.svg"` \| `"/images/avatars/svg/primosaur-seed.svg"` \| `"/images/avatars/svg/primosaur-seedling.svg"` \| `"/images/avatars/svg/primosaur-sapling.svg"` \| `"/images/avatars/svg/primosaur-tree.svg"` \| `"/images/avatars/svg/primosaur-ultimate.svg"` \| `"/images/avatars/svg/starky-seed.svg"` \| `"/images/avatars/svg/starky-seedling.svg"` \| `"/images/avatars/svg/starky-sapling.svg"` \| `"/images/avatars/svg/starky-tree.svg"` \| `"/images/avatars/svg/starky-ultimate.svg"` \| `"/images/avatars/svg/aqualine-seed.svg"` \| `"/images/avatars/svg/aqualine-seedling.svg"` \| `"/images/avatars/svg/aqualine-sapling.svg"` \| `"/images/avatars/svg/aqualine-tree.svg"` \| `"/images/avatars/svg/aqualine-ultimate.svg"` \| `"/images/avatars/svg/spunky-sam.svg"` \| `"/images/avatars/svg/spunky-sam-green.svg"` \| `"/images/avatars/svg/spunky-sam-orange.svg"` \| `"/images/avatars/svg/spunky-sam-red.svg"` \| `"/images/avatars/svg/marcimus.svg"` \| `"/images/avatars/svg/marcimus-orange.svg"` \| `"/images/avatars/svg/marcimus-red.svg"` \| `"/images/avatars/svg/marcimus-purple.svg"` \| `"/images/avatars/svg/mr-pink.svg"` \| `"/images/avatars/svg/mr-pink-green.svg"` \| `"/images/avatars/svg/mr-pink-orange.svg"` \| `"/images/avatars/svg/robot_female_1.svg"` \| `"/images/avatars/svg/robot_female_2.svg"` \| `"/images/avatars/svg/robot_female_3.svg"` \| `"/images/avatars/svg/robot_male_1.svg"` \| `"/images/avatars/svg/robot_male_2.svg"` \| `"/images/avatars/svg/robot_male_3.svg"` \| `"/images/avatars/svg/orange-juice-squid.svg"` \| `"/images/avatars/svg/purple-pi.svg"` \| `"/images/avatars/svg/purple-pi-pink.svg"` \| `"/images/avatars/svg/purple-pi-teal.svg"` \| `"/images/avatars/svg/mr-pants.svg"` \| `"/images/avatars/svg/mr-pants-green.svg"` \| `"/images/avatars/svg/mr-pants-orange.svg"` \| `"/images/avatars/svg/mr-pants-pink.svg"` \| `"/images/avatars/svg/mr-pants-purple.svg"` \| `"/images/avatars/svg/old-spice-man.svg"` \| `"/images/avatars/svg/old-spice-man-blue.svg"` \| `"/images/avatars/svg/cs-winston.svg"` \| `"/images/avatars/svg/cs-winston-baby.svg"` \| `"/images/avatars/svg/cs-ohnoes.svg"` \| `"/images/avatars/svg/cs-hopper-happy.svg"` \| `"/images/avatars/svg/cs-hopper-jumping.svg"` \| `"/images/avatars/svg/cs-hopper-cool.svg"` \| [`AvatarURL`](api%5Ctype-aliases%5CAvatarURL.md)

Relative or absolute path to an avatar

## Returns

[`AvatarSlug`](api%5Ctype-aliases%5CAvatarSlug.md) \| `null`

The avatar slug if the path is valid, null otherwise

## Examples

```ts
extractAvatarSlug('/images/avatars/blobby-green.svg') // 'blobby-green'
```

```ts
extractAvatarSlug('https://www.khanacademy.org/images/avatars/svg/blobby-green.svg') // 'blobby-green'
```

```ts
extractAvatarSlug('https://www.khanacademy.org/images/avatars/blobby-green.png') // 'blobby-green'
```

## Source

[src/utils/avatars.ts:259](https://github.com/bhavjitChauhan/khan-api/blob/214cc6672777162cd3ec638a3ad3a22f7fe37e04/src/utils/avatars.ts#L259)
