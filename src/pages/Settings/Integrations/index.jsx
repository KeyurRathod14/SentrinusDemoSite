import Slack from "@/assets/integrations/Slack.png";
import AppCard from "./components/AppCard";

export default function index() {
  return (
    <>
      <div className="flex items-center justify-between p-5 border-2 border-BorderGray rounded-t-md">
        <h1 className="font-semibold tracking-tighter text-2xl">
          Integrations & Connected Apps
        </h1>
      </div>

      <div className="grid grid-cols-6 grid-rows-2 gap-3 border-x-2 border-b-2 border-BorderGray rounded-b-md p-4">
        <AppCard
          image={Slack}
          name="Slack"
          description="Collaborate and communicate with your team in real time using organized channels, direct messages, and integrations."
          status="connect"
        />
        <AppCard
          image={Slack}
          name="Slack"
          description="Collaborate and communicate with your team in real time using organized channels, direct messages, and integrations."
          status="connected"
        />
        <AppCard
          image={Slack}
          name="Slack"
          description="Collaborate and communicate with your team in real time using organized channels, direct messages, and integrations."
          status="disconnected"
        />
      </div>
    </>
  );
}
