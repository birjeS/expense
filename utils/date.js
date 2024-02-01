import { format, addDays, subDays, startOfMonth, endOfMonth, startOfYear, endOfYear } from 'date-fns';

import { Recurrence } from '../types/recurrence';

export const formatDateRange = (start, end, period) => {
  switch (period) {
    case Recurrence.Weekly:
      return format(start, 'd MMM') + ' - ' + format(end, 'd MMM');
    case Recurrence.Monthly:
      return format(start, 'MMMM');
    case Recurrence.Yearly:
      return format(start, 'yyyy');
    default:
      return format(start, 'd MMM') + ' - ' + format(end, 'd MMM');
  }
};

export const calculateRange = (period, periodIndex) => {
  const now = new Date();
  let start;
  let end;

  switch (period) {
    case Recurrence.Daily:
      start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      end = addDays(start, 1);
      break;
    case Recurrence.Weekly:
      const firstDayOfThisWeek = subDays(startOfWeek(now), periodIndex * 7);
      start = startOfWeek(firstDayOfThisWeek);
      end = endOfWeek(firstDayOfThisWeek);
      break;
    case Recurrence.Monthly:
      start = subMonths(startOfMonth(now), periodIndex);
      end = endOfMonth(start);
      break;
    case Recurrence.Yearly:
      start = startOfYear(now);
      end = endOfYear(now);
      break;
  }

  return { start, end };
};
