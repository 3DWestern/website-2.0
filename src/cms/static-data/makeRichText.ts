// Helper to quickly build a simple Lexical rich-text state with one paragraph of text
export function makeRichText(paragraphs: string[]) {
  return {
    root: {
      type: "root",
      children: paragraphs.map((text) => ({
        type: "paragraph",
        children: [
          {
            type: "text",
            text,
            version: 1,
            format: 0,
            detail: 0,
            mode: "normal",
            style: "",
          },
        ],
        direction: "ltr" as const,
        format: "" as const,
        indent: 0,
        version: 1,
      })),
      direction: "ltr" as const,
      format: "" as const,
      indent: 0,
      version: 1,
    },
  };
}
