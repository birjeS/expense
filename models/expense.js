import Realm from 'realm';
import { Recurrence } from '../types/recurrence';
import { Category } from './category';

class Expense extends Realm.Object {
  static schema = {
    name: 'Expense',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      amount: 'int',
      recurrence: 'string',
      date: 'date',
      note: 'string',
      category: 'Category?',
    },
  };

  static generate(amount, recurrence, date, note, category) {
    return {
      _id: new Realm.BSON.ObjectId(),
      amount,
      recurrence: recurrence.toString(),
      date,
      note,
      category,
    };
  }
}

export { Expense };
