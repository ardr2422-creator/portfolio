import { Fragment } from "react";

/**
 * Rend les *segments entre astérisques* d'un texte de locale en italique serif.
 * Ex. : "Ils *convertissent*." → « convertissent » passe en Instrument Serif.
 * Permet de garder tout le texte (accent compris) dans les fichiers de locale.
 */
export default function Accent({ text }: { text: string }) {
  const parts = text.split(/\*([^*]+)\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <em key={i} className="accent-em">
            {part}
          </em>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}
