import { Avatar } from "antd";
import { Pencil, Trash } from "lucide-react";

export default function GroupCard({ name, createdBy, users, className }) {
  return (
    <div
      className={`col-span-2 row-span-2 bg-white border-b-2 border-BorderGray p-4 cursor-pointer ${className}`}
    >
      <div className="flex items-center justify-between">
        <h1 className="font-medium text-xl tracking-tighter">{name}</h1>
        <div className="flex gap-2">
          <Pencil
            size={18}
            className="text-TextGray cursor-pointer hover:text-blue-600"
          />
          <Trash
            size={18}
            className="text-TextGray cursor-pointer hover:text-red-600"
          />
        </div>
      </div>
      <p className="text-sm text-TextGray">by {createdBy}</p>

      <div className="mt-10">
        <Avatar.Group max={{ count: 3 }}>
          {users.map((user, index) => (
            <Avatar key={index} src={user.avatar} />
          ))}
        </Avatar.Group>
      </div>
    </div>
  );
}
