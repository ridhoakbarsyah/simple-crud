"use client";

import {BiSearch} from "react-icons/bi"
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {

  const searchParams = useSearchParams();

  const pathname = usePathname();

  const {replace} = useRouter();
  
  const handleSearch = useDebouncedCallback((term: string) => {
    // console.log(term);
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if(term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className="relative flex flex-1">
      <input type="text" className="w-full border border-gray-500 py-2 pl-10 text-sm outline-2 rounded-sm" placeholder="Search..."
      onChange={(e) => handleSearch(e.target.value)}
      defaultValue={searchParams.get("query")?.toString()}
      />
      <BiSearch className="absolute top-3 left-3 text-gray-500"/>
    </div>
  )
}

export default Search
