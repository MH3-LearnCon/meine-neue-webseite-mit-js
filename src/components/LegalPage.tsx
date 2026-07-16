import type { Rechtstext } from "@/data/rechtstexte";

const LABEL = /^([A-Za-zÄÖÜäöüß][A-Za-zÄÖÜäöüß0-9 .§/-]{0,54}?):\s(.+)$/;

function Zeile({ text }: { text: string }) {
  const m = text.match(LABEL);
  if (m) {
    return (
      <>
        <strong className="font-semibold text-denver-blue">{m[1]}:</strong> {m[2]}
      </>
    );
  }
  return <>{text}</>;
}

function Absatz({ text }: { text: string }) {
  const zeilen = text.split("\n");
  return (
    <p className="text-body text-brand-text">
      {zeilen.map((z, i) => (
        <span key={i}>
          <Zeile text={z} />
          {i < zeilen.length - 1 ? <br /> : null}
        </span>
      ))}
    </p>
  );
}

export default function LegalPage({ doc }: { doc: Rechtstext }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8 animate-fade-in">
      <header className="mb-12 text-center">
        <h1 className="text-h1 font-extrabold text-denver-blue">{doc.titel}</h1>
        <div className="mx-auto mb-4 mt-5 h-[2px] w-[60px] bg-orange" aria-hidden="true" />
        {doc.untertitel ? (
          <p className="text-body text-brand-gray-dark">{doc.untertitel}</p>
        ) : null}
        {doc.stand ? (
          <p className="mt-2 text-sm text-brand-gray-dark">{doc.stand}</p>
        ) : null}
      </header>
      {doc.einleitung?.map((p, i) => (
        <p key={i} className="mb-6 text-body text-brand-text">
          {p}
        </p>
      ))}
      <div className="space-y-8">
        {doc.abschnitte.map((a, i) => (
          <section key={i}>
            {a.titel ? (
              <h2 className="mb-2 text-lg font-semibold text-denver-blue">
                {doc.nummeriert ? `${i + 1}. ` : ""}
                {a.titel}
              </h2>
            ) : null}
            <div className="space-y-3">
              {a.absaetze.map((p, j) => (
                <Absatz key={j} text={p} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
