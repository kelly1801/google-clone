
import Link from "next/link";
import { useRouter } from "next/router";
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/solid'
function PaginationButton () {
    const router = useRouter()
    const startIndex = +(router.query.start) || 0
    
    return (
        <div className="flex justify-between align-center text-blue-700 
        max-w-lg
        mb-10">
        {startIndex >= 10 && (<Link 
        
        href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
           <div className="flex flex-grow flex-col items-center hover:underline">
            <ChevronLeftIcon className="h-5 text-gray-500"/>
            <p>Previous</p>
            </div>
            </Link>)}

            <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
            <div>
                <ChevronRightIcon className="h-5 text-gray-500"/>
            <p>Next</p>
            </div>
            </Link>
        </div>
    );
}

export default PaginationButton;
