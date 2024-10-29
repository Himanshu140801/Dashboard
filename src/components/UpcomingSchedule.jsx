import { FaChevronDown, FaEllipsisH } from 'react-icons/fa';

const UpcomingSchedule = () => {
    const scheduleData = [
        {
          title: "Review candidate applications",
          time: "Today - 11.30 AM",
          priority: "Priority",
        },
        {
          title: "Interview with candidates",
          time: "Today - 10.30 AM",
          priority: "Other",
        },
        {
          title: "Short meeting with product designer from IT Department",
          time: "Today - 09.15 AM",
          priority: "Other",
        },
        // Additional schedule items can be added here
      ];
  return (
    <div className="p-4 rounded-lg bg-white shadow-md border border-gray-200 w-full h-[390px] flex flex-col">
      {/* Fixed Top Section */}
      <div className="flex items-center justify-between pb-2">
        <h3 className="text-md font-semibold text-gray-800">Upcoming Schedule</h3>
        <div className="text-xs text-gray-500 flex items-center border py-1 px-2 rounded-lg">
          Today, 13 Sep 2021 <span className="ml-1"><FaChevronDown/></span>
        </div>
      </div>

      {/* Scrollable Middle Section */}
      <div className="overflow-y-auto flex-grow my-2">
        {/* Priority Section */}
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2">Priority</p>
          {scheduleData
            .filter(item => item.priority === "Priority")
            .map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 mb-2 rounded-lg border border-gray-200 bg-gray-50"
              >
                <div>
                  <p className="text-sm font-medium text-gray-800">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.time}</p>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  {/* <FaUserCircle /> */}
                  <FaEllipsisH />
                </div>
              </div>
            ))}
        </div>

        {/* Other Section */}
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2">Other</p>
          {scheduleData
            .filter(item => item.priority === "Other")
            .map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 mb-2 rounded-lg border border-gray-200 bg-gray-50"
              >
                <div>
                  <p className="text-sm font-medium text-gray-800">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.time}</p>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  {/* <FaUserCircle /> */}
                  <FaEllipsisH />
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Fixed Bottom Section */}
      <div className="border-t border-gray-300 pt-2 text-center">
        <button className="text-red-500 text-sm font-semibold focus:outline-none">
          Create a New Schedule
        </button>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
