import { Container } from "@/ui/components/container"
import { Button } from "@/ui/design-system/button/button"
import { Logo } from "@/ui/design-system/logo/logo"
import { Typography } from "@/ui/design-system/typography/typography"

interface Props { }

export const Navigation = ({ }: Props) => {
    return (
        <div className="border-b-2 border-gray-400">
            <Container className="flex py-1.5 items-center justify-between gap-7">
                <div className="flex items-center gap-2.5">
                    <Logo size="small" />
                    <div  className="flex flex-col ">
                        <div className="text-gray font-extrabold text-[24px]">
                            Coders Monkeys
                        </div>
                        <Typography variant="caption4" theme="gray" component="span">Trouve de l'inspiration & reçois des feedbacks !</Typography>
                    </div>
                </div>
                <div className="flex items-center gap-7">
                    <Typography variant="caption4" component="div" className="flex items-center gap-7">
                        <span>Projets</span>
                        <span>Projets</span>
                        <span>Projets</span>
                    </Typography>
                    <div className="flex items-center gap-2">
                        <Button size="small" >Connexion</Button>
                        <Button size="small" variant="secondary">Rejoindre</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}