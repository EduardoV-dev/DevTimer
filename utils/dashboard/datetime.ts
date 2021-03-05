export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  const format = Intl.DateTimeFormat('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric', 
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
  });
  return format.format(date);
}