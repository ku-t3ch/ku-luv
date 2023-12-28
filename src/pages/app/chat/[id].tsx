import AppLayout from '@/layouts/AppLayout'
import BlankLayout from '@/layouts/BlankLayout'
import { ChevronLeftIcon, FlagIcon, SearchIcon, SendHorizontalIcon } from 'lucide-react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

interface Props { }

const Chat: NextPage<Props> = () => {
    const { back } = useRouter()
    return (
        <BlankLayout>
            <div className='flex flex-col w-full'>
                <div className="w-full justify-between items-center inline-flex px-5 py-3 fixed top-0 bg-white">
                    <div className="justify-start items-center gap-2.5 flex">
                        <div className="justify-start items-center gap-2.5 flex">
                            <ChevronLeftIcon onClick={back} size={35} className='text-rose-400 cursor-pointer' />
                            <img className="h-10 w-10 rounded-full" src="https://via.placeholder.com/60x60" />
                            <div className="flex-col justify-center items-start inline-flex">
                                <div className="text-center text-black text-base font-bold font-['Noto Sans Thai']">Kittikun Buntoyut</div>
                                <div className="text-center text-stone-400 text-sm font-normal font-['Noto Sans Thai']">Active 23m ago</div>
                            </div>
                        </div>
                    </div>
                    <div className="pr-2.5 justify-end items-center gap-2.5 flex">
                        <FlagIcon className='text-rose-400' />
                    </div>
                </div>
                <div className='mt-[4.3rem] mb-[4.3rem] flex flex-col gap-3 px-3'>

                    {[...new Array(100)].map((item, index) => (
                        <>
                            <div className='flex justify-start'>
                                <div className='flex gap-2'>
                                    <img className="h-[35px] w-[35px] rounded-full" src="https://via.placeholder.com/60x60" />
                                    <div className="max-w-[20rem] h-full p-3 bg-stone-100 rounded-2xl justify-start items-center inline-flex">
                                        <div className="text-black text-base font-normal font-['Noto Sans Thai'] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde, quaerat delectus minus quos iusto numquam. Modi, vitae debitis quisquam, assumenda veniam nesciunt repudiandae dolores animi ducimus quos reiciendis magnam.</div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end'>
                                <div className='flex gap-2'>
                                    <div className="max-w-[20rem] h-full p-3 bg-gradient-to-b from-pink-400 to-rose-400 rounded-2xl justify-start items-center inline-flex">
                                        <div className="text-white text-base font-normal font-['Noto Sans Thai'] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde, quaerat delectus minus quos iusto numquam. Modi, vitae debitis quisquam, assumenda veniam nesciunt repudiandae dolores animi ducimus quos reiciendis magnam.</div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                <div className="w-full justify-start items-center inline-flex fixed bottom-0 py-3 px-5 gap-5 max-w-md bg-white">
                    <div className="w-full h-11 relative bg-slate-100 rounded-2xl flex items-center pl-5 gap-2 ">
                        <input placeholder='Aa' type="text" className='w-full h-full bg-slate-100 rounded-2xl focus:outline-none' />
                    </div>
                    <SendHorizontalIcon className='text-rose-400' size={40} />
                </div>
            </div>
        </BlankLayout>
    )
}

export default Chat