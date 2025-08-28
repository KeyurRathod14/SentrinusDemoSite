import ButtonWithIcon from "@/components/ButtonWithIcon";

export default function index() {
  return (
    <>
      <div className="flex items-center justify-between p-5 border-2 border-BorderGray rounded-t-md">
        <h1 className="font-semibold tracking-tighter text-2xl">Manage</h1>
      </div>

      <div className="border-x-2 border-b-2 border-BorderGray p-5">
        <h1 className="font-semibold text-lg text-blue-600">
          Transfer Ownership
        </h1>
        <p className="text-TextGray text-xs mt-1">
          Transferring ownership will transfer your administrative control over
          to the specified recipient. This action cannot be undone by you.
        </p>
        <div className=" flex gap-4 mt-4">
          <ButtonWithIcon
            text="Transfer Ownership"
            className="bg-blue-600 text-white"
          />
        </div>
      </div>

      <div className="border-x-2 border-b-2 border-BorderGray p-5">
        <h1 className="font-semibold text-lg text-red-600">
          Delete Organization
        </h1>
        <p className="text-TextGray text-xs mt-1">
          Deleting your organization account will remove all of your information
          from our database. This includes your users, agents, and licenses.
          This cannot be undone.
        </p>
        <div className=" flex gap-4 mt-4">
          <ButtonWithIcon
            text="Delete Organization"
            className="bg-red-600 text-white"
          />
        </div>
      </div>
    </>
  );
}
