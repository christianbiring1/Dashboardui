const TopCard = ({ title, number, color}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg card-content" style={{ backgroundColor: color}}>
      <p className="title">{title}</p>
      <div className="details">
        <p className="text-3xl my-1">$ {number}</p>
        <p>graph</p>
      </div>
      <p>Since last week <span className="inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2">+13.4%</span></p>
    </div>
  );
}
 
export default TopCard;