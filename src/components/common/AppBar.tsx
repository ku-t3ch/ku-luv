import { HeartIcon, MessageCircleMoreIcon, UserIcon } from 'lucide-react'
import { NextPage } from 'next'

interface Props { }

const AppBar: NextPage<Props> = () => {

    const iconSize = 30
    return (
        <div className='fixed bottom-0 w-full max-w-md mx-auto bg-white'>
            <div className='pt-5 pb-5'>
                <div className="w-full h-fit px-16 justify-between items-start inline-flex">
                    <div className="flex-col justify-center items-center gap-2.5 inline-flex">
                        <MessageCircleMoreIcon size={iconSize} className='text-rose-400 hover:text-rose-400' />
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full" />
                    </div>
                    <div className="flex-col justify-center items-center gap-2.5 cursor-pointer inline-flex">
                        <HeartIcon size={iconSize} className='hover:text-rose-400' />
                    </div>
                    <div className="flex-col justify-center items-center gap-2.5 cursor-pointer inline-flex">
                        <UserIcon size={iconSize} className='hover:text-rose-400' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppBar