import { Result } from "@/hooks/useSearch";
import { useState } from "react";
import Modal from "../modal";
import SourceFavicon from "@/components/sourceFavicon";
import ExternalLinkIcon from "@/svgs/externalLink.svg";

interface Props {
	sources: Result["sources"];
}

export default function Sources({ sources }: Props) {
	const [modalOpen, setModalOpen] = useState(false);
	const toggleModalOpen = () => {
		setModalOpen(!modalOpen);
	};

	if (!sources.length) {
		return null;
	}

	return (
		<>
			<p
				className="mt-2 text-xs text-gray-500 cursor-pointer hover:text-sharesies-pink"
				onClick={toggleModalOpen}
			>
				Where did this answer come from?
			</p>
			{modalOpen && (
				<Modal onClose={toggleModalOpen} className="max-w-md">
					<h2 className="mb-2 text-xl">Where did this answer come from?</h2>
					<p className="mb-4 text-sm text-gray-600">
						The answer to your question came from the following pages:
					</p>
					{sources.map((s, i) => {
						return (
							<div key={i} className="flex items-center">
								<SourceFavicon url={s.url} className="flex-shrink-0 mr-1 " />
								<div className="flex-grow overflow-hidden">
									<a href={s.url} className="inline-block ml-2" target="_blank">
										{s.url}
									</a>
								</div>
								<ExternalLinkIcon className="flex-shrink-0 w-4 h-4 ml-2" />
							</div>
						);
					})}
				</Modal>
			)}
		</>
	);
}
