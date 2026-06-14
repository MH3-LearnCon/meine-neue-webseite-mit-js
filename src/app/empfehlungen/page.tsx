import type { Metadata } from "next";
import BookRecommendationCard from "@/components/cards/BookRecommendationCard";

export const metadata: Metadata = {
  title: "Buchempfehlungen – Führung, Vertrieb, Strategie | MH3 LearnCon",
  description:
    "Persönliche Buchempfehlungen von Marcus Holzheimer. Jeder Kauf unterstützt das Kinderhospiz Regenbogenland Düsseldorf.",
};

interface BookEntry {
  author: string;
  title: string;
  linkDe?: string;
  linkEn?: string;
}

interface BookCategory {
  name: string;
  books: BookEntry[];
}

const BOOK_CATEGORIES: BookCategory[] = [
  {
    name: "Führung",
    books: [
      {
        author: "Peter F. Drucker",
        title: "The Effective Executive",
        linkDe:
          "https://www.amazon.de/dp/3800646714/ref=nosim?tag=mh3beratung-21",
        linkEn: "https://amzn.to/3Ju7qJc",
      },
      {
        author: "Ken Blanchard",
        title: "Leading at a Higher Level",
        linkDe:
          "https://www.amazon.de/dp/0273736183/ref=nosim?tag=mh3beratung-21",
        linkEn: "https://amzn.to/3HEoqeC",
      },
      {
        author: "Spencer Johnson",
        title: "Die Mäusestrategie für Manager",
        linkDe:
          "https://www.amazon.de/dp/3424202142/ref=nosim?tag=mh3beratung-21",
        linkEn: "https://amzn.to/3XPrcDj",
      },
    ],
  },
  {
    name: "Führung im Projektmanagement",
    books: [
      {
        author: "Tom DeMarco",
        title: "Der Termin",
        linkDe:
          "https://www.amazon.de/dp/3446414398/ref=nosim?tag=mh3beratung-21",
        linkEn: "https://amzn.to/40hiShw",
      },
      {
        author: "Eliyahu M. Goldratt",
        title: "Das Ziel",
        linkDe:
          "https://www.amazon.de/dp/3593398532/ref=nosim?tag=mh3beratung-21",
        linkEn: "https://amzn.to/3DpobBk",
      },
      {
        author: "Gene Kim",
        title: "Projekt Phoenix",
        linkDe:
          "https://www.amazon.de/dp/395875175X/ref=nosim?tag=mh3beratung-21",
        linkEn: "https://amzn.to/3Drwgpf",
      },
      {
        author: "Gene Kim",
        title: "Projekt Unicorn",
        linkDe:
          "https://www.amazon.de/dp/3960091397/ref=nosim?tag=mh3beratung-21",
        linkEn: "https://amzn.to/3YaSa8n",
      },
    ],
  },
  {
    name: "Vertrieb",
    books: [
      {
        author: "James W. Pickens",
        title: "The One Minute Closer",
        linkEn: "https://amzn.to/4kADxq4",
      },
      {
        author: "Steve Gates",
        title:
          "Verhandeln – Das Buch: Ihr Wegweiser zum Verhandlungserfolg",
        linkDe: "https://amzn.to/4dxTRW7",
      },
    ],
  },
  {
    name: "Strategie",
    books: [
      {
        author: "Sun Tsu",
        title: "Die Kunst des Krieges",
        linkDe:
          "https://www.amazon.de/dp/3868205942/ref=nosim?tag=mh3beratung-21",
        linkEn: "https://amzn.to/3jg4vJA",
      },
      {
        author: "H. R. Bachmann / P. Noll",
        title: "Der kleine Machiavelli",
        linkDe:
          "https://www.amazon.de/dp/349231306X/ref=nosim?tag=mh3beratung-21",
      },
    ],
  },
  {
    name: "Effizienz",
    books: [
      {
        author: "Marc-Uwe Kling",
        title: "Das NEINhorn",
        linkDe:
          "https://www.amazon.de/dp/3551518416/ref=nosim?tag=mh3beratung-21",
        linkEn: "https://amzn.to/3XPmi9i",
      },
    ],
  },
  {
    name: "Gadgets",
    books: [
      {
        author: "Learning Resources",
        title: "Time Tracker 2.0",
        linkDe: "https://amzn.to/3QIWMSm",
      },
    ],
  },
];

const SCHEMA_BOOKS = BOOK_CATEGORIES.flatMap(({ books }) => books).filter(
  (book) => book.title !== "Time Tracker 2.0",
);

function getInLanguage(book: BookEntry): string | string[] {
  if (book.linkDe && book.linkEn) return ["de", "en"];
  if (book.linkDe) return "de";
  return "en";
}

const ITEM_LIST_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Buchempfehlungen von Marcus Holzheimer",
  itemListElement: SCHEMA_BOOKS.map((book, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Book",
      name: book.title,
      author: {
        "@type": "Person",
        name: book.author,
      },
      inLanguage: getInLanguage(book),
    },
  })),
};

export default function EmpfehlungenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ITEM_LIST_LD),
        }}
      />
      <div className="animate-fade-in">
        {/* ── Section 1: H1, Lead, Hinweise ─────────────────────────── */}
        <section className="bg-white pt-12 md:pt-16 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-h1 font-extrabold text-brand-text leading-tight">
              Buchempfehlungen
            </h1>

            <p className="text-base leading-relaxed text-brand-text mt-8 md:mt-10">
              Ich werde immer wieder nach Buchempfehlungen zu meinen Themen
              gefragt. Da ich Bücher liebe, habe ich viele gelesen — doch nur
              wenige haben mich nachhaltig beeindruckt. Hier ist meine wachsende
              Liste.
            </p>

            <div className="mt-8 md:mt-10 border-l-2 border-brand-gray-mid bg-white p-4 md:p-5">
              <p className="text-base leading-relaxed text-brand-text">
                <span className="font-semibold">Hinweis zu Affiliate-Links:</span>{" "}
                Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.
                Alle Links auf dieser Seite sind als bezahlte Links gekennzeichnet.
              </p>
            </div>

            <div className="mt-6 border-l-[4px] border-orange bg-white p-4 md:p-5">
              <p className="text-base font-semibold text-brand-text mb-2">
                Wofür die Provisionen verwendet werden
              </p>
              <p className="text-base leading-relaxed text-brand-text">
                Die Provisionen, die ich über die Affiliate-Links erhalte, gehen
                vollständig an das{" "}
                <span className="font-semibold">
                  Kinderhospiz Regenbogenland in Düsseldorf
                </span>
                . Jede Bestellung über einen Link auf dieser Seite unterstützt
                damit eine Einrichtung, die Familien in einer der
                schwierigsten Situationen begleitet.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 2: Bücher nach Kategorien ─────────────────────── */}
        <section className="bg-[#F5F5F5] pt-6 md:pt-8 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {BOOK_CATEGORIES.map((category, categoryIndex) => (
              <div
                key={category.name}
                className={categoryIndex > 0 ? "mt-12 md:mt-16" : undefined}
              >
                <h3
                  className={
                    categoryIndex === 0
                      ? "mb-6 text-xl font-semibold text-denver-blue leading-snug md:text-2xl"
                      : "mb-6 mt-10 text-xl font-semibold text-denver-blue leading-snug md:text-2xl"
                  }
                >
                  {category.name}
                </h3>
                <div className="flex flex-col gap-4 md:gap-6">
                  {category.books.map((book) => (
                    <BookRecommendationCard
                      key={`${category.name}-${book.title}`}
                      author={book.author}
                      title={book.title}
                      linkDe={book.linkDe}
                      linkEn={book.linkEn}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 3: Abschluss ──────────────────────────────────── */}
        <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-base leading-relaxed text-brand-text">
              Diese Liste wächst. Wenn ich ein Buch lese, das mich überzeugt,
              kommt es hier dazu.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
