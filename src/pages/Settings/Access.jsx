import ButtonWithIcon from "@/components/ButtonWithIcon";
import { inviteAccess } from "@/dummyData/InviteAccessData";
import { Avatar, Checkbox, Table, Tag } from "antd";
import { Plus, Trash } from "lucide-react";

export default function Access() {
  const columns = [
    {
      title: <Checkbox />, // header checkbox
      dataIndex: "checkbox",
      key: "checkbox",
      render: () => <Checkbox />,
      width: 50,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center gap-2">
          {record.avatar ? (
            <Avatar src={record.avatar} size={34} />
          ) : (
            <Avatar style={{ backgroundColor: "#87d068" }}>
              {record.initials}
            </Avatar>
          )}
          <div className="flex flex-col leading-tight">
            <span className="font-medium">{text}</span>
            <span className="text-xs text-TextGray">{record.email}</span>
          </div>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color, label;
        if (status.toLowerCase() === "pending") {
          color = "bg-red-500";
          label = "Pending";
        } else if (status.toLowerCase() === "accepted") {
          color = "bg-green-600";
          label = "Accepted";
        } else {
          color = "bg-gray-400";
          label = status;
        }

        return (
          <div className="flex items-center gap-2 border rounded-md px-3 py-1 border-gray-300 w-fit">
            <span className={`h-1.5 w-1.5 rounded-full ${color}`}></span>
            <span className="font-medium text-xs">{label}</span>
          </div>
        );
      },
      width: 200,
    },

    {
      title: "Invited By",
      dataIndex: "invitedBy",
      key: "invitedBy",
      render: (text) => <span className="">{text}</span>,
      width: 200,
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
                : tag === "Owner"
                ? "green"
                : "blue";
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
      title: "",
      key: "delete",
      render: () => (
        <Trash
          size={18}
          className="text-TextGray cursor-pointer hover:text-red-700"
        />
      ),
      width: 80,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between p-5 border-2 border-BorderGray rounded-t-md">
        <h1 className="font-semibold tracking-tighter text-2xl">Access</h1>
        <ButtonWithIcon
          icon={Plus}
          text="Add Member"
          className="bg-blue-600 text-white"
        />
      </div>

      <Table
        className="custom-table"
        columns={columns}
        dataSource={inviteAccess}
        rowKey="key"
        pagination={{
          pageSize: 5, // 👈 rows per page
          showSizeChanger: true, // dropdown for rows per page
          pageSizeOptions: ["5", "10", "20"],
        }}
      />
    </>
  );
}
