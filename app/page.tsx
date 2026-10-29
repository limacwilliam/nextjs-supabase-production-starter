import { createNote } from './actions';
export default function Home() { return <main><h1>Private notes</h1><form action={createNote}><label>Note <input name="content" required maxLength={500}/></label><button type="submit">Save</button></form></main>; }
