import { Expense } from '../models/expense';
import { Recurrence } from './recurrence';

export const ReportPageProps = {
  page: 0,
  total: 0,
  average: 0,
  expenses: [],
  recurrence: Recurrence.None
};
