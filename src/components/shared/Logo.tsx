import { Icons } from "./Icons";

export const Logo= () => {
    return(
        <div className="flex gap-1 items-center">
            <Icons.logo />
            <span className="text-blue-500 font-bold font-heading">NOVA</span>
        </div>
    );
}