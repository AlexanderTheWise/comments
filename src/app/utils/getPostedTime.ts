const getPostedTime = (previousDate: Date): string => {
  const seconds = Math.floor(
    (new Date().getTime() - previousDate.getTime()) / 1000
  );

  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;

  if (seconds < minute) {
    return `${seconds < 1 ? 1 : seconds} second${seconds > 1 ? 's' : ''}`;
  }

  if (seconds < hour) {
    const minutes = Math.floor(seconds / minute);

    return `${minutes} minute${minutes > 1 ? 's' : ''}`;
  }

  if (seconds < day) {
    const hours = Math.floor(seconds / hour);

    return `${hours} hour${hour > 1 ? 's' : ''}`;
  }

  if (seconds < month) {
    const days = Math.floor(seconds / day);

    return `${days} day${days > 1 ? 's' : ''}`;
  }

  if (seconds < year) {
    const months = Math.floor(seconds / month);

    return `${months} month${months > 1 ? 's' : ''}`;
  }

  const years = Math.floor(seconds / year);
  const months = Math.floor((seconds % year) / month);

  return `${years} year${years > 1 ? 's' : ''} ${
    months ? `and month${months > 1 ? 's' : ''}` : ''
  }`;
};

export default getPostedTime;
