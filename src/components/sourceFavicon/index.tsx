import Image from "next/image";
interface Props {
	url: string;
	className?: string;
}

export default function SourceFavicon({ url, className }: Props) {
	const defaultProps = {
		className,
		height: 24,
		width: 24,
	};
	if (url.includes("intercom")) {
		return (
			<Image alt="Intercom help" src="/icons/intercom.png" {...defaultProps} />
		);
	} else if (url.includes("sharesies.nz")) {
		return (
			<Image
				alt="Sharesies website"
				src="/icons/sharesies.png"
				{...defaultProps}
			/>
		);
	}
	return (
		<Image
			alt="Sharesies website"
			src="/icons/sharesies.png"
			{...defaultProps}
		/>
	);
}
