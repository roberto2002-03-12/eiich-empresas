import { Footer } from "@/components/Layout/Footer"

export default function CommonLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <Footer/>
    </div>
  )
}