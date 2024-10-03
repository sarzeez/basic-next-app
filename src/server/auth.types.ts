export type MeQueryResult = {
  user: {
    username: string
    password: string
    id: string
    createdAt: Date | null
    updatedAt: Date | null
  }
}
