import ButtonWithIcon from "@/components/ButtonWithIcon";
import { Settings2, Zap, ZapOff } from "lucide-react";

export default function AppCard({
  image,
  name,
  description,
  status = "connect",
}) {
  const getButtonConfig = () => {
    switch (status) {
      case "connected":
        return {
          text: "Connected",
          className: "bg-green-600 text-white",
          icon: Zap,
        };
      case "disconnected":
        return {
          text: "Disconnected",
          className: "bg-red-600 text-white",
          icon: ZapOff,
        };
      default:
        return {
          text: "Connect",
          className: "bg-blue-600 text-white",
          icon: Zap,
        };
    }
  };

  const { text, className, icon } = getButtonConfig();

  return (
    <div className="col-span-2 row-span-2 bg-white border-2 border-BorderGray rounded-lg p-4">
      <div className="flex items-center justify-between">
        <img src={image} alt={name} className="h-10" />
        <ButtonWithIcon icon={icon} text={text} className={className} />
      </div>

      <h1 className="text-xl font-semibold tracking-tighter mt-3">{name}</h1>
      <p className="text-TextGray text-xs mt-1">{description}</p>

      <div className="flex justify-end mt-4">
        <ButtonWithIcon
          icon={Settings2}
          text="Configure"
          className="bg-white text-gray-400"
        />
      </div>
    </div>
  );
}
