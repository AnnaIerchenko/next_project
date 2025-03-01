import { Container, Header } from "@/components/shared";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next App || cart",
  description: "Next App || cart",
}

export default function CheckoutLayout({children} : {children: React.ReactNode}) {
  return (
    <main className="min-h-screen bg-[#f7ebde]">
      <Container>
        <Header hasSearch={false} hasCart={false} className="border-gray-200"/>
        {children}
      </Container>
    </main>
  )
}