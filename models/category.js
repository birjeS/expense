import Realm from 'realm';

class Category extends Realm.Object {
  static schema = {
    name: 'Category',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      color: 'string',
      name: 'string',
    },
  };

  static generate(name, color) {
    return {
      _id: new Realm.BSON.ObjectId(),
      color,
      name,
    };
  }
}

export { Category };
