import { connectToDatabase } from '../../util/mongodb'
export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  
  let data = await db.collection("food").find({}).limit(50).toArray();
  
  res.status(200).json(data)
}
