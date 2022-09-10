import HeaderOptionSing from "../components/HeaderOptionSing"

import {
    DotsVerticalIcon,
    MapIcon, 
    PhotographIcon, 
    PlayIcon,
    SearchIcon,
    NewspaperIcon

} from '@heroicons/react/outline'

function HeaderOptions() {
    return (
        <div className="flex w-full border-b
         border-b-gray-200 
         text-gray-700 
         justify-around
         text-sm 
         lg:text-base
         lg:justify-start">
            <div className="flex lg:pl-52 space-x-6">
<HeaderOptionSing Icon={SearchIcon} title="All"
selected/>
<HeaderOptionSing Icon={PhotographIcon} title="Images"
/>
<HeaderOptionSing Icon={MapIcon} title="Maps"
/>
<HeaderOptionSing Icon={PlayIcon} title="Videos"
/>
<HeaderOptionSing Icon={NewspaperIcon} title="News"
/>
<HeaderOptionSing Icon={DotsVerticalIcon} title="More"
/>


            </div>

            <div className="flex ml-auto pr-2">
                <p className="link">Tools</p>
            </div>
        </div>
    );
}

export default HeaderOptions;
