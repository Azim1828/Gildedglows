'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { CheckoutForm } from "@/components/checkout-form"
import { OrderSummary } from "@/components/order-summary"
import { PageBanner } from "@/components/page-banner"
import { useShop } from "@/contexts/shop-context"
import { Loader2 } from "lucide-react"

export default function CheckoutPage() {
  const { user } = useAuth()
  const { cart } = useShop()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login?redirect=/checkout')
    }
  }, [user, router])

  if (!user) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (cart.length === 0) {
    return (
      <div>
        <PageBanner 
          title="Checkout" 
          paths={[
            { label: "Shop", href: "/shop" },
            { label: "Cart", href: "/cart" },
            { label: "Checkout", href: "/checkout" }
          ]} 
        />
        <main className="container mx-auto py-16">
          <p className="text-muted-foreground">Your cart is empty</p>
        </main>
      </div>
    )
  }

  return (
    <div>
      <PageBanner 
        title="Checkout" 
        paths={[
          { label: "Shop", href: "/shop" },
          { label: "Cart", href: "/cart" },
          { label: "Checkout", href: "/checkout" }
        ]} 
      />
      <main className="container mx-auto py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <CheckoutForm />
          </div>
          <div>
            <OrderSummary />
          </div>
        </div>
      </main>
    </div>
  )
} 