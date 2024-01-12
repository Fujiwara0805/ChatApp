export interface MESSAGE {
  _id: string | number
  text: string
  createdAt: Date | number
  user: USER
  image?: string
}
interface USER {
  _id: string | number
  name?: string
  image?: string
}
