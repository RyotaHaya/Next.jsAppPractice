// Product Category
export type Category = 'shoes' | 'clothes' | 'book'
// Product status
export type Condition = 'new' | 'used'

//Product detail
export type Product = {
  id: number
  title: string
  description: string
  imageUrl: string
  blurDataUrl: string
  price: number
  condition: Condition
  owner: User
}

export type User = {
  id: number
  username: string
  displayName: string
  email: string
  profileImageUrl: string
  description: string
}

export type ApiContext = {
  apiRootUrl: string
}
