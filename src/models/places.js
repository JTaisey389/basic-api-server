'use strict';

class PlacesModel {
  constructor() {
    this.id = 0;
    this.db = [];
  }

  create(obj) {
    let record = {
      id: ++this.id,
      record: obj
    }
    this.db.push(record);
  return record;
  }
  read(id, obj){
    if(id) {
      return obj;
    }
  }
  delete(id) {
    if (id) {
      return null;
    }
  }
}

module.exports = PlacesModel;