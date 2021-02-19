import { connectToDatabase } from '../../util/mongodb'
export default async function handler(req, res) {
  const { db } = await connectToDatabase();
  console.log(db);
  
  let data = db.collection("food").find({}).limit(50).toArray();
  console.log(data);
  
  res.status(200).json(data)
}
