'use client'

import { Suspense } from 'react'
import { PageBanner } from "@/components/page-banner"
import { AuthTabs } from '@/components/auth-tabs'

export default function LoginPage() {
  return (
    <div>
      <PageBanner 
        title="Login" 
        paths={[
          { label: "Account", href: "/auth" },
          { label: "Login", href: "/login" }
        ]} 
      />
      <main className="container mx-auto py-16">
        <div className="mx-auto max-w-md">
          <Suspense fallback={<div>Loading...</div>}>
            <AuthTabs />
          </Suspense>
        </div>
      </main>
    </div>
  )
} 