export function formatSendHour(rawDate) {
  const formatOptions = {
    hour: 'numeric',
    hour12: false,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    minute: 'numeric',
    timeZone: 'America/Sao_Paulo',
  };
  
  const parsedDate = new Intl.DateTimeFormat('pt-BR', formatOptions).format(rawDate);
  const time = parsedDate.split(' ')[1];
  const hour = time.split(':')[0];
  const minute = time.split(':')[1];
  const zuluTime = `${hour}${minute}z`;
  const date = parsedDate.split(' ')[0];

  return {date, zuluTime};
};