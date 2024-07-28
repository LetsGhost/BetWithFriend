import mongoose, {Schema} from "mongoose"

export interface ownerInterface {
    name: string;
    bets: mongoose.Schema.Types.ObjectId
}

const ownerSchema = new Schema<ownerInterface>({
    name: {type: String, required: true},
    bets: {type: mongoose.Schema.Types.ObjectId, ref: 'Bet'}
})

export default mongoose.model<ownerInterface>('Owner', ownerSchema)