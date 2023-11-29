import mongoose, { Schema } from 'mongoose'

export enum Roles {
  Admin = 'Admin',
  Basic = 'Basic',
}

export type User = {
  id: string
  _id: string
  username: string
  password: string
  role: Roles
}

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 12,
    required: true,
  },
  role: {
    type: String,
    default: Roles.Basic,
    enum: Roles,
    required: true,
  },
})

const user = mongoose.model('user', userSchema)

export default user