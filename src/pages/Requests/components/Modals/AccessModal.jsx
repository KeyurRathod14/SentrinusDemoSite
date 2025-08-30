import ButtonWithIcon from "@/components/ButtonWithIcon";
import { Modal, message } from "antd";
import { Calendar, ShieldCheck, ShieldX, X } from "lucide-react";

export default function AccessModal({ isOpen, onClose, onConfirm, record }) {
  if (!record) return null; // safeguard

  const [messageApi, contextHolder] = message.useMessage();

  const handleConfirm = (status) => {
    onConfirm(status);

    messageApi.open({
      type: status === "Allowed" ? "success" : "error",
      content:
        status === "Allowed"
          ? "Access request allowed successfully"
          : "Access request denied successfully",
      className: "font-inter",
    });
  };

  return (
    <>
      {contextHolder}
      <Modal
        open={isOpen}
        onCancel={onClose}
        footer={null}
        className="custom-modal"
        width={550}
        centered
        closable={false}
        title={null}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b-2 border-gray-200 pb-3 mb-4 -mx-6 px-6">
          <h2 className="text-lg font-semibold tracking-tight">
            Request Access Details
          </h2>
          <X onClick={onClose} className="cursor-pointer" />
        </div>

        <div className="text-sm space-y-5">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <p className="font-medium">{record.date}</p>
          </div>

          {/* System/User Info */}
          <div className="grid grid-cols-2 gap-y-2 gap-x-8 text-xs text-TextGray">
            <div>
              <span className="font-medium">OS :</span> {record.device}
            </div>
            <div>
              <span className="font-medium">Email :</span> {record.email}
            </div>
            <div>
              <span className="font-medium">Name :</span> {record.name}
            </div>
            <div>
              <span className="font-medium">Device Name :</span>{" "}
              {record.deviceName}
            </div>
            <div>
              <span className="font-medium">Domain :</span> {record.domain}
            </div>
            <div>
              <span className="font-medium">Agent Version :</span> 1.0.0
            </div>
            <div>
              <span className="font-medium">Public IP :</span> {record.publicIP}
            </div>
            <div>
              <span className="font-medium">Private IP :</span>{" "}
              {record.privateIP}
            </div>
          </div>

          {/* Access Info */}
          <div className="mt-8 text-xs space-y-3">
            <div>
              <span>Access required :</span> {record.access}
            </div>
            <div>
              <span>Access Duration :</span> {record.accessDuration}
            </div>
            <div>
              <span>Reason :</span> {record.reason}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 mt-6">
          <ButtonWithIcon
            icon={ShieldCheck}
            text="Allow"
            className="bg-blue-600 text-white"
            onClick={() => handleConfirm("Allowed")}
          />
          <ButtonWithIcon
            icon={ShieldX}
            text="Deny"
            className="bg-white text-red-600"
            onClick={() => handleConfirm("Denied")}
          />
        </div>
      </Modal>
    </>
  );
}
