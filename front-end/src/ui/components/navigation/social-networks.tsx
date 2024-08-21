import { Button } from "@/ui/design-system/button/button";
import { footerReseauLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";
import { Ri24HoursFill } from "react-icons/ri";

interface Props {
    theme?: "gray" | "accent" | "secondary";
    className?: string;
}


export const SocialNetworks = ({className, theme = "accent"}:Props) => {
    const icoList = footerReseauLinks.map((socialNetwork) => (
        <Button 
            key={uuidv4()} 
            variant="icon"
            iconTheme={theme}
            icon={{
                iconTransmit: socialNetwork.icon ? socialNetwork.icon : Ri24HoursFill

            }}
            baseUrl={socialNetwork.baseUrl}
            linkType={socialNetwork.type}
        />
    ))
    return(
        <div className={clsx(className, "flex items-center gap-2.5")}>{icoList}</div>
    )
};