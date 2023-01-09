/**
 * @link https://www.khanacademy.org/badges/
 */
export default interface Badge {
  id: string
  name: string
  description: string
  points: number
  custom: boolean
  retired?: boolean
  category: BadgeCategory
  icons: BadgeIcons
}

export enum BadgeCategory {
  Meteorite,
  Moon,
  Earth,
  Sun,
  BlackHole,
  Challenge,
}

export interface BadgeIcons {
  /**
   * 40 x 40 PNG
   */
  small: string
  /**
   * 60 x 60 PNG
   */
  compact: string
  /**
   * 70 x 70 PNG
   */
  email: string
  /**
   * 512 x 512 PNG
   */
  large: string
}
