import { format, isThisYear, isToday, isYesterday } from 'date-fns';

import { calculateRange } from './date';

export const filterExpensesInPeriod = (expenses, period, periodIndex) => {
  const { start, end } = calculateRange(period, periodIndex);

  return expenses.filter((expense) => {
    const { date } = expense;
    return date >= start && date <= end;
  });
};

export const groupExpensesByDay = (expenses) => {
  const groupedExpenses = {};

  expenses.sort((a, b) => {
    return b.date.getTime() - a.date.getTime();
  });

  expenses.forEach((expense) => {
    const { date } = expense;
    let key = '';
    if (isToday(date)) {
      key = 'Today';
    } else if (isYesterday(date)) {
      key = 'Yesterday';
    } else if (isThisYear(date)) {
      key = format(date, 'E, d MMM');
    } else {
      key = format(date, 'E, d MMM yyyy');
    }

    if (!groupedExpenses[key]) {
      groupedExpenses[key] = [];
    }

    groupedExpenses[key].push(expense);
  });

  return Object.keys(groupedExpenses).map((key) => ({
    day: key,
    expenses: groupedExpenses[key],
    total: groupedExpenses[key].reduce(
      (acc, expense) => acc + expense.amount,
      0
    ),
  }));
};

export const getGroupedExpenses = (expenses, recurrence) => {
  const filteredExpenses = filterExpensesInPeriod(
    Array.from(expenses),
    recurrence,
    0
  );

  return groupExpensesByDay(filteredExpenses);
};

export const getAverageAmountInPeriod = (total, period) => {
  switch (period) {
    case 'Weekly':
      return total / 7;
    case 'Monthly':
      return total / 30;
    case 'Yearly':
      return total / 365;
    default:
      return total;
  }
};
