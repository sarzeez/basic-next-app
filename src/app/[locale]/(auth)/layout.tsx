import { AuthGuard } from '@/components/Auth/AuthGuard'
import { UserStoreInitializer } from '@/components/Auth/UserStoreInitializer'

type AuthLayoutProps = {
  children: React.ReactNode
}
const AuthLayout = async ({ children }: AuthLayoutProps) => {
  return (
    <>
      <UserStoreInitializer user={null} />
      <AuthGuard>{children}</AuthGuard>
    </>
  )
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default AuthLayout
