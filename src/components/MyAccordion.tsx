import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const MyAccordion = ({ title, data, selectedItem, setSelectedItem }: { title: string; data: any; selectedItem: string; setSelectedItem: any }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div>
            <div onClick={() => setIsOpen(!isOpen)} className='group hover:cursor-pointer hover:bg-secondary/10 px-4 flex items-center justify-between py-6'>
                <p className="text-lg text-black font-bold uppercase">{title}</p>
                <div className="p-4 group-hover:bg-orange-500 rounded-full">
                    {!isOpen ? (<FaPlus size={16} className="group-hover:text-white" />) : (<FaMinus size={16} className="group-hover:text-white" />)}
                </div>
            </div>
            <div className={`py-4 flex flex-wrap gap-3 transition-all duration-1000 ${!isOpen ? "hidden" : "block"}`}>
            <div onClick={() => setSelectedItem("")} className={`px-4 py-2 ${selectedItem === "" ? "bg-secondary text-white" : "bg-gray-200 text-black"} hover:bg-secondary hover:text-white hover:cursor-pointer rounded-lg font-semibold text-sm`}>All</div>
                {data?.map((item: { id: number; title: string; }) => <div key={item.id} onClick={() => setSelectedItem(item.title)} className={`px-4 py-2 ${selectedItem === item.title ? "bg-secondary text-white" : "bg-gray-200 text-black"} hover:bg-secondary hover:text-white hover:cursor-pointer rounded-lg font-semibold text-sm`}>{item.title}</div>)}
            </div>
            <hr className="text-gray-400" />
        </div>
    )
}

export default MyAccordion;