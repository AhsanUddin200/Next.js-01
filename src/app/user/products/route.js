import mongoose from 'mongoose';
import { connectionStr } from '@/app/lib/database';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await mongoose.connect(connectionStr, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB Atlas');
    return NextResponse.json({ result: true });
  } catch (error) {
    console.error('MongoDB connection error:', error);
    return NextResponse.json({ result: false });
  }
}
