import mongoose, { Schema } from "mongoose";

const afaireSchema = new Schema(
  {
    text: String,
    done: Boolean,
  },
  {
    timestamps: true,
  }
);

const Afaire = mongoose.models.Afaire || mongoose.model("Afaire", afaireSchema);

export default Afaire;
