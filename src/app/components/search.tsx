import { SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <div className="flex justify-center">
      <div className="border-2 rounded-full w-[400px] flex items-center px-4 gap-3">
        <SearchIcon className="text-gray-400" />
        <input
          type="text"
          placeholder="What do you want to drink?"
          className="h-14 flex-1 bg-transparent focus:outline-none text-lg "
        />
      </div>
    </div>
  );
}
