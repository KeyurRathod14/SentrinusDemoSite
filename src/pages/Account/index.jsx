import CarsonDarrin from "@/assets/avatars/CarsonDarrin.png";
import ButtonWithIcon from "@/components/ButtonWithIcon";
import { Alert, Input } from "antd";
import { Mail, MonitorSmartphone } from "lucide-react";

export default function index() {
  return (
    <>
      <div className="p-4 border-2 border-BorderGray rounded-md">
        <div className="flex items-center gap-4">
          <img src={CarsonDarrin} className="h-20" />
          <div>
            <h1 className="font-medium text-3xl tracking-tight mb-1">
              John Doe
            </h1>
            <h3 className="text-sm">0M9U82WJ62</h3>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <div>
            <h1 className="text-black/50 font-medium text-sm mb-1">
              Full Name
            </h1>
            <Input
              defaultValue="John Doe"
              className="!w-xl !font-inter !py-2"
            />
          </div>
          <div>
            <h1 className="text-black/50 font-medium text-sm mb-1">
              Organization Name
            </h1>
            <Input
              defaultValue="CORS LAB"
              className="!w-xl !font-inter !py-2"
            />
          </div>
        </div>
        <div className="flex items-center gap-3 my-4">
          <div>
            <h1 className="text-black/50 font-medium text-sm mb-1">Email</h1>
            <Input
              defaultValue="johndoe@gmail.com"
              className="!w-sm !font-inter !py-2"
            />
          </div>
          <div>
            <h1 className="text-black/50 font-medium text-sm mb-1">
              Workspace ID
            </h1>
            <Input
              defaultValue="0M9U82WJ62"
              className="!w-sm !font-inter !py-2"
            />
          </div>
          <div>
            <h1 className="text-black/50 font-medium text-sm mb-1">
              Phone Number
            </h1>
            <Input defaultValue="" className="!w-sm !font-inter !py-2" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 border-2 border-BorderGray rounded-t-md mt-4">
        <h1 className="font-semibold tracking-tighter text-lg">
          Change Password
        </h1>
      </div>
      <div className="border-x-2 border-b-2 border-BorderGray p-4">
        <div className="flex items-center gap-3 mb-3">
          <div>
            <h1 className="text-black/50 font-medium text-sm mb-1">
              Old Password
            </h1>
            <Input
              placeholder="Enter your password"
              className="!w-sm !font-inter !py-2"
            />
          </div>
          <div>
            <h1 className="text-black/50 font-medium text-sm mb-1">
              New Password
            </h1>
            <Input
              placeholder="Enter your password"
              className="!w-sm !font-inter !py-2"
            />
          </div>
          <div>
            <h1 className="text-black/50 font-medium text-sm mb-1">
              Confirm Password
            </h1>
            <Input
              placeholder="Enter your password"
              className="!w-sm !font-inter !py-2"
            />
          </div>
        </div>
        <Alert
          message={
            <span className="font-inter text-sm text-TextGray">
              If you registered using Google SSO, you cannot update your
              password directly. Please use the Forgot Password option below to
              set or update your password.
            </span>
          }
          type="info"
          showIcon
          className="!bg-gray-50 !border-transparent text-blue-700"
        />
        <div className=" flex gap-4 mt-4">
          <ButtonWithIcon
            text="Update Password"
            className="bg-blue-600 text-white"
          />
          <ButtonWithIcon
            text="Forgot Password"
            className="bg-white-600 text-blue-600"
          />
        </div>
      </div>

      <div className="p-4 border-2 border-BorderGray rounded-t-md mt-4">
        <h1 className="font-semibold tracking-tighter text-lg">
          Two Factor Authentication
        </h1>
        <p className="text-TextGray text-xs">
          Two-factor authentication adds an additional layer of security to your
          account by requiring more than just a password to sign in
        </p>
      </div>
      <div className="border-x-2 border-b-2 border-BorderGray p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MonitorSmartphone size={35} className="text-blue-600" />
            <div>
              <h1>Authenticator App</h1>
              <p className="text-TextGray text-sm">
                Use an authentication app or browser extension to get two factor
                authentication codes when prompted
              </p>
            </div>
          </div>
          <ButtonWithIcon text="Set up" className="bg-blue-600 text-white" />
        </div>
        <div className="flex items-center justify-between mt-10">
          <div className="flex items-center gap-3">
            <Mail size={35} className="text-blue-600"/>
            <div>
              <h1>Email OTP message</h1>
              <p className="text-TextGray text-sm">
                Get one-time codes sent to your connected email to complete
                authentication requests.
              </p>
            </div>
          </div>
          <ButtonWithIcon text="Edit" className="bg-blue-600 text-white" />
        </div>
      </div>
    </>
  );
}
