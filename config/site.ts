import capaImage from "@/app/images/capa.jpg";
import dentroFotoImage from "@/app/images/dentro-foto.png";
import dentroTextoImage from "@/app/images/dentro-texto.png";
import autoraImage from "@/app/images/autora.jpg";

export const siteConfig = {
  book: {
    title: "Plumas de Cristal",
    subtitle: "Contos delicados para corações curiosos.",
    description:
      "Uma coletânea de contos infantis que acolhe, inspira e desperta a imaginação, com mensagens educativas que permanecem para toda a vida.",
    coverImage: capaImage,
    coverImageAlt: "Capa do livro Plumas de Cristal",
    insideImages: [
      {
        src: dentroFotoImage,
        alt: "Página ilustrada do interior do livro Plumas de Cristal"
      },
      {
        src: dentroTextoImage,
        alt: "Página de texto do interior do livro Plumas de Cristal"
      }
    ],
    amazonUrl: "https://www.amazon.com.br/Plumas-Cristal-Primeiros-Contos-Poesias/dp/B0D3CV6TWD/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=YY725H11LB33&dib=eyJ2IjoiMSJ9.JPCADi5fcPnMHr6YlYyZx1L846wenZpLwvloDKRIRHs.iBdZwW2JXJSsfsTpwvaNituBzL2ZCwnuNx16slg-9Oo&dib_tag=se&keywords=plumas+de+cristal+livro&qid=1771966204&sprefix=plumas+de+cristal+livro%2Caps%2C423&sr=8-1",
    uiclapUrl: "https://loja.uiclap.com/titulo/ua55676/"
  },
  author: {
    name: "Lutécia Maria Chaves Soares Machado",
    photo: autoraImage,
    photoAlt: "Foto da autora de Plumas de Cristal",
    shortBio:
      "Escritora apaixonada por histórias que acolhem a infância, transformando afeto, cuidado e valores em palavras delicadas.",
    longBio:
      "Com uma escuta sensível e um olhar atento para o universo infantil, a autora de Plumas de Cristal transforma experiências do cotidiano em contos poéticos, cheios de imaginação e aprendizado. Sua escrita convida adultos e crianças a compartilharem momentos de leitura afetiva, fortalecendo vínculos e despertando conversas importantes."
  },
  contact: {
    email: "luteciassoares@gmail.com",
    whatsapp: "https://wa.me/55033984068620",
    instagram: "https://www.instagram.com/luteciasoares/"
  }
};

export type SiteConfig = typeof siteConfig;

