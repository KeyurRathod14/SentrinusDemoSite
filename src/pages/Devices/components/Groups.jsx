import ButtonWithIcon from "@/components/ButtonWithIcon";
import { groups } from "@/dummyData/GroupsData";
import { Plus } from "lucide-react";
import GroupCard from "./GroupsCard";

export default function Groups() {
  return (
    <>
      <div className="flex items-center justify-between p-4 border-2 border-BorderGray rounded-t-md">
        <h1 className="font-semibold tracking-tighter text-2xl">Groups</h1>
        <div className="flex justify-end gap-2 w-1/2">
          <input
            type="text"
            placeholder="Search"
            className="w-64 px-3 py-1.5 text-sm border-2 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <ButtonWithIcon
            icon={Plus}
            text="Add New Group"
            className="bg-blue-600 text-white"
          />
        </div>
      </div>

      {/* Grid Layout for Group Cards */}
      <div className="grid grid-cols-6 grid-rows-2">
        {groups.map((group, index) => {
          // 3 cards per row (since col-span-2 in 6 cols = 3 per row)
          const isFirst = index % 3 === 0;
          const isLast = index % 3 === 2;

          return (
            <GroupCard
              key={group.id}
              name={group.name}
              createdBy={group.createdBy}
              users={group.users}
              className={`${isFirst ? "border-x-2" : ""} ${
                isLast ? "border-x-2" : ""
              }`}
            />
          );
        })}
      </div>
    </>
  );
}
