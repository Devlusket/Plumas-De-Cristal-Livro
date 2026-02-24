"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

type AuthorInfo = (typeof siteConfig)["author"];

interface AuthorProps {
  author: AuthorInfo;
}

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

export function Author({ author }: AuthorProps) {
  return (
    <section className="section-padding">
      <div className="container grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -26 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto h-64 w-full max-w-sm overflow-hidden rounded-3xl border border-accent/70 bg-gradient-to-br from-primary via-secondary to-accent/70 shadow-soft"
        >
          <Image
            src={author.photo}
            alt={author.photoAlt}
            fill
            sizes="(max-width: 768px) 320px, 420px"
            className="object-contain"
          />
          <div className="absolute inset-4 rounded-3xl border border-white/40 mix-blend-soft-light" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={fadeIn}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/80">
            Sobre a autora
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {author.name}
          </h2>

          <Card className="mt-5 bg-white/90">
            <CardContent className="space-y-3 pt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>{author.shortBio}</p>
              <p>{author.longBio}</p>
              <p>
                Plumas de Cristal nasce desse desejo de oferecer às crianças
                histórias que as ajudem a nomear o que sentem, fortalecer sua
                autoestima e criar lembranças afetivas ao lado de quem cuida
                delas.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

