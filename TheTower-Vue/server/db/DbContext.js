import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { CommentSchema } from '../models/Comment';
import { TowerEventSchema } from '../models/TowerEvent';
import { ValueSchema } from '../models/Value'


class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
  TowerEvents = mongoose.model('TowerEvent', TowerEventSchema);
  Comments = mongoose.model('Comment', CommentSchema)
}

export const dbContext = new DbContext()
