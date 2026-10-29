'use server';
import { z } from 'zod';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
const Note = z.object({content:z.string().trim().min(1).max(500)});
export async function createNote(formData: FormData) { const parsed=Note.safeParse({content:formData.get('content')}); if(!parsed.success) throw new Error('Invalid note'); const store=await cookies(); const client=createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,{cookies:{getAll:()=>store.getAll(),setAll:()=>{}}}); const {data:{user}}=await client.auth.getUser(); if(!user) throw new Error('Unauthorized'); const {error}=await client.from('notes').insert({content:parsed.data.content,user_id:user.id}); if(error) throw new Error('Could not save note'); }
