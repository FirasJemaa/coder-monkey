import { Container } from "@/ui/components/container"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"
import { footerLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import { ActiveLink } from "./active-link";
import { FooterLinks } from "@/types/app-links";
import { LinkTypes } from "@/lib/link-type";
import { SocialNetworks } from "./social-networks";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerNavigationList = footerLinks.map((colonneLinks) => (
        <FooterLink key={uuidv4()} data={colonneLinks}/>
    ))
    return (
        <div className="bg-gray">
            <Container className="flex justify-between pt-16">
                <div className="flex flex-col items-center gap-1">
                    <Typography variant="caption1" theme="white" weight="medium">Formations gratuites</Typography>
                    <Typography variant="caption3" theme="gray" weight="medium">Abonne-toi à la chaine</Typography>
                    <a href="" target="_blank" className="text-white">
                        <Image src="./assets/svg/ytb.svg" width={229} height={216} alt="youtube" />
                    </a>
                </div>
                <div className="flex gap-7">
                    {footerNavigationList}
                </div>
            </Container>
            <Container className="pt-9 pb-11 space-y-11">
                <hr className="text-gray-800 " />
                <div className="flex items-center justify-between">
                    <Typography variant="caption4" theme="gray">
                        {`Copyright © ${currentYear} | Propulsed by `}
                        <a href="https://firasjemaa.github.io/portfolio/" className="underline" target="_blank">
                            Firas Jemaa
                        </a>
                        {` - SA`}
                    </Typography>
                    <div className=""><SocialNetworks theme="gray"/></div>
                </div>
            </Container>
        </div>
    )
};


interface footerLinkProps {
    data: FooterLinks;
}
const FooterLink = ({data} : footerLinkProps) => {
    const LinkList = data.links.map((link) => (
        <div key={uuidv4()}>
            {link.type === LinkTypes.INTERNAL && (
                <ActiveLink href={link.baseUrl} >{link.label}</ActiveLink>
            )}
                
            {link.type === LinkTypes.EXTERNAL && (
                <a key={uuidv4()} href={link.baseUrl} target="_blank">{link.label}</a>
            )}
        </div>
    ));
    return (
        <div className="min-w-[190px]">
            <Typography theme="white" variant="caption2" weight="medium" className="pb-5">
                {data.title}
            </Typography>
            <Typography theme="gray" variant="caption3" className="space-y-4">
                {LinkList}
            </Typography>
        </div>
    )
}