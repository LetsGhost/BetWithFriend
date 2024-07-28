import mongoose, {Schema} from "mongoose"

interface betInterface {
    betText: string;
    options: string[];
    reward: string;
    expiresAt: Date;
    owner: mongoose.Schema.Types.ObjectId
    members: mongoose.Schema.Types.ObjectId[]
    winner: mongoose.Schema.Types.ObjectId
    createdAt: Date;
}

const betSchema = new Schema<betInterface>({
    betText: {type: String, required: true},
    options: {type: [String], required: true},
    reward: {type: String, required: true},
    expiresAt: {type: Date, required: true},
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'Owner'},
    members: {type: [mongoose.Schema.Types.ObjectId], ref: 'Owner'},
    winner: {type: mongoose.Schema.Types.ObjectId, ref: 'Owner'},
    createdAt: {type: Date, required: true}
})

export default mongoose.model<betInterface>('Bet', betSchema)