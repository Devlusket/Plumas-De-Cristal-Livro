"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

type BookInfo = (typeof siteConfig)["book"];

interface HeroProps {
  book: BookInfo;
}

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export function Hero({ book }: HeroProps) {
  return (
    <section className="section-padding">
      <div className="container grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={fadeIn}
          className="space-y-6"
        >
          <p className="inline-flex items-center rounded-full bg-secondary px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/80">
            Livro infantil para adultos que cuidam
          </p>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold leading-tight text-foreground md:text-5xl">
              {book.title}
            </h1>
            <p className="text-lg font-medium text-foreground/80 md:text-xl">
              {book.subtitle}
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {book.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="w-full sm:w-auto"
                asChild
                aria-label="Comprar Plumas de Cristal na Amazon"
              >
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Comprar na Amazon
                </a>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1"
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                asChild
                aria-label="Comprar Plumas de Cristal na UICLAP"
              >
                <a
                  href={book.uiclapUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Comprar na UICLAP
                </a>
              </Button>
            </motion.div>
          </div>

          <p className="text-xs text-muted-foreground md:text-sm">
            Ideal para pais, mães, responsáveis, educadores e todos que desejam
            oferecer às crianças histórias sensíveis, acolhedoras e cheias de
            significado.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xs md:max-w-sm"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-accent/70 bg-gradient-to-b from-primary/20 via-secondary to-background p-4 shadow-soft">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-primary via-secondary to-accent/60">
              <Image
                src={book.coverImage}
                alt={book.coverImageAlt}
                fill
                priority
                sizes="(max-width: 768px) 320px, 380px"
                className="object-contain"
              />
            </div>
            <div className="pointer-events-none absolute inset-6 rounded-[1.5rem] border border-white/50 mix-blend-soft-light" />
          </div>
          <div className="pointer-events-none absolute -left-4 -top-4 h-20 w-20 rounded-full bg-primary/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-8 right-2 h-24 w-24 rounded-full bg-accent/40 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}

