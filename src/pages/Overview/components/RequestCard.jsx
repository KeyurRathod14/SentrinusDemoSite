import { Button } from "antd";

export default function RequestCard({ icon, type, user }) {
  return (
    <div className="flex items-center justify-between mt-5">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 flex items-center justify-center rounded-md bg-blue-100 text-blue-600">
          {icon}
        </div>
        <div>
          <p className="font-medium text-sm">{type}</p>
          <p className="text-gray-400 text-xs">by {user}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          type="primary"
          size="small"
          className="!font-inter !px-2 !text-xs cursor-pointer"
        >
          Accept
        </Button>
        <Button
          danger
          size="small"
          className="!font-inter !px-2 !text-xs cursor-pointer"
        >
          Reject
        </Button>
      </div>
    </div>
  );
}
