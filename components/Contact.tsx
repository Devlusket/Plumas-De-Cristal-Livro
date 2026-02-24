"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

type ContactInfo = (typeof siteConfig)["contact"];

interface ContactProps {
  contact: ContactInfo;
}

const fadeIn = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 }
};

export function Contact({ contact }: ContactProps) {
  return (
    <section className="section-padding" id="contato">
      <div className="container max-w-3xl space-y-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={fadeIn}
          className="space-y-3 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/80">
            Contato
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Fale sobre o livro, eventos e parcerias.
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Use os canais abaixo para falar sobre compras em quantidade,
            parcerias com escolas, lançamentos, sessões de autógrafos ou para
            tirar qualquer dúvida sobre o livro.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        >
          <Card className="bg-white/95">
            <CardContent className="grid gap-5 p-6 md:grid-cols-3">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground/90">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>E-mail</span>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/80">
                    Contato principal
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm font-medium text-foreground/90 underline-offset-4 hover:underline"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground/90">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span>WhatsApp</span>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/80">
                    Atendimento e dúvidas
                  </p>
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-foreground/90 underline-offset-4 hover:underline"
                    aria-label="Abrir conversa de WhatsApp sobre o livro Plumas de Cristal"
                  >
                    Abrir conversa
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground/90">
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  <span>Instagram</span>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/80">
                    Presença digital
                  </p>
                  <a
                    href={contact.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-foreground/90 underline-offset-4 hover:underline"
                    aria-label="Abrir perfil do Instagram da autora"
                  >
                    Ver perfil
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

