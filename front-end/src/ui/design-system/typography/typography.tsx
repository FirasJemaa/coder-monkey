import clsx from "clsx";

interface Props {
    variant? : 
        | "display" 
        | "h1" 
        | "h2" 
        | "h3" 
        | "h4" 
        | "h5" 
        | "Lead" 
        | "body-lg" 
        | "body-base" 
        | "body-sm" 
        | "catpion1" 
        | "caption2" 
        | "caption3" 
        | "caption4";
    component?: 
        | "h1" 
        | "h2" 
        | "h3" 
        | "h4" 
        | "h5"
        | "div"
        | "p"
        | "span";
    children: React.ReactNode;
    theme?:"black" | "white" | "primary" | "secondary" ;//| "success" | "danger" | "warning" | "info" | "light" | "dark";
    weight?: "light" | "regular" | "medium" | "bold";
    className?: string;
}

export const Typography = ({
    variant = "h3", 
    children, 
    component : Component = "div",
    theme = "black",
    weight = "regular",
    className,
}: Props) => {
    let variantStyles : string ="";

    switch (variant) {
        case "display":
            variantStyles = "text-red-500";
            break;
        case "h1":
            variantStyles = "text-green-500";
            break;
    }
    return (
        <Component className={clsx(variantStyles, weight ==="medium" && "font-medium", className)}>
            {children}
        </Component>
    )
}