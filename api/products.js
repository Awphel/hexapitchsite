 
import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const products = await db
    .collection("ppeProductListings")
    .find({})
    .sort({ category: -1 })
    .toArray();

  res.json(products);
};
