import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Numbers } from "@/components/Numbers";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Numbers />
        <section className="bg-page px-5 py-24 lg:px-8">
          <div className="container-grid mx-auto max-w-7xl gap-y-10">
            <div className="col-span-12 lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">Metodo</p>
              <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] lg:text-6xl">
                Dalla chiamata alla tubazione libera.
              </h2>
            </div>
            <div className="col-span-12 grid grid-cols-1 gap-5 lg:col-span-7 lg:grid-cols-3">
              {["Valutiamo urgenza e accessi", "Arriviamo con mezzo adatto", "Verifichiamo il deflusso"].map((item, index) => (
                <div key={item} className="border-t border-white/15 pt-6">
                  <p className="text-5xl font-black text-accent">0{index + 1}</p>
                  <p className="mt-5 text-xl font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
