export const getPlainRecurrence = (recurrence) => {
  switch (recurrence) {
    case 'Daily':
      return 'Day';
    case 'Weekly':
      return 'Week';
    case 'Monthly':
      return 'Month';
    case 'Yearly':
      return 'Year';
    default:
      return '';
  }
};
