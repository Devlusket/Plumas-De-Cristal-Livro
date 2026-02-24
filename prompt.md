# 📘 Projeto Landing Page — Plumas de Cristal

Crie uma landing page moderna, elegante e altamente profissional para um livro infantil chamado **"Plumas de Cristal"**, escrito por minha mãe.

⚠️ Importante: Apesar de ser um livro infantil, o público-alvo da landing page são adultos (pais, responsáveis e compradores). Portanto, o design deve ser moderno e sofisticado, não infantilizado.

---

# 🛠 Stack obrigatória
- Use pnpm
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui para componentes
- Framer Motion para animações
- Sem backend
- Mobile-first, mas perfeitamente adaptado para desktop

---

# 🎨 Direção de Design

## 🎨 Paleta de Cores

- Amarelo como cor principal (inspirado na capa do livro)
- Branco como base
- Tons suaves complementares (ex: bege claro ou dourado suave)
- Evitar excesso de cores vibrantes
- Usar sombras suaves
- Bordas arredondadas
- Layout limpo e bem espaçado

---

## ✨ Estilo Visual

- Moderno
- Elegante
- Profissional
- Minimalista com personalidade
- Encantador sem ser infantilizado
- Alta percepção de qualidade

---

## 🔤 Tipografia

- Fonte neutra
- Moderna e elegante
- Alta legibilidade
- Não utilizar fontes caricatas infantis

---

# ✨ Animações

Utilizar **Framer Motion** para criar:

- Fade-in suave ao rolar a página
- Slide-up elegante nas seções
- Microinterações em botões (hover com leve scale)
- Texto principal com efeito de entrada progressiva
- Transições suaves entre seções

As animações devem ser:

- Suaves
- Modernas
- Discretas
- Elegantes
- Não exageradas

---

# 📐 Estrutura da Página

A ordem das seções pode ser reorganizada se necessário para melhor experiência do usuário.

---

## 1️⃣ Hero Section

Deve conter:

- Foto do livro (placeholder)
- Título grande: **Plumas de Cristal**
- Subtítulo encantador
- Pequena descrição
- Dois botões:
  - "Comprar na Amazon"
  - "Comprar na UICLAP"
- Layout elegante (split layout ou centralizado)
- Animação suave de entrada
- Botões com microinterações

---

## 2️⃣ Sobre o Livro

- Descrição detalhada
- Destaque para:
  - Coletânea de contos infantis
  - Mensagens educativas
  - Imaginação e fantasia
- Pode utilizar Cards do shadcn/ui
- Animação ao entrar na viewport

---

## 3️⃣ Interior do Livro

- Foto placeholder do interior
- Texto explicando a experiência de leitura
- Layout visual equilibrado
- Animação suave de reveal

---

## 4️⃣ Sobre a Autora

- Foto placeholder
- Pequena biografia
- Tom emocional e acolhedor
- Layout moderno utilizando Card do shadcn/ui

---

## 5️⃣ Contato

Adicionar seção específica contendo:

- Email (placeholder configurável)
- WhatsApp (placeholder com link clicável)
- Instagram (opcional, placeholder)
- Ícones elegantes
- Layout limpo e organizado

Os contatos devem ser facilmente editáveis no código (não hardcoded de forma desorganizada).

---

## 6️⃣ Footer

- Nome do livro
- Nome da autora
- Direitos autorais
- Links para Amazon e UICLAP novamente
- Design minimalista e moderno

---

# 📱 Responsividade

- Mobile-first
- Layout fluido
- Nada quebrando em telas menores
- Excelente experiência em desktop
- Uso correto de container e max-width

---

# 🧠 Organização do Projeto

Separar os componentes em:

- components/Hero.tsx
- components/AboutBook.tsx
- components/InsideBook.tsx
- components/Author.tsx
- components/Contact.tsx
- components/Footer.tsx

Requisitos:

- Código limpo e organizado
- Tipagem correta com TypeScript
- Boas práticas de estrutura em Next.js App Router
- Links externos abrindo em nova aba
- Boas práticas de acessibilidade

---

# 🚀 Resultado Esperado

Uma landing page:

- Moderna
- Elegante
- Profissional
- Visualmente encantadora
- Com animações sofisticadas
- Alta percepção de qualidade
- Preparada para conversão (venda do livro)
- Código pronto para rodar após instalação das dependências

---

# 📦 Instruções Finais

Após gerar o código:

- Informar as dependências necessárias
- Explicar rapidamente como rodar o projeto
- Garantir que o projeto funcione corretamente após `pnpm install`