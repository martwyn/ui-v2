"use client";

import Sources from "@/components/sources";
import useSearch from "@/hooks/useSearch";

export default function Answer() {
	const { result, query } = useSearch();

	if (!result) {
		return null;
	}

	return (
		<div className="w-full px-2 mt-4">
			<p className="mb-2 text-sm text-gray-600 ">{query}: </p>
			<p className="text-lg leading-6">{result.answer}</p>
			<Sources sources={result.sources} />
		</div>
	);
}
