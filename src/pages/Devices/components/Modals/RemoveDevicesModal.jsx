import ButtonWithIcon from "@/components/ButtonWithIcon";
import { Alert, Avatar, Modal } from "antd";
import { Trash, X } from "lucide-react";

export default function RemoveDevicesModal({
  isOpen,
  onClose,
  onConfirm,
  selectedUsers,
}) {
  return (
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
      {/* Custom header */}
      <div className="flex justify-between items-center border-b-2 border-BorderGray pb-4 mb-3 -mx-6 px-6">
        <h2 className="text-lg font-semibold tracking-tighter">
          Remove Devices
        </h2>
        <X onClick={onClose} className="cursor-pointer" />
      </div>

      <Alert
        description={
          <span className="text-yellow-600 font-inter">
            This will remove the agent(s) from your dashboard, disconnect them
            from the workspace, and log them out from their software.
          </span>
        }
        type="warning"
        showIcon
        closable
      />

      {selectedUsers.length > 0 ? (
        <div className="flex flex-col gap-3 mt-3">
          {selectedUsers.map((user) => (
            <div
              key={user.key}
              className="flex items-center gap-3 rounded-md my-1"
            >
              <Avatar src={user.avatar} size={40}>
                {user.initials}
              </Avatar>
              <div className="flex flex-col">
                <span className="font-medium">{user.name}</span>
                <span className="text-xs text-TextGray">{user.email}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-TextGray mt-3 text-center">No users selected.</p>
      )}

      {/* Custom footer */}
      <div className="flex justify-end gap-3 mt-4">
        <ButtonWithIcon
          icon={Trash}
          text="Remove Devices"
          className="bg-white text-red-600"
          onClick={onConfirm}
        />
      </div>
    </Modal>
  );
}
