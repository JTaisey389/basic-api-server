'use strict';

class ClothesModel {
  constructor(){
    this.id = 0;
    this.db = [];
  }
  create(object){
    let record = {
      id: ++this.id,
      record:object,
    }
    thid.db.push(record);
    return record;
  }
  read(id){
    if(id){
      return this.db.find((record) => record.id === id);
    } else {
      return this.db;
    }
  }
  update(id,obj){
    if(id){
      let recordToBeUpdated = this.db.find((record) => record.id === id);
      let index = this.db.indexOf(recordToBeUpdated);
      this.db[index] = {
        id: id,
        record: obj
     }
    }
  }
  delete(id){
    if(id){
      let record = this.db.find((record) => record.id === id);
      const index = this.db.indexOf(record);
      this.db.splice(index, 1);
    }
  }
}
module.exports = ClothesModel;