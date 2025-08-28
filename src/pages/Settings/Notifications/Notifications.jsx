import ButtonWithIcon from "@/components/ButtonWithIcon";
import { Checkbox, Input } from "antd";
import { Plus } from "lucide-react";

export default function Notifications() {
  return (
    <>
      <div className="flex items-center justify-between p-5 border-2 border-BorderGray rounded-t-md">
        <h1 className="font-semibold tracking-tighter text-2xl">
          Notifications
        </h1>
      </div>

      <div className="border-x-2 border-b-2 border-BorderGray p-5">
        <h1 className="font-semibold text-lg">Notification Email</h1>
        <p className="text-TextGray text-xs mt-1">
          Sentrinus sends email notifications to keep you informed about
          important security events, even when you're away. Your default
          notification email address is automatically synchronized with your
          organization's owner's email address.
        </p>
        <div className=" flex gap-4 mt-4">
          <Input
            defaultValue="johndoe@gmail.com"
            disabled
            className="!w-xs !font-inter"
          />
          <ButtonWithIcon
            icon={Plus}
            text="Add Email"
            className="bg-blue-600 text-white"
          />
        </div>
      </div>

      <div className="border-x-2 border-b-2 border-BorderGray p-5">
        <h1 className="font-semibold text-lg">Notification Updates</h1>
        <p className="text-TextGray text-xs mt-1">
          From time to time, we'd like to send you emails with important updates
          about your agent machines. You can choose which of these updates you'd
          like to receive
        </p>
        <div className="grid grid-cols-2 gap-4 my-4">
          <Checkbox className="!font-inter">
            Feature access request by agent user
          </Checkbox>
          <Checkbox className="!font-inter">Agent connection request</Checkbox>
          <Checkbox className="!font-inter">Support messages</Checkbox>
          <Checkbox className="!font-inter">
            Platform changelog and product updates
          </Checkbox>
        </div>
        <ButtonWithIcon
          // icon={Plus}
          text="Save"
          className="bg-blue-600 text-white"
        />
      </div>
    </>
  );
}
