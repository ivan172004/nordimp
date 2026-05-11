"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calculator, Car, CheckCircle2, FileText, ShieldCheck, Truck, WalletCards } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NordimpLanding() {
  const [price, setPrice] = useState(35000);
  const [co2, setCo2] = useState(145);
  const [fuel, setFuel] = useState("gasolina");
  const [country, setCountry] = useState("Alemania");

  const result = useMemo(() => {
    const transport = country === "Alemania" ? 950 : 1200;
    const gestor = 650;
    const itv = 180;
    const dgt = 100;
    const serviceFee = 1490;

    let taxRate = 0;
    if (co2 >= 120 && co2 < 160) taxRate = 0.0475;
    if (co2 >= 160 && co2 < 200) taxRate = 0.0975;
    if (co2 >= 200) taxRate = 0.1475;
    if (fuel === "electrico") taxRate = 0;

    const matriculationTax = Math.round(price * taxRate);
    const total = price + transport + gestor + itv + dgt + serviceFee + matriculationTax;

    return { transport, gestor, itv, dgt, serviceFee, matriculationTax, total };
  }, [price, co2, fuel, country]);

  return (
    <main className="min-h-screen bg-[#090B0F] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(120,170,255,0.22),transparent_36%),linear-gradient(120deg,rgba(255,255,255,0.08),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pt-4 py-2 lg:grid-cols-2 lg:px-10 lg:py-4">
          <nav className="sticky top-4 z-50 col-span-full flex items-center justify-between rounded-3xl border border-white/10 bg-black/30 px-6 py-4 backdrop-blur-xl">
            <div className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Nordimp"
                width={180}
                height={60}
                className="h-14 w-[360px]"
              />
            </div>
            <Button
              onClick={() => document.getElementById("calculadora")?.scrollIntoView({ behavior: "smooth" })}
              className="h-12 rounded-full bg-white px-7 text-black transition duration-300 hover:scale-[1.03] hover:bg-white/90 active:scale-[0.98] shadow-lg shadow-white/5 hover:shadow-white/20"
            >
              Calcular coste real <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center py-2 lg:py-8"
          >
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              <ShieldCheck className="h-4 w-4" /> Importación Alemania → España
            </div>
            <h1 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-[-0.08em] text-white md:text-7xl">
              Importa tu coche desde Alemania sin sorpresas.
            </h1>
            <p className="mt-6 max-w-xl text-[18px] leading-8 text-white/55">
              Precio final transparente, verificación del vehículo, transporte y gestión completa hasta la matriculación en España.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={() => document.getElementById("calculadora")?.scrollIntoView({ behavior: "smooth" })}
                className="h-12 rounded-full bg-white px-7 text-black transition duration-300 hover:scale-[1.03] hover:bg-white/90 active:scale-[0.98]"
              >
                Calcular coste real <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button className="h-12 rounded-full border-white/15 bg-white/5 px-7 text-white transition duration-300 hover:scale-[1.03] hover:bg-white/10 active:scale-[0.98]">
                Ver cómo funciona
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center"
          >
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-blue-500/10 blur-3xl" />
            <div className="relative z-10 animate-[slideIn_1s_ease-out] w-full rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-2xl">
              <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-zinc-800 via-zinc-950 to-black">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
                alt="Coche premium"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />
                <div className="flex h-full flex-col justify-end p-8">
                  <div className="mb-8 h-32 rounded-full bg-white/10 blur-3xl" />
                  <div className="rounded-3xl border border-white/10 bg-black/45 p-5 backdrop-blur">
                    <p className="text-sm text-white/55">Estimación desde Alemania</p>
                    <div className="mt-2 flex items-end justify-between">
                      <div>
                        <p className="text-3xl font-semibold">€{result.total.toLocaleString("es-ES")}</p>
                        <p className="mt-1 text-sm text-white/50">precio final aproximado</p>
                      </div>
                      <Car className="h-10 w-10 text-white/70" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-4 md:grid-cols-4">
         {[
  {
    Icon: Car,
    title: "Encuentra el coche",
    text: "Busca el vehículo ideal en Alemania.",
  },
  {
    Icon: Calculator,
    title: "Calcula el coste real",
    text: "Conoce impuestos, transporte y gestión.",
  },
  {
    Icon: FileText,
    title: "Verificamos y gestionamos",
    text: "Nos ocupamos de toda la documentación.",
  },
  {
    Icon: Truck,
    title: "Lo recibes en España",
    text: "Entrega y matriculación listas.",
  },
].map((item) => (
  <Card
    key={item.title}
    className="rounded-3xl border-white/10 bg-white/[0.04]"
  >
    <CardContent className="p-6">
     <item.Icon className="mb-5 h-7 w-7 text-white/75 transition duration-300 group-hover:scale-110 group-hover:text-white" />
      <h3 className="text-lg font-semibold">{item.title}</h3>
      <p className="mt-3 text-sm text-white/60">
        {item.text}
      </p>
    </CardContent>
  </Card>
))}
        </div>
      </section>

      <section id="calculadora" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-white/40">Calculadora Nordimp</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Calcula el precio final antes de importar.</h2>
            <p className="mt-5 max-w-lg text-white/60">
              Una estimación clara para saber si importar el coche merece la pena antes de reservarlo.
            </p>
          </div>

          <Card className="rounded-[2rem] border-white/10 bg-[#0E1118] text-white shadow-2xl">
            <CardContent className="p-6 md:p-8">
              <div className="grid gap-5">
                <label className="grid gap-2 text-sm text-white/65">
                  Precio del coche en origen
                  <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
                </label>
                <label className="grid gap-2 text-sm text-white/65">
                  Emisiones CO₂ g/km
                  <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" type="number" value={co2} onChange={(e) => setCo2(Number(e.target.value))} />
                </label>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm text-white/65">
                    Combustible
                    <select className="rounded-2xl border border-white/10 bg-[#151923] px-4 py-3 text-white outline-none" value={fuel} onChange={(e) => setFuel(e.target.value)}>
                      <option value="gasolina">Gasolina</option>
                      <option value="diesel">Diésel</option>
                      <option value="hibrido">Híbrido</option>
                      <option value="electrico">Eléctrico</option>
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm text-white/65">
                    País
                    <select className="rounded-2xl border border-white/10 bg-[#151923] px-4 py-3 text-white outline-none" value={country} onChange={(e) => setCountry(e.target.value)}>
                      <option>Alemania</option>
                      <option>Países Bajos</option>
                      <option>Bélgica</option>
                    </select>
                  </label>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-black/30 p-5">
                <div className="space-y-3 text-sm text-white/60">
                  <Row label="Impuesto matriculación estimado" value={result.matriculationTax} />
                  <Row label="Transporte" value={result.transport} />
                  <Row label="Gestoría + documentación" value={result.gestor} />
                  <Row label="ITV + tasas DGT" value={result.itv + result.dgt} />
                  <Row label="Servicio Nordimp" value={result.serviceFee} />
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-white/70">Total estimado</span>
                  <span className="text-3xl font-semibold">€{result.total.toLocaleString("es-ES")}</span>
                </div>
              </div>

              <Button
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="h-12 rounded-full bg-white px-7 text-black transition duration-300 hover:scale-[1.03] hover:bg-white/90 active:scale-[0.98]"
              >
              Quiero importar este coche <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
              <p className="mt-4 text-center text-xs text-white/35">Estimación orientativa. El cálculo final depende de documentación, emisiones oficiales y estado del vehículo.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-white/40">Ejemplos</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Casos orientativos</h2>
          </div>
          <p className="max-w-md text-white/55">Modelos con demanda real y buen encaje para validar el servicio en fase inicial.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["BMW M340i", "38.000€", "43.450€", "Premium deportivo"],
            ["Audi S5 Sportback", "41.500€", "47.200€", "Gran turismo"],
            ["Golf R", "34.900€", "39.800€", "Compacto pasional"],
          ].map(([model, origin, final, tag]: any) => (
            <Card key={model} className="group rounded-3xl border-white/10 bg-white/[0.04] text-white shadow-none transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:shadow-2xl">
              <div className="h-44 bg-gradient-to-br from-zinc-700 via-zinc-900 to-black" />
              <CardContent className="p-6">
                <p className="text-sm text-white/40">{tag}</p>
                <h3 className="mt-2 text-2xl font-semibold">{model}</h3>
                <div className="mt-5 space-y-3 text-sm text-white/60">
                  <RowText label="Precio Alemania" value={origin} />
                  <RowText label="Coste final estimado" value={final} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <WalletCards className="mb-5 h-8 w-8 text-white/60" />
              <h2 className="text-4xl font-semibold tracking-[-0.04em]">¿Tienes ya un coche visto?</h2>
              <p className="mt-4 max-w-xl text-white/60">Envíanos el enlace del anuncio y te preparamos una estimación inicial con costes, riesgos y pasos siguientes.</p>
            </div>
            <form
  className="grid gap-3"
  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      contact: (form.elements.namedItem("contact") as HTMLInputElement).value,
      carUrl: (form.elements.namedItem("carUrl") as HTMLInputElement).value,
      budget: (form.elements.namedItem("budget") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    await fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    alert("Solicitud enviada correctamente");

    form.reset();
  }}
>
  <input
    name="name"
    className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/35"
    placeholder="Nombre"
  />

  <input
    name="contact"
    className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/35"
    placeholder="Email o teléfono"
  />

  <input
    name="carUrl"
    className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/35"
    placeholder="Enlace del coche que has visto"
  />

  <select
  name="budget" className="rounded-2xl border border-white/10 bg-[#11151d] px-4 py-3 text-white outline-none">
    <option>Presupuesto aproximado</option>
    <option>15.000€ - 25.000€</option>
    <option>25.000€ - 40.000€</option>
    <option>40.000€ - 60.000€</option>
    <option>Más de 60.000€</option>
  </select>

  <textarea
    name="message"
    className="min-h-28 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/35"
    placeholder="Cuéntanos qué coche buscas o qué dudas tienes"
  />

  <Button className="mt-2 h-12 rounded-full bg-white text-black transition duration-300 hover:scale-[1.02] hover:bg-white/90 active:scale-[0.98]">
    Solicitar estudio gratuito
  </Button>

  <p className="text-center text-xs text-white/35">
    Te responderemos con una primera estimación y próximos pasos.
  </p>
</form>
          </div>
        </div>
      </section>

      <a
  href="https://wa.me/679233784"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-white/10 bg-[#11151d]/90 px-5 py-3 text-white shadow-2xl backdrop-blur-xl transition hover:scale-105 hover:bg-[#1a1f2b]"
>
  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500">
    <span className="text-lg">💬</span>
  </div>

  <div className="hidden sm:block">
    <p className="text-sm font-medium leading-none">
      Habla con nosotros
    </p>
    <p className="mt-1 text-xs text-white/50">
      Respuesta rápida
    </p>
  </div>
</a>
    </main>
  );
}

function Row({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span>{label}</span>
      <span className="font-medium text-white">€{value.toLocaleString("es-ES")}</span>
    </div>
  );
}

function RowText({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span>{label}</span>
      <span className="font-medium text-white">{value}</span>
    </div>
  );
}
