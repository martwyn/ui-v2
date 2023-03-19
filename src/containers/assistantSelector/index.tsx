"use client";

import { useState, useRef } from "react";
import cn from "classnames";
import { useOnClickOutside } from "usehooks-ts";
import useAssistant, { allAssistants, Assistant } from "@/hooks/useAssistant";
import ChevronDownIcon from "@/svgs/chevronDown.svg";
import AssistantIcon from "@/components/assistantIcon";

export default function AssistantSelector() {
	const ref = useRef(null);
	const [dropdownVisible, setDropdownVisible] = useState(false);
	const { assistant, setAssistant } = useAssistant();
	useOnClickOutside(ref, () => {
		setDropdownVisible(false);
	});

	const toggleDropdown = () => {
		setDropdownVisible(!dropdownVisible);
	};
	return (
		<div ref={ref} className="relative">
			<div
				onClick={toggleDropdown}
				className={cn(
					`flex items-center justify-between w-24 h-12 p-1 bg-white rounded-full border hover:border-sharesies-pink cursor-pointer`,
					{
						"border-transparent": !dropdownVisible,
						"border-sharesies-pink": dropdownVisible,
					}
				)}
			>
				<AssistantIcon assistant={assistant} />
				<ChevronDownIcon className="w-8 h-8 text-gray-600" />
			</div>
			{dropdownVisible && (
				<div className="absolute right-0 w-48 mt-1 overflow-hidden bg-white rounded-md shadow-md top-full">
					{Object.entries(allAssistants).map(([key, value]) => {
						return (
							<div
								key={key}
								className="flex px-4 py-2 cursor-pointer hover:bg-gray-200 "
								onClick={() => {
									setAssistant(key as Assistant);
									toggleDropdown();
								}}
							>
								<AssistantIcon assistant={key as Assistant} />
								<p className="self-center ml-4">{value.name}</p>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}
