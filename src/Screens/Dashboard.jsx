import Announcement from "../components/Announcement";
import InfoCard from "../components/InfoCard";
import RecentActivity from "../components/RecentActivity";
import StatsCard from "../components/StatsCards";
import UpcomingSchedule from "../components/UpcomingSchedule";

const Dashboard = () => {
  return (
    <>
      <h1 className="font-medium text-2xl text-[#161E54] leading-[42px] mb-4">
        Dashboard
      </h1>
      <div className="flex gap-6 max-lg:flex-col">
        <div className="flex flex-col gap-4 w-2/3 max-lg:w-full">
          <div className="flex max-md:flex-col w-full gap-4">
            <InfoCard
              title="Available Position"
              count="24"
              subtext="4 Urgently needed"
              className="bg-[#FFEFE7]"
              subtextColor="text-[#FF5151]"
            />
            <InfoCard
              title="Job Open"
              count="10"
              subtext="4 Active hiring"
              className="bg-[#E8F0FB]"
              subtextColor="text-[#3786F1]"
            />
            <InfoCard
              title="New Employees"
              count="24"
              subtext="4 Department"
              className="bg-[#FDEBF9]"
              subtextColor="text-[#EE61CF]"
            />
          </div>
          <div className="flex w-full max-md:flex-col gap-4">
            <StatsCard
              title="Total Employees"
              count="216"
              men="120"
              women="96"
              percentage="+2%"
              dataPoints={[10, 20, 15, 30, 25, 35]}
            />
            <StatsCard
              title="Talent Request"
              count="16"
              men="6"
              women="10"
              percentage="+5%"
              dataPoints={[5, 10, 7, 15, 12, 18]}
            />
          </div>
          <Announcement />
        </div>
        <div className="flex flex-col gap-4 w-1/3 max-lg:w-full">
          <RecentActivity />
          <UpcomingSchedule />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
