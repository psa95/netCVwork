import mongoose from 'mongoose';

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const UserDetails = new Schema({
    registerID: ObjectId,
    firstName: String,
    lastName: String,
    password: String,
});
