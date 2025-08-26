import { groups } from "@/dummyData/GroupsData";
import { Avatar, Checkbox, Table, Tag } from "antd";
import { Pencil, Plus, Trash } from "lucide-react";
import ButtonWithIcon from "../ButtonWithIcon";

const { Group: AvatarGroup } = Avatar;

export default function GroupsTable() {
  const columns = [
    {
      title: <Checkbox />,
      dataIndex: "checkbox",
      key: "checkbox",
      render: () => <Checkbox />,
      width: 50,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <div className="flex items-center gap-2">
          <span className="font-medium">{text}</span>
        </div>
      ),
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color =
              tag === "Administrator"
                ? "red"
                : tag === "Development"
                ? "blue"
                : tag === "Sales"
                ? "gold"
                : tag === "Account"
                ? "cyan"
                : "green";
            return (
              <Tag bordered={false} color={color} key={tag}>
                {tag}
              </Tag>
            );
          })}
        </>
      ),
      width: 220,
    },
    {
      title: "Users",
      dataIndex: "users",
      key: "users",
      render: (users) => (
        <AvatarGroup max={{ count: 3 }}>
          {users.map((user, index) => (
            <Avatar
              key={index}
              src={user.avatar}
              alt={user.name}
              style={{ backgroundColor: "#87d068" }}
            >
              {user.name[0]}
            </Avatar>
          ))}
        </AvatarGroup>
      ),
      width: 200,
    },
    {
      title: "",
      key: "edit",
      render: () => (
        <div className="flex items-center gap-3">
          <Pencil
            size={18}
            className="text-TextGray cursor-pointer hover:text-blue-600"
          />
          <Trash
            size={18}
            className="text-TextGray cursor-pointer hover:text-red-600"
          />
        </div>
      ),
      width: 120,
    },
  ];

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
            className="bg-green-100 text-green-600"
          />
        </div>
      </div>

      <Table
        className="custom-table"
        columns={columns}
        dataSource={groups}
        rowKey="key"
        pagination={{
          pageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "20"],
        }}
      />
    </>
  );
}
