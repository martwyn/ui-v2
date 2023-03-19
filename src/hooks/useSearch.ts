import { useAtom, atom } from "jotai";
import useAssistant from "./useAssistant";

interface Source {
	url: string;
}

export interface Result {
	answer: string;
	sources: Source[];
}

interface Search {
	loading: boolean;
	query: null | string;
	error: null | string;
	result: null | Result;
}

const searchAtom = atom<Search>({
	loading: false,
	query: null,
	error: null,
	result: null,
});

export default function useSearch() {
	const [search, setSearch] = useAtom(searchAtom);
	const { assistant } = useAssistant();
	const performSearch = async (query: string) => {
		setSearch({
			loading: true,
			query,
			error: null,
			result: null,
		});

		try {
			const response: Result = await fetch(
				`${process.env.NEXT_PUBLIC_API_HOST}/search?query=${query}&assistant=${assistant}`
			).then((r) => r.json());
			setSearch({
				loading: false,
				query,
				error: null,
				result: response,
			});
		} catch (e) {
			setSearch({
				loading: false,
				error: "Something went wrong!",
				query,
				result: null,
			});
		}
	};

	return { ...search, performSearch } as const;
}
