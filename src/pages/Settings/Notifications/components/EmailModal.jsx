import ButtonWithIcon from "@/components/ButtonWithIcon";
import { Avatar, Checkbox, message, Modal, Tag } from "antd";
import { X } from "lucide-react";
import { useState } from "react";

export default function EmailModal({ isOpen, onClose, users = [] }) {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  const handleSelect = (key) => {
    setSelectedKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const handleConfirm = () => {
    const selectedUsers = users.filter((user) =>
      selectedKeys.includes(user.key)
    );
    console.log("Selected users:", selectedUsers);
    messageApi.open({
      type: "success",
      content: "Email(s) added for notifications.",
      className: "font-inter",
    });
    setSelectedKeys([]);
    onClose();
  };

  return (
    <>
      {contextHolder}
      <Modal
        open={isOpen}
        onCancel={onClose}
        footer={null}
        className="custom-modal"
        width={600}
        centered
        closable={false}
        title={null}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b-2 border-BorderGray pb-4 mb-3 -mx-6 px-6">
          <h2 className="text-lg font-semibold tracking-tighter">Add Email</h2>
          <X onClick={onClose} className="cursor-pointer" />
        </div>

        <h1 className="font-medium">
          Select users who should receive notification(s)
        </h1>

        {/* User list */}
        <div className="flex flex-col gap-3 mt-3">
          {users.map((user) => (
            <div
              key={user.key}
              className="flex items-center justify-between gap-3 rounded-md my-1"
            >
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={selectedKeys.includes(user.key)}
                  onChange={() => handleSelect(user.key)}
                />
                <Avatar src={user.avatar} size={40}>
                  {user.initials}
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-medium">{user.name}</span>
                  <span className="text-xs text-TextGray">{user.email}</span>
                </div>
              </div>

              <div className="flex gap-2">
                {user.tags.map((tag) => {
                  const colors = {
                    Administrator: "red",
                    Developer: "blue",
                    CEO: "gold",
                    Assistant: "cyan",
                    Intern: "green",
                  };
                  return (
                    <Tag
                      key={tag}
                      bordered={false}
                      color={colors[tag] || "green"}
                      className="rounded-full px-3 py-1 text-xs font-medium !font-inter"
                    >
                      {tag}
                    </Tag>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer button */}
        <div className="flex justify-end mt-6">
          <ButtonWithIcon
            text="Add Email"
            className="bg-blue-600 text-white"
            onClick={handleConfirm}
          />
        </div>
      </Modal>
    </>
  );
}
