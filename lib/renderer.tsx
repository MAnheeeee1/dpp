type Block = {
  id: string;
  type: "hero" | "text" | "image" | "button";
  props: Record<string, unknown>;
};

function renderer({ layout }: { layout: Block[] }) {}

export default renderer;
