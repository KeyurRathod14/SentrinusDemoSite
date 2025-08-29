import { Alert, Input } from "antd";

export default function index() {
  return (
    <>
      <div className="flex items-center justify-between p-5 border-2 border-BorderGray rounded-t-md">
        <h1 className="font-semibold tracking-tighter text-2xl">Connections</h1>
      </div>

      <div className="border-x-2 border-b-2 border-BorderGray p-5">
        <h1 className="font-semibold text-lg mb-2">Workspace Credentials</h1>
        <Alert
          description={
            <span className="text-yellow-600 font-inter">
              The Workspace ID is a unique identifier for your organization,
              which is utilized by your agents to connect with the dashboard.
              Please share the Workspace ID only with intended parties. This
              credential enables agent software to send connection requests to
              the dashboard.
            </span>
          }
          type="warning"
          showIcon
          closable
        />
        <div className="mt-4">
          <h1 className="font-medium text-sm mb-2">Workspace ID</h1>
          <Input
            defaultValue="0M9U82WJ62"
            readOnly
            className="!w-xs !font-inter"
          />
        </div>
      </div>
    </>
  );
}
