import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-terra-black font-poppins">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
