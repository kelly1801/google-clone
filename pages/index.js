import Head from 'next/head'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid'
import {SearchIcon} from '@heroicons/react/outline'
import Image from 'next/image'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
const router = useRouter()
const searchInputRef = useRef(null)

function search(event) {
  event.preventDefault()

  const term = searchInputRef.current.value

   if (!term) return;
router.push(`/search?term=${term}`)
  }

  return (
   <div className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
  <link rel='icon' href='google.svg'/>
      </Head>




<header className="flex w-full p-5 justify-end text-sm text-gray-700">

<div className="flex ">
<ul className="flex space-x-4 items-center  ">
  <li><a className="link" >Gmail</a></li>
  <li><a className="link">Images</a></li>
  <ViewGridIcon className="h-10
   w-10 
   p-2
   hover:bg-gray-100 rounded-full"/> 

<Avatar url="https://lh3.googleusercontent.com/a-/AFdZucr8FsQ21ozIQjjZnCLPMW_eed7hypWYvtsdXVAOjxw=s288-p-rw-no"/>


</ul>
</div>


</header>

<form className='flex 
flex-col 
items-center
flex-grow
w-4/5'>

  <Image 

  src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
  height={92}
  width={272}
  alt='google logo'

  />
  
  <div className='
  flex 
  w-full 
  mt-8
  hover:shadow-lg
  focus-within:shadow-lg
  max-w-md 
  rounded-full 
  border
border-gray-200 
  px-5
  py-3 
  
  items-center
  sm:max-w-xl
  lg:max-w-2xl'>
  
  <SearchIcon className='h-5 mr-5 text-gray-500'/>
 
 <input type='text'
 ref={searchInputRef}
 className='
 focus:outline-none
 flex-grow
 
 
 ' 
  />
  <MicrophoneIcon className='h-5 text-gray-500'/>
  </div>

  <div className='flex
   flex-col 
   w-1/2 
   space-y-2
   justify-center
   mt-8
   md:space-y-0
   md:flex-row
   md:space-x-4'>
    <button onClick={search} className='btn'>Google Search</button>
    <button onClick={search} className='btn'> I&apos;m feeling lucky</button>
  </div>
</form>

<Footer />

    </div>
  )
}
