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
        <button className="text-xs px-2 py-1 bg-green-100 text-green-600 border border-green-600 rounded-sm cursor-pointer">
          Accept
        </button>
        <button className="text-xs px-2 py-1 bg-red-100 text-red-600 border border-red-600 rounded-sm cursor-pointer">
          Reject
        </button>
      </div>
    </div>
  );
}
