import { siteConfig } from "@/config/site";

type BookInfo = (typeof siteConfig)["book"];
type AuthorInfo = (typeof siteConfig)["author"];

interface FooterProps {
  book: BookInfo;
  author: AuthorInfo;
}

export function PageFooter({ book, author }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-white/80">
      <div className="container flex flex-col gap-4 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="font-medium text-foreground/90">
            {book.title} — {author.name}
          </p>
          <p className="text-[0.7rem] uppercase tracking-[0.18em]">
            &copy; {currentYear} Todos os direitos reservados.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-[0.78rem]">
          <a
            href={book.amazonUrl}
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            Comprar na Amazon
          </a>
          <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
          <a
            href={book.uiclapUrl}
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            Comprar na UICLAP
          </a>
        </div>
      </div>
    </footer>
  );
}

