"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const container = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, duration: 0.6, ease: "easeOut" }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function AboutBook() {
  return (
    <section className="section-padding">
      <div className="container space-y-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="max-w-2xl space-y-3"
        >
          <motion.p
            variants={item}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/80"
          >
            Sobre o livro
          </motion.p>
          <motion.h2
            variants={item}
            className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
          >
            Contos que acolhem e despertam conversas importantes.
          </motion.h2>
          <motion.p
            variants={item}
            className="text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            Plumas de Cristal reúne contos infantis delicados, criados para
            aproximar adultos e crianças em momentos de leitura cheia de
            afeto. Cada história traz mensagens educativas, linguagem acessível
            e temas que favorecem o diálogo em família e na escola.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="grid gap-5 md:grid-cols-3"
        >
          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle>Coletânea de contos</CardTitle>
              </CardHeader>
              <CardContent>
                Histórias independentes que podem ser lidas em momentos curtos
                do dia, perfeitas para a rotina corrida de pais e responsáveis,
                sem perder profundidade e sensibilidade.
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle>Mensagens educativas</CardTitle>
              </CardHeader>
              <CardContent>
                Temas como empatia, respeito, cuidado com o outro, autoestima e
                identificação de emoções são trabalhados com sutileza, sem
                discursos prontos ou tom moralista.
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle>Imaginação e fantasia</CardTitle>
              </CardHeader>
              <CardContent>
                Elementos fantásticos se misturam ao cotidiano das crianças,
                estimulando a criatividade, o encantamento e a curiosidade
                saudável sobre o mundo.
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

