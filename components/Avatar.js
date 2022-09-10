

function Avatar({url})
{
    return (
        <img

        className="h-11 
        rounded-full 
        cursor-pointer
        hover:bg-gray-100 
        p-1
        
        "
        
        loading='lazy'
        src={url}
        alt="profile picture"
        
        />
      
    );
}

export default Avatar;


