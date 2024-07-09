
import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";

export default function Home() {
  return (
    <>
      <Seo title="Coders Monkeys" description="Description..." />

      <Button />
      {/*<div className="space-y-5">
        <Typography variant="display" component="div">Coders Monkey</Typography>
        <Typography theme="primary" variant="body-lg" component="h1">Coders Monkey</Typography>
        <Typography theme="secondary" variant="lead" component="div">Coders Monkey</Typography>
        <Typography variant="body-sm" component="div">Coders Monkey</Typography>
        <Typography variant="caption4" weight="medium" component="div">Coders Monkey</Typography>
      </div>*/}
    </>
  );
}
