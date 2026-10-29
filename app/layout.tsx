import type { Metadata } from 'next';
export const metadata: Metadata = {title:'Production Starter',description:'Secure Next.js starter'};
export default function Layout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
