import Image from "next/image"
import { useRouter } from 'next/router'
import { MicrophoneIcon, SearchIcon, XIcon} from '@heroicons/react/solid'
import { useRef } from 'react'
import Avatar from "./Avatar"
import HeaderOptions from '../components/HeaderOptions'
function Header(){
    
    const router = useRouter()
    const searchInputRef = useRef(null)

    function search(event) {
        
        event.preventDefault()
        const term = searchInputRef.current.value

        if (!term) return
    router.push(`search?term=${term}`)
    }
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
            <Image
            src={'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'}
            width={92}
            height={30}
            className='cursor-pointer'
            alt="google logo"
            onClick={()=> router.push('/')}
/>
    
    <form className="
    flex
    flex-grow
    border
     border-gray-200
     rounded-full
     shadow-lg
     max-w-3xl 
     px-6
     py-2
     ml-10 mr-5 items-center">
        <input ref={searchInputRef} 
        type='text'
        className="flex-grow
        w-full 
        focus:outline-none"
        />
   <XIcon className="h-7
    text-gray-500
     cursor-pointer
     sm:mr-3
     "
     onClick={ () => (searchInputRef.current.value = "")}
     />

     <MicrophoneIcon className="h-6 
     text-blue-500
     mr-3
     hidden sm:inline-flex
     border-l-2
     pl-4 border-gray-300
     "/>
     <SearchIcon className="h-6
      text-blue-500
      hidden sm:inline-flex"/>
      <button hidden type="submit" onClick={search}>Search</button>
    </form>
   <Avatar className="ml-auto" url={'https://lh3.googleusercontent.com/a-/AFdZucr8FsQ21ozIQjjZnCLPMW_eed7hypWYvtsdXVAOjxw=s288-p-rw-no'}/>
       </div>
        
        <HeaderOptions/>
        </header>

        
    )
}

export default Header
