
const Skeleton = ({ item }) => {
  return [...Array(item).keys()].map(() => (
    <div className="animate-pulse relative mb-4 before:content-[''] before:absolute before:inset-0">
      <div className="bg-gray-300 h-80"></div>
    </div>
  ));
};
export default Skeleton;
