import ButtonWithIcon from "@/components/ButtonWithIcon";
import { Modal, Tag } from "antd";
import { Calendar, ShieldCheck, ShieldX, X } from "lucide-react";

export default function AlertsModal({ isOpen, onClose, onConfirm, alertData }) {
  if (!alertData) return null; // safeguard

  const isResolved = alertData.status === "Resolved";

  return (
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
        <h2 className="text-lg font-semibold tracking-tight">Alert Details</h2>
        <X onClick={onClose} className="cursor-pointer" />
      </div>

      {/* Alert Content */}
      <div className="text-sm space-y-5">
        <div className="flex items-center gap-2">
          <Calendar size={18} />
          <p className="font-medium">{alertData.date}</p>
        </div>

        <div className="grid grid-cols-2 gap-y-2 gap-x-8 text-xs text-TextGray">
          <div>
            <span className="font-medium">OS :</span> {alertData.os}
          </div>
          <div>
            <span className="font-medium">Email :</span> {alertData.email}
          </div>
          <div>
            <span className="font-medium">Logged In :</span>{" "}
            {alertData.loggedIn}
          </div>
          <div>
            <span className="font-medium">Device Name :</span>{" "}
            {alertData.deviceName}
          </div>
          <div>
            <span className="font-medium">Domain :</span> {alertData.domain}
          </div>
          <div>
            <span className="font-medium">Agent Version :</span>{" "}
            {alertData.agentVersion}
          </div>
          <div>
            <span className="font-medium">Public IP :</span>{" "}
            {alertData.publicIP}
          </div>
          <div>
            <span className="font-medium">Private IP :</span>{" "}
            {alertData.privateIP}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-y-3 gap-x-8 text-xs">
          <div>
            <span>Alert :</span> {alertData.alertType}
          </div>
          <div className="flex items-center gap-2">
            <span>Severity :</span>
            <Tag
              color={alertData.severity === "High" ? "red" : "orange"}
              className="px-2 py-1 !font-inter"
            >
              {alertData.severity}
            </Tag>
          </div>
          <div>
            <span>Category :</span> {alertData.alertCategory}
          </div>
          <div className="col-span-2">
            <span>Description :</span> {alertData.alertDescription}
          </div>
          <div>
            <span>Asset :</span> {alertData.asset}
          </div>
          <div className="col-start-1">
            <span>Network :</span> {alertData.network}
          </div>
          <div className="flex items-center gap-2 col-start-1">
            <span>Status :</span>
            <Tag
              color={alertData.status === "Resolved" ? "green" : "red"}
              className="px-2 py-1 !font-inter"
            >
              {alertData.status}
            </Tag>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-end mt-6">
        {isResolved ? (
          <ButtonWithIcon
            icon={ShieldX}
            text="Move to Unresolved"
            className="bg-white text-red-600 border border-red-600"
            onClick={() => onConfirm("Unresolved")}
          />
        ) : (
          <ButtonWithIcon
            icon={ShieldCheck}
            text="Move to Resolved"
            className="bg-blue-600 text-white"
            onClick={() => onConfirm("Resolved")}
          />
        )}
      </div>
    </Modal>
  );
}
