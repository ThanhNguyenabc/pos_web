import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

type UserDocument = HydratedDocument<User>;

@Schema({ collection: 'users' })
class User {
  name: string;
  email: string;
  password: string;
}

const UserSchema = SchemaFactory.createForClass(User);

export { User, UserDocument, UserSchema };
