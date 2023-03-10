import {
  AvatarName,
  AvatarPath,
  AvatarPNG,
  AvatarSlug,
  AvatarSVG,
  AvatarURL,
} from '../types/strings'

export const avatarNames = [
  'blobby_green_style',
  'blobby_yellow_style',
  'blobby_blue_style',
  'blobby_purple_style',
  'area_52_yellow_style',
  'area_52_blue_style',
  'area_52_green_style',
  'area_52_purple_style',
  'eggleston_blue_style',
  'eggleston_yellow_style',
  'eggleston_green_style',
  'eggleston_orange_style',
  'scuttlebug_purple_style',
  'scuttlebug_yellow_style',
  'scuttlebug_blue_style',
  'scuttlebug_green_style',
  'boggle_yellow_style',
  'boggle_blue_style',
  'boggle_green_style',
  'boggle_purple_style',
  'sneak_peak_green_style',
  'sneak_peak_yellow_style',
  'sneak_peak_blue_style',
  'sneak_peak_purple_style',
  'stelly_blue_style',
  'stelly_yellow_style',
  'stelly_green_style',
  'stelly_orange_style',
  'cacteye_purple_style',
  'cacteye_yellow_style',
  'cacteye_blue_style',
  'cacteye_green_style',
  'leaf_green_style',
  'leaf_blue_style',
  'leaf_grey_style',
  'leaf_red_style',
  'leaf_orange_style',
  'leaf_yellow_style',
  'leafers_seed_style',
  'leafers_seedling_style',
  'leafers_sapling_style',
  'leafers_tree_style',
  'leafers_ultimate_style',
  'piceratops_seed_style',
  'piceratops_seedling_style',
  'piceratops_sapling_style',
  'piceratops_tree_style',
  'piceratops_ultimate_style',
  'duskpin_seed_style',
  'duskpin_seedling_style',
  'duskpin_sapling_style',
  'duskpin_tree_style',
  'duskpin_ultimate_style',
  'primosaur_seed_style',
  'primosaur_seedling_style',
  'primosaur_sapling_style',
  'primosaur_tree_style',
  'primosaur_ultimate_style',
  'starky_seed_style',
  'starky_seedling_style',
  'starky_sapling_style',
  'starky_tree_style',
  'starky_ultimate_style',
  'aqualine_seed_style',
  'aqualine_seedling_style',
  'aqualine_sapling_style',
  'aqualine_tree_style',
  'aqualine_ultimate_style',
  'spunky_sam_blue_style',
  'spunky_sam_green_style',
  'spunky_sam_orange_style',
  'spunky_sam_red_style',
  'marcimus_pink_style',
  'marcimus_orange_style',
  'marcimus_red_style',
  'marcimus_purple_style',
  'mr_pink_red_style',
  'mr_pink_green_style',
  'mr_pink_orange_style',
  'female_robot_amelia_style',
  'female_robot_ada_style',
  'female_robot_grace_style',
  'male_robot_johnny_style',
  'male_robot_donald_style',
  'male_robot_hal_style',
  'orange_juice_squid_orange_style',
  'purple_pi_purple_style',
  'purple_pi_pink_style',
  'purple_pi_teal_style',
  'mr_pants_teal_style',
  'mr_pants_green_style',
  'mr_pants_orange_style',
  'mr_pants_pink_style',
  'mr_pants_purple_style',
  'old_spice_man_green_style',
  'old_spice_man_blue_style',
  'winston_default_style',
  'winston_baby_style',
  'ohnoes_default_style',
  'hopper_happy_style',
  'hopper_jumping_style',
  'hopper_cool_style',
] as const

// Not as simple as removing the `_style` suffix and replacing `_` with `-`
// Why would it be? This is Khan Academy we're talking about
export const avatarSlugs = [
  'blobby-green',
  'blobby-yellow',
  'blobby-blue',
  'blobby-purple',
  'area-52-yellow',
  'area-52-blue',
  'area-52-green',
  'area-52-purple',
  'eggleston-blue',
  'eggleston-yellow',
  'eggleston-green',
  'eggleston-orange',
  'scuttlebug-purple',
  'scuttlebug-yellow',
  'scuttlebug-blue',
  'scuttlebug-green',
  'boggle-yellow',
  'boggle-blue',
  'boggle-green',
  'boggle-purple',
  'sneak-peak-green',
  'sneak-peak-yellow',
  'sneak-peak-blue',
  'sneak-peak-purple',
  'stelly-blue',
  'stelly-yellow',
  'stelly-green',
  'stelly-orange',
  'cacteye-purple',
  'cacteye-yellow',
  'cacteye-blue',
  'cacteye-green',
  'leaf-green',
  'leaf-blue',
  'leaf-grey',
  'leaf-red',
  'leaf-orange',
  'leaf-yellow',
  'leafers-seed',
  'leafers-seedling',
  'leafers-sapling',
  'leafers-tree',
  'leafers-ultimate',
  'piceratops-seed',
  'piceratops-seedling',
  'piceratops-sapling',
  'piceratops-tree',
  'piceratops-ultimate',
  'duskpin-seed',
  'duskpin-seedling',
  'duskpin-sapling',
  'duskpin-tree',
  'duskpin-ultimate',
  'primosaur-seed',
  'primosaur-seedling',
  'primosaur-sapling',
  'primosaur-tree',
  'primosaur-ultimate',
  'starky-seed',
  'starky-seedling',
  'starky-sapling',
  'starky-tree',
  'starky-ultimate',
  'aqualine-seed',
  'aqualine-seedling',
  'aqualine-sapling',
  'aqualine-tree',
  'aqualine-ultimate',
  'spunky-sam',
  'spunky-sam-green',
  'spunky-sam-orange',
  'spunky-sam-red',
  'marcimus',
  'marcimus-orange',
  'marcimus-red',
  'marcimus-purple',
  'mr-pink',
  'mr-pink-green',
  'mr-pink-orange',
  'robot_female_1',
  'robot_female_2',
  'robot_female_3',
  'robot_male_1',
  'robot_male_2',
  'robot_male_3',
  'orange-juice-squid',
  'purple-pi',
  'purple-pi-pink',
  'purple-pi-teal',
  'mr-pants',
  'mr-pants-green',
  'mr-pants-orange',
  'mr-pants-pink',
  'mr-pants-purple',
  'old-spice-man',
  'old-spice-man-blue',
  'cs-winston',
  'cs-winston-baby',
  'cs-ohnoes',
  'cs-hopper-happy',
  'cs-hopper-jumping',
  'cs-hopper-cool',
] as const

export function avatarNameToSlug(name: AvatarName) {
  return avatarSlugs[avatarNames.indexOf(name)]
}

export function avatarSlugToName(slug: AvatarSlug) {
  return avatarNames[avatarSlugs.indexOf(slug)]
}

/**
 * Generates a URL to an avatar SVG
 */
export function generateAvatarSVG(slug: AvatarSlug): AvatarSVG {
  return `https://www.khanacademy.org/images/avatars/svg/${slug}.svg`
}

/**
 * Generates a URL to an avatar PNG
 */
export function generateAvatarPNG(slug: AvatarSlug): AvatarPNG {
  return `https://www.khanacademy.org/images/avatars/${slug}.png`
}

/**
 * Extracts the avatar slug from a path or URL
 *
 * @param path Relative or absolute path to an avatar
 * @returns The avatar slug if the path is valid, null otherwise
 *
 * @example
 * extractAvatarSlug('/images/avatars/blobby-green.svg') // 'blobby-green'
 *
 * @example
 * extractAvatarSlug('https://www.khanacademy.org/images/avatars/svg/blobby-green.svg') // 'blobby-green'
 *
 * @example
 * extractAvatarSlug('https://www.khanacademy.org/images/avatars/blobby-green.png') // 'blobby-green'
 */
export function extractAvatarSlug(
  path: AvatarPath | AvatarURL
): AvatarSlug | null {
  return (
    (path.match(
      /^(?:https:\/\/www\.khanacademy\.org)?\/images\/avatars(?:\/svg)?\/(.*)\.(?:(?:svg)|(?:png))$/
    )?.[1] as AvatarSlug | undefined) ?? null
  )
}

export function convertAvatarSVGToPNG(url: AvatarSVG): AvatarPNG | null {
  const slug = extractAvatarSlug(url)
  if (!slug) return null
  return generateAvatarPNG(slug)
}

export function convertAvatarPNGToSVG(url: AvatarPNG): AvatarSVG | null {
  const slug = extractAvatarSlug(url)
  if (!slug) return null
  return generateAvatarSVG(slug)
}
