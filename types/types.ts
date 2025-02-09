export type NavigationItemType = {
  name: string
  path: string
  children?: NavigationItemType[]
}

export type FeaturesItemType = {
  title: string
  description: string
  icon?: string
}

export type CardItemType = {
  date?: string
  title: string
  description?: string
  href?: string
}

export type DiscoverFeatureDataType = {
  title: string
  img: string
  features: FeaturesItemType[]
}

export type DocAnchorLinksType = {
  level: string
  content: string
  slug: string
}

export type VersionDocType = {
  title: string
  version: string
  slug: string
  url: string
  html: string
  anchorLinks: DocAnchorLinksType[]
}
