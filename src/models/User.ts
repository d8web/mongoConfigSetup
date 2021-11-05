import { model, connection, Schema } from 'mongoose';

type UserType = {
    email: string;
    age: number;
    interests: [String],
    name: { 
        firstName: string,
        lastName: string
    }  
}

const schema = new Schema<UserType>({
    email: { type: String, required: true },
    age: Number,
    interests: [String],
    name: { 
        firstName: { type: String, required: true },
        lastName: String
    }
});

const modelName: string = 'User';

export default (connection && connection.models[modelName]) ?
    connection.models[modelName]
:
    model<UserType>(modelName, schema)
;