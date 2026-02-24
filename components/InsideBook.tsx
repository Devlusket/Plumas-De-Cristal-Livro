"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const fadeIn = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

type BookInfo = (typeof siteConfig)["book"];

interface InsideBookProps {
  book: BookInfo;
}

export function InsideBook({ book }: InsideBookProps) {
  return (
    <section className="section-padding">
      <div className="container grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={fadeIn}
          className="space-y-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/80">
            Interior do livro
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Uma experiência de leitura calma, bonita e acolhedora.
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Pensado para ser lido com crianças em momentos de presença, o
            interior de Plumas de Cristal privilegia respiros, espaços em
            branco e uma diagramação confortável aos olhos. Cada página convida
            à pausa, à escuta e à conversa.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground md:text-base">
            <li>• Parágrafos bem espaçados e fonte de alta legibilidade.</li>
            <li>• Páginas arejadas, sem excesso de informação visual.</li>
            <li>• Ritmo de leitura que respeita o tempo da criança.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="relative overflow-hidden rounded-3xl border border-accent/70 bg-white/80 p-4 shadow-soft">
            <div className="grid gap-3 sm:grid-cols-2">
              {book.insideImages?.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-secondary/60"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 45vw, 260px"
                    className="object-contain"
                  />
                  <div className="pointer-events-none absolute inset-3 rounded-xl border border-white/40 mix-blend-soft-light" />
                </div>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 left-0 h-24 w-24 rounded-full bg-accent/40 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}

