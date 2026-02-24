import { Hero } from "@/components/Hero";
import { AboutBook } from "@/components/AboutBook";
import { InsideBook } from "@/components/InsideBook";
import { Author } from "@/components/Author";
import { Contact } from "@/components/Contact";
import { PageFooter } from "@/components/Footer";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-secondary/60 via-background to-secondary/40">
      <Hero book={siteConfig.book} />
      <AboutBook />
      <InsideBook book={siteConfig.book} />
      <Author author={siteConfig.author} />
      <Contact contact={siteConfig.contact} />
      <PageFooter book={siteConfig.book} author={siteConfig.author} />
    </main>
  );
}

