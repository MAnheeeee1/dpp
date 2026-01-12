import Hero from "@/components/blocks/Hero";
import Button from "@/components/blocks/Button";
import TextBlock from "@/components/blocks/TextBlock";
import ImageBlock from "@/components/blocks/ImageBlock";
export type Block =
  | { id: string; type: "hero"; props: { heading: string } }
  | { id: string; type: "text"; props: { text: string } }
  | {
      id: string;
      type: "image";
      props: { imageUrl: string; altText: string; description?: string };
    }
  | {
      id: string;
      type: "button";
      props: { hrefButton?: string; text: string };
    };
function renderer({ layout }: { layout: Block[] }) {
  return (
    <div>
      {layout.map((block) => {
        if (block.type === "hero") {
          return (
            <Hero key={block.id} heading={block.props.heading as string} />
          );
        } else if (block.type === "text") {
          return <TextBlock key={block.id} text={block.props.text} />;
        }
      })}
    </div>
  );
}

export default renderer;
