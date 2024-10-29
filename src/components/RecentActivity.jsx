
const RecentActivity = () => {
  const recentActivityData = [
    {
      timestamp: "10.40 AM, Fri 10 Sept 2021",
      activityTitle: "You Posted a New Job",
      activityDescription: "Kindly check the requirements and terms of work and make sure everything is right.",
      footerText: "Today you makes 12 Activity"
    }
  ];

  return (
    <div className="p-4 rounded-lg bg-[#1C2353] text-white shadow-md w-full">
      <h3 className="text-sm font-semibold mb-2">Recently Activity</h3>
      
      <p className="text-xs text-gray-300">{recentActivityData[0].timestamp}</p>
      
      <h4 className="text-lg font-semibold mt-1">{recentActivityData[0].activityTitle}</h4>
      
      <p className="text-xs text-gray-300 mt-1">
        {recentActivityData[0].activityDescription}
      </p>
      
      <p className="text-xs text-gray-300 mt-4">{recentActivityData[0].footerText}</p>
      
      <button className="mt-4 bg-red-500 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none">
        See All Activity
      </button>
    </div>
  );
};

export default RecentActivity;
