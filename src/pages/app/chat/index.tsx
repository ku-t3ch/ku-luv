import AppLayout from '@/layouts/AppLayout'
import { SearchIcon } from 'lucide-react'
import { NextPage } from 'next'
import { useRouter } from 'next/navigation'

interface Props { }

const Index: NextPage<Props> = () => {
    const {push} = useRouter()
    return (
        <AppLayout>
            <div className='w-full flex flex-col '>
                <div className="w-full h-11 bg-white justify-center items-center inline-flex z-10 ">
                    <div className="text-center">
                        <span className="text-black text-2xl font-bold font-['Noto Sans Thai']">My </span>
                        <span className="text-rose-400 text-2xl font-bold font-['Noto Sans Thai']">Chat</span>
                    </div>
                </div>
                <div className='w-full px-5 sticky top-3'>
                    <div className="w-full h-11 relative bg-slate-100 rounded-2xl flex items-center pl-5 gap-2 ">
                        <SearchIcon className='text-slate-400' />
                        <input placeholder='Search' type="text" className='w-full h-full bg-slate-100 rounded-2xl focus:outline-none' />
                    </div>
                </div>
                <div className="w-full mb-[6rem] flex-col justify-start items-center inline-flex mt-5 ">
                    {[...new Array(100)].map((item, index) => (
                        <div key={index} onClick={()=>push("/app/chat/123123123")} className="self-stretch justify-start items-center gap-2.5 inline-flex px-5 hover:bg-stone-100 py-2">
                            <img className="w-16 h-16 rounded-full" src="https://via.placeholder.com/60x60" />
                            <div className="flex-col justify-center items-start inline-flex">
                                <div className="text-center text-black text-base font-bold font-['Noto Sans Thai']">Kittikun Buntoyut {index}</div>
                                <div className="text-center text-stone-400 text-sm font-normal font-['Noto Sans Thai']">You: บ้าน *9:40pm</div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </AppLayout>
    )
}

export default Index