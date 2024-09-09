// app/api/addProblem/route.ts
import { NextResponse } from 'next/server';
import { firestore } from '../firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';

export async function POST(req: Request) {
  const body = await req.json();
  const { id, title, category, difficulty, link, likes, dislikes, order } = body;

  const newProblem = {
    id,
    title,
    category,
    difficulty,
    link,
    likes,
    dislikes,
    order: Number(order),
  };

  try {
    await setDoc(doc(firestore, 'problems', id), newProblem);
    return NextResponse.json({ message: 'Saved to DB' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save to DB' }, { status: 500 });
  }
}
