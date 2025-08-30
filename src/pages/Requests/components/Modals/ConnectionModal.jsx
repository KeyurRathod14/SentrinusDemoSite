// ConnectionModal.jsx
import ButtonWithIcon from "@/components/ButtonWithIcon";
import { Modal } from "antd";
import { Calendar, ShieldCheck, ShieldX, X } from "lucide-react";

export default function ConnectionModal({
  isOpen,
  onClose,
  onConfirm,
  record,
}) {
  if (!record) return null; // safeguard

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
      {/* Header */}
      <div className="flex justify-between items-center border-b-2 border-gray-200 pb-3 mb-4 -mx-6 px-6">
        <h2 className="text-lg font-semibold tracking-tight">
          Request Connection Details
        </h2>
        <X onClick={onClose} className="cursor-pointer" />
      </div>

      <div className="text-sm space-y-5">
        <div className="flex items-center gap-2">
          <Calendar size={18} />
          <p className="font-medium">May 20, 2025 at 3:45 PM</p>
        </div>

        {/* System/User Info */}
        <div className="grid grid-cols-2 gap-y-2 gap-x-8 text-xs text-TextGray">
          <div>
            <span className="font-medium">Name :</span> {record.name}
          </div>
          <div>
            <span className="font-medium">Email :</span> {record.email}
          </div>
          <div>
            <span className="font-medium">OS :</span> {record.details.os}
          </div>
          <div>
            <span className="font-medium">Logged in :</span>{" "}
            {record.details.loggedIn}
          </div>
          <div>
            <span className="font-medium">Device Name :</span>{" "}
            {record.details.deviceName}
          </div>
          <div>
            <span className="font-medium">Domain :</span>{" "}
            {record.details.domain}
          </div>
          <div>
            <span className="font-medium">Manufacturer :</span>{" "}
            {record.details.manufacturer}
          </div>
          <div>
            <span className="font-medium">Agent Version :</span>{" "}
            {record.agentVersion}
          </div>
          <div>
            <span className="font-medium">Public IP :</span>{" "}
            {record.details.publicIP}
          </div>
          <div>
            <span className="font-medium">Private IP :</span>{" "}
            {record.details.privateIP}
          </div>
        </div>

        <h1 className="tracking-tight font-medium mb-2">Hardware Details</h1>
        <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-xs text-black">
          {/* CPU */}
          <div className="flex">
            <span className="font-medium text-TextGray">CPU :</span>
            <div className="ml-10 space-y-1">
              <div>{record.details.hardware.cpu.name}</div>
              <div>
                Manufacturer: {record.details.hardware.cpu.manufacturer}
              </div>
              <div>Speed: {record.details.hardware.cpu.speed}</div>
              <div>Cores: {record.details.hardware.cpu.cores}</div>
            </div>
          </div>

          {/* GPU */}
          <div className="flex">
            <span className="font-medium text-TextGray">GPU :</span>
            <div className="ml-10 space-y-1">
              <div>{record.details.hardware.gpu.name}</div>
              <div>
                Manufacturer: {record.details.hardware.gpu.manufacturer}
              </div>
              <div>Capacity: {record.details.hardware.gpu.capacity}</div>
            </div>
          </div>

          {/* Memory */}
          <div className="flex">
            <span className="font-medium text-TextGray">Memory :</span>
            <div className="ml-5 space-y-1">
              <div>{record.details.hardware.memory.name}</div>
              <div>
                Manufacturer: {record.details.hardware.memory.manufacturer}
              </div>
              <div>Speed: {record.details.hardware.memory.speed}</div>
              <div>Capacity: {record.details.hardware.memory.capacity}</div>
            </div>
          </div>

          {/* Storage */}
          <div className="flex">
            <span className="font-medium text-TextGray">Storage :</span>
            <div className="ml-5 space-y-1">
              <div>{record.details.hardware.storage.name}</div>
              <div>
                Manufacturer: {record.details.hardware.storage.manufacturer}
              </div>
              <div>Capacity: {record.details.hardware.storage.capacity}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-end gap-2 mt-6">
        <ButtonWithIcon
          icon={ShieldCheck}
          text="Accept"
          className="bg-blue-600 text-white"
          onClick={() => onConfirm("Accept")}
        />
        <ButtonWithIcon
          icon={ShieldX}
          text="Reject"
          className="bg-white text-red-600"
          onClick={() => onConfirm("Reject")}
        />
      </div>
    </Modal>
  );
}
