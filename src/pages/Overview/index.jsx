import RequestCard from "@/pages/Overview/components/RequestCard";
import { Tag } from "antd";
import { ArrowUpRight, Cable, Camera, Usb } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const chartData = [
  { name: "Mon", alerts: 40 },
  { name: "Tue", alerts: 96 },
  { name: "Wed", alerts: 10 },
  { name: "Thu", alerts: 69 },
  { name: "Fri", alerts: 80 },
  { name: "Sat", alerts: 55 },
  { name: "Sun", alerts: 65 },
];

export default function index() {
  return (
    <div className="grid grid-cols-8 grid-rows-4 gap-2 w-full h-full px-1 overflow-hidden">
      {/* Devices */}
      <div className="col-span-2 row-span-1 bg-white border-2 border-BorderGray rounded-lg p-3">
        <div className="flex items-center justify-between">
          <h1 className="tracking-tighter text-lg font-medium">Devices</h1>
          <Link to="/devices">
            <ArrowUpRight className="cursor-pointer" />
          </Link>
        </div>
        <p className="text-sm font-bold mt-5">
          <span className="text-3xl">14</span> /20
        </p>
        <hr className="border-1 border-BorderGray mt-2" />
        <p className="mt-2 text-gray-400 text-sm">
          <span className="text-green-400">+10%</span> than last month
        </p>
      </div>

      {/* Active Agents */}
      <div className="col-span-2 row-span-1 col-start-3 bg-white border-2 border-BorderGray rounded-lg p-3">
        <div className="flex items-center justify-between">
          <h1 className="tracking-tighter text-lg font-medium">
            Active Agents
          </h1>
          <Link to="/devices">
            <ArrowUpRight className="cursor-pointer" />
          </Link>
        </div>
        <p className="text-sm font-bold mt-5">
          <span className="text-3xl">8</span> /20
        </p>
        <hr className="border-1 border-BorderGray mt-2" />
        <p className="mt-2 text-gray-400 text-sm">
          <span className="text-red-400">-10%</span> than yesterday
        </p>
      </div>

      {/* Common Software */}
      <div className="col-span-2 row-span-1 col-start-1 row-start-2 bg-white border-2 border-BorderGray rounded-lg p-3">
        <div className="flex items-center justify-between">
          <h1 className="tracking-tighter text-lg font-medium">
            Common Software
          </h1>
          <ArrowUpRight />
        </div>
        <p className="text-sm font-bold mt-5">
          <span className="text-3xl">12</span>
        </p>
        <hr className="border-1 border-BorderGray mt-2" />
        <p className="mt-2 text-gray-400 text-sm">
          <span className="text-green-400">+10%</span> than last month
        </p>
      </div>

      {/* Unresolved Alerts */}
      <div className="col-span-2 row-span-1 col-start-3 row-start-2 bg-white border-2 border-BorderGray rounded-lg p-3">
        <div className="flex items-center justify-between">
          <h1 className="tracking-tighter text-lg font-medium">
            Unresolved Alerts
          </h1>
          <Link to="/alerts">
            <ArrowUpRight className="cursor-pointer" />
          </Link>
        </div>
        <p className="text-sm font-bold mt-5">
          <span className="text-3xl">3</span>
        </p>
        <hr className="border-1 border-BorderGray mt-2" />
        <p className="mt-2 text-gray-400 text-sm">
          <span className="text-green-400">+10%</span> than yesterday
        </p>
      </div>

      {/* 🔹 Chart in div 5 */}
      <div className="col-span-4 row-span-2 col-start-5 row-start-1 bg-white border-2 border-BorderGray rounded-lg px-4 pt-3  flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-medium tracking-tighter">Alerts</h2>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-3xl font-bold">120</span>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 text-xs rounded-md">
                +3.4%
              </span>
            </div>
          </div>
          <button className="bg-blue-50 text-blue-600 px-3 py-1 text-sm rounded-lg">
            7 Days
          </button>
        </div>

        {/* Chart */}
        <div className="flex-1 -ml-14 scale-90">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorAlerts" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fill: "#6B7280", fontSize: 12, fontWeight: 500 }} // 👈 label color
              />
              <YAxis
                tick={{ fill: "#6B7280", fontSize: 12, fontWeight: 500 }} // 👈 label color
              />
              <Tooltip />
              <Area
                type="linear"
                dataKey="alerts"
                stroke="#3b82f6"
                fill="url(#colorAlerts)"
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Placeholder 6 */}
      <div className="col-span-4 row-span-2 row-start-3 bg-white border-2 border-BorderGray rounded-lg p-4">
        <div className="flex items-center justify-between">
          <h1 className="tracking-tighter text-lg font-medium">Requests</h1>
          <Link to="/requests">
            <ArrowUpRight className="cursor-pointer" />
          </Link>
        </div>
        <RequestCard
          icon={<Cable strokeWidth={1.5} />}
          type="Connection Request"
          user="Allison Mac"
        />
        <RequestCard
          icon={<Usb strokeWidth={1.5} />}
          type="USB Access Request"
          user="Jasmine Thomas"
        />
        <RequestCard
          icon={<Cable strokeWidth={1.5} />}
          type="Connection Request"
          user="Albert Walters"
        />
        <RequestCard
          icon={<Camera strokeWidth={1.5} />}
          type="Webcam Access Request"
          user="Roy Mathew"
        />
      </div>

      {/* Placeholder 7 */}
      {/* High Resource Usage Agents */}
      <div className="col-span-4 row-span-2 col-start-5 row-start-3 bg-white border-2 border-BorderGray rounded-lg p-4 overflow-hidden">
        <h1 className="tracking-tighter text-lg font-medium mb-4">
          High Resource Usage Agents
        </h1>

        <table className="min-w-full divide-y divide-gray-200 text-xs">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-3 py-2 text-left font-medium text-gray-600">
                USER
              </th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">
                CPU %
              </th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">
                RAM %
              </th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">
                GPU %
              </th>
              <th className="px-3 py-2 text-left font-medium text-gray-600">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[
              {
                user: "Carson Darin",
                cpu: 92,
                ram: 16,
                gpu: 11,
                status: "High CPU",
                color: "red",
              },
              {
                user: "Mike Havard",
                cpu: 43,
                ram: 78,
                gpu: 15,
                status: "High RAM",
                color: "orange",
              },
              {
                user: "Roy Mathew",
                cpu: 22,
                ram: 12,
                gpu: 92,
                status: "High GPU",
                color: "purple",
              },
              {
                user: "James Ross",
                cpu: 81,
                ram: 12,
                gpu: 23,
                status: "High CPU",
                color: "red",
              },
              {
                user: "Louis Scott",
                cpu: 22,
                ram: 12,
                gpu: 69,
                status: "High GPU",
                color: "purple",
              },
            ].map((agent) => (
              <tr key={agent.user}>
                <td className="px-3 py-2.75">{agent.user}</td>
                <td
                  className={`px-3 py-2.75 ${
                    agent.cpu > 80 ? "text-red-400" : ""
                  }`}
                >
                  {agent.cpu}%
                </td>
                <td
                  className={`px-3 py-2.75 ${
                    agent.ram > 70 ? "text-red-400" : ""
                  }`}
                >
                  {agent.ram}%
                </td>
                <td
                  className={`px-3 py-2.75 ${
                    agent.gpu > 70 ? "text-red-400" : ""
                  }`}
                >
                  {agent.gpu}%
                </td>
                <td className="px-3 py-2">
                  <Tag
                    className="!border-0 !rounded-sm font-inter text-xs"
                    color={agent.color}
                  >
                    {agent.status}
                  </Tag>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
