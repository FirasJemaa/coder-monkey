
import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/design-system/typography/typography";

export default function Home() {
  return (
    <>
      <Seo title="Coders Monkeys" description="Description..." />
      <div className="space-y-5">
        <Typography variant="display" component="div">Coders Monkey</Typography>
        <Typography variant="h1" component="div">Coders Monkey</Typography>
        <Typography variant="lead" component="div">Coders Monkey</Typography>
        <Typography variant="body-sm" component="div">Coders Monkey</Typography>
        <Typography variant="caption4" weight="medium" component="div">Coders Monkey</Typography>
      </div>
    </>
  );
}
