import ButtonWithIcon from "@/components/ButtonWithIcon";
import { groups } from "@/dummyData/GroupsData";
import { Plus } from "lucide-react";
import GroupCard from "./GroupsCard";

export default function Groups() {
  return (
    <>
      <div className="flex justify-end gap-2 w-full">
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

      {/* Grid Layout for Group Cards */}
      <div className="grid grid-cols-6 grid-rows-2 gap-2 mt-4">
        {groups.map((group) => {
          return (
            <GroupCard
              key={group.id}
              name={group.name}
              createdBy={group.createdBy}
              users={group.users}
            />
          );
        })}
      </div>
    </>
  );
}
