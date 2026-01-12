type Block = {
  id: string;
  type: "hero" | "text" | "image" | "button";
  props: Record<string, unknown>;
};
import Button from "@/components/blocks/Button";
function renderer({ layout }: { layout: Block[] }) {
  return (
    <div>
      {layout.map((block) => {
        return <div key={Date.now()}>Hello</div>;
      })}
    </div>
  );
}

export default renderer;
