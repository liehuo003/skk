import Compliance from "@/components/Compliance";
import ContactSection from "@/components/ContactSection";
import GradesTable from "@/components/GradesTable";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OEMSection from "@/components/OEMSection";
import Products from "@/components/Products";
import QualityProcess from "@/components/QualityProcess";
import WhySailtik from "@/components/WhySailtik";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Products />
      <GradesTable />
      <QualityProcess />
      <OEMSection />
      <Compliance />
      <WhySailtik />
      <ContactSection />
    </main>
  );
}
