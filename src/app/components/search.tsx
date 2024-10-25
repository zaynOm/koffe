import { SearchIcon } from "lucide-react";

type SearchProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export function Search({ searchQuery, setSearchQuery }: SearchProps) {
  return (
    <div className="flex justify-center">
      <div className="border-2 rounded-full w-[400px] flex items-center px-4 gap-3">
        <SearchIcon className="text-gray-400" />
        <input
          type="text"
          placeholder="What do you want to drink?"
          className="h-14 flex-1 bg-transparent focus:outline-none text-lg "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
}
