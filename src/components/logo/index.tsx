import cn from "classnames";
import LogoIcon from "@/svgs/logo.svg";

interface Props {
	className: string;
}

export default function Logo({ className }: Props) {
	return <LogoIcon className={cn("fill-sharesies-pink", className)} />;
}
