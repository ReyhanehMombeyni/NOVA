import { Icons } from "./Icons";

interface LogoProps {
    size?: "sm" | "md" | "lg";
}

export const Logo = ({ size = "sm" }: LogoProps) => {
    const sizes = {
        sm: {
            icon: "w-5 h-5",
            text: "text-base",
            gap: "gap-1",
        },
        md: {
            icon: "w-6 h-6",
            text: "text-lg",
            gap: "gap-1.5",
        },
        lg: {
            icon: "w-10 h-10",
            text: "text-2xl",
            gap: "gap-2",
        },
    };

    const currentSize = sizes[size];

    return (
        <div className={`flex items-center ${currentSize.gap}`}>
            <Icons.logo className={currentSize.icon} />
            <span
                className={`text-blue-500 font-bold font-heading ${currentSize.text}`}
            >
                NOVA
            </span>
        </div>
    );
};