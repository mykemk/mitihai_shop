export function isNotPastDate(date) {
  let currentDate = new Date();
  let submittedDate = new Date(date);
  return submittedDate >= currentDate;
}
