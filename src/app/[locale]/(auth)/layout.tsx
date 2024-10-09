import { AuthGuard } from '@/components/Auth/AuthGuard'

type AuthLayoutProps = {
  children: React.ReactNode
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <AuthGuard>{children}</AuthGuard>
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default AuthLayout
