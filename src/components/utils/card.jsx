const TopCard = ({ title, number, color}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4" style={{ backgroundColor: color}}>
      <p className="opacity-50">{title}</p>
      <div className="details">
        <p className="text-2xl my-1 font-semibold">$ {number}</p>
        <div>
        </div>
      </div>
      <p className="text-sm opacity-50">Since last week <span className="inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700">+13.4%</span></p>
    </div>
  );
}
 
export default TopCard;