
const InfoCard = ({ title, count, subtext, className, subtextColor = 'text-black' }) => {
  return (
    <div className={`p-4 rounded-lg ${className} text-left w-full`}>
      <h3 className="text-sm font-semibold text-black">{title}</h3>
      <p className="text-3xl font-bold text-black">{count}</p>
      <p className={`text-sm mt-1 ${subtextColor}`}>{subtext}</p>
    </div>
  );
};

export default InfoCard;
