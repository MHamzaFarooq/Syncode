"use client";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function SelectCourseBox({ value, setValue, courses }) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="flex justify-between
          bg-[#0F0E10]
          py-[14px] px-4 rounded-xl text-white"
        >
          {value
            ? courses.find((framework) => framework.course_id === value)?.title
            : "Select Course..."}
          <ChevronsUpDown className="opacity-50" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-0 bg-black border-white/10">
        <Command className="bg-black">
          <CommandInput className="" placeholder="Search courses..." />
          <CommandList className="">
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {courses.map((framework, index) => (
                <CommandItem
                  key={index}
                  value={framework.course_id}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {framework.title}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
