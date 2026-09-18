import { useEffect, useState } from "react";

const TYPE_MS = 70;
const DELETE_MS = 30;
const HOLD_MS = 1700;

export default function useTypewriter(words, enabled = true) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!enabled || words.length === 0) return undefined;

    const word = words[index % words.length];

    if (!deleting && text === word) {
      const hold = setTimeout(() => setDeleting(true), HOLD_MS);
      return () => clearTimeout(hold);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return undefined;
    }

    const step = setTimeout(
      () =>
        setText(
          deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
        ),
      deleting ? DELETE_MS : TYPE_MS
    );
    return () => clearTimeout(step);
  }, [text, deleting, index, words, enabled]);

  return enabled ? text : words[0] ?? "";
}
