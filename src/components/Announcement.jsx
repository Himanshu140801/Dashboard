import { FaThumbtack, FaEllipsisH, FaChevronDown } from 'react-icons/fa';

const Announcement = () => {
    const announcementData = [
        {
          title: "Outing schedule for every department",
          time: "5 Minutes ago",
        },
        {
          title: "Meeting HR Department",
          time: "Yesterday, 12:30 PM",
        },
        {
          title: "IT Department need two more talents for UX/UI Designer position",
          time: "Yesterday, 09:15 AM",
        },
        // Add more announcements as needed
      ];
  return (
    <div className="p-4 rounded-lg bg-white shadow-md border border-gray-200 w-full h-[320px] flex flex-col">
      {/* Fixed Top Section */}
      <div className="flex items-center justify-between pb-2">
        <h3 className="text-md font-semibold text-gray-800">Announcement</h3>
        <div className="text-xs text-gray-500 flex items-center border py-1 px-2 rounded-lg">
          Today, 13 Sep 2021 <span className="ml-1"><FaChevronDown/></span>
        </div>
      </div>

      {/* Scrollable Middle Section */}
      <div className="overflow-y-auto flex-grow my-2 w-full">
        {announcementData.map((announcement, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 border my-2 p-2 border-gray-200 bg-[#FAFAFA] rounded-lg"
          >
            <div>
              <p className="text-sm font-medium text-gray-800">{announcement.title}</p>
              <p className="text-xs text-gray-500">{announcement.time}</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <FaThumbtack />
              <FaEllipsisH />
            </div>
          </div>
        ))}
      </div>

      {/* Fixed Bottom Section */}
      <div className="border-t border-gray-300 pt-2 text-center">
        <button className="text-red-500 text-sm font-semibold focus:outline-none">
          See All Announcement
        </button>
      </div>
    </div>
  );
};

export default Announcement;
