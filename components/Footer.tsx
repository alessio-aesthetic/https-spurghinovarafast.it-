import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-page px-5 py-16 lg:px-8">
      <div className="container-grid mx-auto max-w-7xl gap-8">
        <div className="col-span-12 md:col-span-4">
          <div className="relative h-10 w-56">
            <Image src="/logo.svg" alt="Spurghi Novara Fast" fill className="object-contain object-left" />
          </div>
        </div>
        <div className="col-span-12 text-sm leading-7 text-muted md:col-span-4">
          Via Esempio 1, 28100 Novara NO<br />
          info@spurghinovarafast.it
        </div>
        <div className="col-span-12 text-sm leading-7 text-muted md:col-span-4">
          Pronto intervento 24H<br />
          Tel. 329 123 4567
        </div>
      </div>
    </footer>
  );
}
