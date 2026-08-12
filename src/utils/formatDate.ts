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

export default function formatDate(date: string) {
  let format = new Date(date);
  return `${format.getDate()} ${months[format.getMonth()]} ${format.getFullYear()}`;
}
