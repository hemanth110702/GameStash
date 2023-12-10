const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const ReleaseDate = ({ release }) => {
  const date = new Date(release);
  const month = months[date.getMonth() - 1];
  const year = date.getFullYear();
  return <div>{month} {year}</div>;
};

export default ReleaseDate;
