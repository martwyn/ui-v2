"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import cn from "classnames";
import useSearch from "@/hooks/useSearch";
import MagnifyIcon from "@/svgs/magnify.svg";
import GoIcon from "@/svgs/arrowRight.svg";
import SpinnerIcon from "@/svgs/spinner.svg";

export default function Search() {
  const [query, setQuery] = useState("");
  const { loading, performSearch } = useSearch();
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("query") as string;

    await performSearch(query);
  };
  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="flex items-center px-4 bg-white rounded-lg">
          <MagnifyIcon className="flex-shrink-0 w-8 h-8 mr-4 text-gray-400" />
          <input
            className="flex-grow py-4 text-2xl rounded-lg outline-none"
            name="query"
            type="text"
            value={query}
            onChange={inputChangeHandler}
            placeholder="Go on, ask me something"
          />

          {!loading ? (
            <button className="flex-shrink-0">
              <GoIcon
                className={cn("w-8 h-8 text-gray-400", {
                  "hover:text-sharesies-pink": !!query.length,
                  "hover:cursor-not-allowed": !query.length,
                })}
              />
            </button>
          ) : (
            <SpinnerIcon className="flex-shrink-0 w-8 h-8 text-sharesies-pink animate-spin" />
          )}
        </div>
      </form>
    </>
  );
}
