import { iconProps } from "@/types/iconProps";
import clsx from "clsx";
import { Spinner } from "../spinner/spinner";
import { LinkType, LinkTypes } from "@/lib/link-type";
import Link from "next/link";

interface Props {
    size?: "small" | "medium" | "large";
    variant?: "accent" | "secondary" | "outline" | "disabled" | "icon";
    icon?: iconProps;
    iconTheme?: "accent" | "secondary" | "gray";
    iconPosition?: "left" | "right";
    disabled?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
    baseUrl?: string;
    linkType?: LinkType;
    action?: Function;
}

export const Button = ({
    size = "medium",
    variant = "accent",
    icon,
    iconTheme = "accent",
    iconPosition = "right",
    disabled,
    isLoading,
    children,
    baseUrl,
    linkType = "internal",
    action = () => { },
}: Props) => {
    let variantStyles: string = "", sizeStyles: string = "", iconSize: number = 0;

    switch (variant) {
        case "accent": //Default
            variantStyles = "bg-primary hover:bg-primary-400 text-white rounded";
            break;
        case "secondary":
            variantStyles = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
            break;
        case "outline":
            variantStyles = "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded";
            break;
        case "disabled":
            variantStyles = "bg-gray-400 border border-gray-500 text-gray-600 rounded cusror-not-allowed";
            break;
        case "icon":
            if (iconTheme === "accent") {//Default
                variantStyles = "bg-primary hover:bg-primary-400 text-white rounded-full";
            } else if (iconTheme === "secondary") {
                variantStyles = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full";
            } else {
                variantStyles = "bg-gray-800 hover:bg-gray-700 text-white rounded-full";
            }

            break;
        default:
    }

    switch (size) {
        case "small":
            sizeStyles = `text-caption3 font-medium ${variant === "icon" ? "flex items-center justify-center w-[40px] h-[40px]" : "px-[14px] py-[12px]"
                }`;
            iconSize = 18;
            break;
        case "medium": //Default
            sizeStyles = `text-caption2 font-medium ${variant === "icon" ? "flex items-center justify-center w-[50px] h-[50px]" : "px-[18px] py-[15px]"
                }`;
            iconSize = 20;
            break;
        case "large":
            sizeStyles = `text-caption1 font-medium ${variant === "icon" ? "flex items-center justify-center w-[60px] h-[60px]" : "px-[22px] py-[18px]"
                }`;
            iconSize = 24;
            break;
        default:
    }

    const ButtonContent = (
        <>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    {variant === "accent" || variant === "icon" ? <Spinner size="small" variant="white" /> : <Spinner size="small" />}
                </div>
            )}
            <div className={clsx(isLoading && "invisible")}>
                {icon && variant === "icon" ? (<icon.iconTransmit size={iconSize} />
                ) : (
                    <div className={clsx(icon && "flex items-center gap-1")}>
                        {icon && iconPosition === "left" && (
                            <icon.iconTransmit size={iconSize} />
                        )}
                        {children}
                        {icon && iconPosition === "right" && (
                            <icon.iconTransmit size={iconSize} />
                        )}
                    </div>
                )}
            </div>
        </>
    )
    const handleClicked = () => {
        if (action) {
            action();
        }
    }
    const buttonElement = (
        <button
            type="button"
            className={clsx(variantStyles, sizeStyles, iconSize, isLoading && "cursor-wait", "relative animate")}
            onClick={handleClicked}
            disabled={disabled}
        >
            {ButtonContent}
        </button>
    )

    if (baseUrl) {
        if (linkType === LinkTypes.EXTERNAL) {
            return (
                <a href={baseUrl} target="_blank" >{buttonElement}</a>
            )
        }else {
            return (
                <Link href={baseUrl} >{buttonElement}</Link>
            )
        }
    }

    return buttonElement;
};