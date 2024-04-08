const { ObjectId } = require("bson");
const { Schema, model, mongoose } = require("mongoose");
const internal = require("stream");

const CounterSchema = new Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
  });
  
  const Counter = mongoose.model('Counter', CounterSchema);
  
  const UserSchema = new Schema({
    id: { type: Number, unique: true },
    name: { type: String, index: true, require: true, unique: true },
    password: { type: String, require: true },
    file: [{ type: ObjectId, ref: "File" }]
  });
  
  UserSchema.pre('save', function(next) {
    const doc = this;
    Counter.findByIdAndUpdate({ _id: 'userId' }, { $inc: { seq: 1 } }, { new: true, upsert: true }).then(function(counter) {
      doc.id = counter.seq;
      next();
    }).catch(function(error) {
      console.error("Counter error:", error);
      throw error;
    });
  });
  
const User = mongoose.model('User', UserSchema);

module.exports = User;