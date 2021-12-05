export function formatSendHour(rawDate) {
  const formatOptions = {
    hour: 'numeric',
    hour12: true,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    minute: 'numeric',
    timeZone: 'America/Sao_Paulo',
  };
  
  const parsedDate = new Intl.DateTimeFormat('pt-BR', formatOptions).format(rawDate);
  const hour = parsedDate.split(' ')[1] + ' ' + parsedDate.split(' ')[2];
  const date = parsedDate.split(' ')[0];

  return {date, hour};
};