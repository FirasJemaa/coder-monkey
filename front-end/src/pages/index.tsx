
import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design-system/button/button";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";
import { RiAncientGateFill, RiUser6Fill, RiUser6Line } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <Seo title="Coders Monkeys" description="Description..." />
      <div className="flex items-center gap-4 p-10">
        <Spinner size="small" /> 
        <Spinner />
        <Spinner size="large" />   
      </div>

      <div className="flex items-center gap-4 p-10">
        <Button isLoading size="small" icon={{ iconTransmit: RiUser6Fill }} iconPosition="left">Accent</Button>
        <Button isLoading size="small">Accent</Button>
        <Button isLoading size="small" variant="secondary">Accent</Button>
        <Button isLoading size="small" variant="outline">Accent</Button>
        <Button isLoading size="small" variant="disabled" disabled>Accent</Button>
        <Button isLoading size="small" variant="icon" icon={{ iconTransmit: RiUser6Fill }} />
      </div>

      <div className="flex items-center gap-4 p-10">
        <Button size="small" icon={{ iconTransmit: RiUser6Fill }} iconPosition="left">Accent</Button>
        <Button size="small">Accent</Button>
        <Button size="small" variant="secondary">Accent</Button>
        <Button size="small" variant="outline">Accent</Button>
        <Button size="small" variant="disabled" disabled>Accent</Button>
        <Button size="small" variant="icon" icon={{ iconTransmit: RiUser6Fill }} />
        <Button size="small" variant="icon" iconTheme="secondary" icon={{ iconTransmit: RiUser6Fill }} />
        <Button size="small" variant="icon" iconTheme="gray" icon={{ iconTransmit: RiUser6Fill }} />
      </div>

      <div className="flex items-center gap-4 p-10">
        <Button size="medium" icon={{ iconTransmit: RiUser6Fill }}>Accent</Button>
        <Button size="medium">Accent</Button>
        <Button size="medium" variant="secondary">Accent</Button>
        <Button size="medium" variant="outline">Accent</Button>
        <Button size="medium" variant="disabled" disabled>Accent</Button>
        <Button size="medium" variant="icon" icon={{ iconTransmit: RiUser6Fill }} />
      </div>

      <div className="flex items-center gap-4 p-10">
      <Button size="large" icon={{ iconTransmit: RiUser6Fill }} iconPosition="left">Accent</Button>
        <Button size="large">Accent</Button>
        <Button size="large" variant="secondary">Accent</Button>
        <Button size="large" variant="outline">Accent</Button>
        <Button size="large" variant="disabled" disabled>Accent</Button>
        <Button size="large" variant="icon" icon={{ iconTransmit: RiUser6Fill }} />
      </div>
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
