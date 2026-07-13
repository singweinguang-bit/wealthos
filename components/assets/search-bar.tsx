"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SearchBar() {
  return (
    <div className="relative w-80">
      <Search className="absolute left-3 top-3 h-4 w-4 text-neutral-400" />

      <Input
        placeholder="Search assets..."
        className="pl-10"
      />
    </div>
  );
}