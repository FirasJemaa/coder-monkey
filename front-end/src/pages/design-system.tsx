//content
import { Container } from "@/ui/components/container";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/seo";

//design-system
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";

//icon
import { RiUser6Fill } from "react-icons/ri";

export default function DesignSystem() {
    return (
        <>
            <Seo title="Coders Monkeys" description="Description..." />
            <Navigation />

            <Container className="py-10 space-y-5">
                {/* Spinner */}
                <div className="flex items-center gap-4 p-10">
                    <Spinner size="small" />
                    <Spinner />
                    <Spinner size="large" />
                </div>
                {/* Logo with button */}
                <div className="flex items-center gap-4 p-10">
                    <Button isLoading size="small" icon={{ iconTransmit: RiUser6Fill }} iconPosition="left">Accent</Button>
                    <Button isLoading size="small">Accent</Button>
                    <Button isLoading size="small" variant="secondary">Accent</Button>
                    <Button isLoading size="small" variant="outline">Accent</Button>
                    <Button isLoading size="small" variant="disabled" disabled>Accent</Button>
                    <Button isLoading size="small" variant="icon" icon={{ iconTransmit: RiUser6Fill }} />
                </div>
                {/* Button small */}
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
                {/* Button medium */}
                <div className="flex items-center gap-4 p-10">
                    <Button size="medium" icon={{ iconTransmit: RiUser6Fill }}>Accent</Button>
                    <Button size="medium">Accent</Button>
                    <Button size="medium" variant="secondary">Accent</Button>
                    <Button size="medium" variant="outline">Accent</Button>
                    <Button size="medium" variant="disabled" disabled>Accent</Button>
                    <Button size="medium" variant="icon" icon={{ iconTransmit: RiUser6Fill }} />
                </div>
                {/* Button large */}
                <div className="flex items-center gap-4 p-10">
                    <Button size="large" icon={{ iconTransmit: RiUser6Fill }} iconPosition="left">Accent</Button>
                    <Button size="large">Accent</Button>
                    <Button size="large" variant="secondary">Accent</Button>
                    <Button size="large" variant="outline">Accent</Button>
                    <Button size="large" variant="disabled" disabled>Accent</Button>
                    <Button size="large" variant="icon" icon={{ iconTransmit: RiUser6Fill }} />
                </div>

                {/* Logo */}
                <div className="flex items-center gap-4 p-10">
                    <Logo size="very-small" />
                    <Logo size="small" />
                    <Logo />
                    <Logo size="large" />
                </div>

                {/* Logo */}
                <div className="flex items-center gap-4 p-10">
                    <Avatar
                        size="small"
                        src="/assets/images/avatar.png"
                        alt="Avatar" />
                    <Avatar
                        src="/assets/images/avatar2.png"
                        alt="Avatar 2" />
                    <Avatar
                        src="/assets/images/avatar.png"
                        alt="Avatar"
                        size="large"
                    />
                </div>

                {/* Typography */}
                <div className="space-y-5 p-10">
                    <Typography variant="display" component="div">Coders Monkey</Typography>
                    <Typography theme="primary" variant="body-lg" component="h1">Coders Monkey</Typography>
                    <Typography theme="secondary" variant="lead" component="div">Coders Monkey</Typography>
                    <Typography variant="body-sm" component="div">Coders Monkey</Typography>
                    <Typography variant="caption4" weight="medium" component="div">Coders Monkey</Typography>
                </div>
            </Container>
        </>
    )
}