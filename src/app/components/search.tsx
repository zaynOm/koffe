import { SearchIcon } from "lucide-react";
import { useRef } from "react";

type SearchProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export function Search({ searchQuery, setSearchQuery }: SearchProps) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="flex justify-center pt-4" ref={ref}>
      <div className="border-2 rounded-full w-[400px] flex items-center px-4 gap-3">
        <SearchIcon className="text-gray-400" />
        <input
          type="text"
          placeholder="What do you want to drink?"
          className="h-14 flex-1 bg-transparent focus:outline-none text-lg "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => ref.current?.scrollIntoView({ behavior: "smooth" })}
        />
      </div>
    </div>
  );
}
