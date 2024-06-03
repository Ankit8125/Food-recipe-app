import Link from "next/link";

export default function NotFound(){
    return( // using 'shadcn' component : <Skeleton/>
        <div className="w-full min-h-screen">
            <h1>This page can not be found.</h1>
            <Link href={'/'}>Go to home</Link>
        </div>
    )
} 