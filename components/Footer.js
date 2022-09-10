function Footer () {
    return (
    
    
       <footer className='grid
       
       w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-small
       text-gray-500'>

<div className='px-8 py-3'> 
    <p>Colombia</p>
</div>
<div className='grid grid-cols-1 md:grid-cols-2  gap-y-4 grid-flow-row-dense'>
<div className='md:justify-self-start '>
    <ul className=' flex justify-center space-x-8 whitespace-nowrap '>
         <li > About</li>
        <li >Advertising </li>
        <li >Business</li>
        <li >How Search Works</li>
    </ul>
</div>
<div className=' md:ml-auto pr-2'>
    <ul className='flex justify-center space-x-8 '>
<li >Privacy</li>
<li >Terms</li>
 <li>Settings</li>
</ul>
</div>
</div>
       </footer>
    );
}

export default Footer;


