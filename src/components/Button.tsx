import { NextPage } from 'next'
import React, { ReactNode, forwardRef } from 'react'

interface Props {
    children: ReactNode
    onClick?: () => void
}

const Button: NextPage<Props> = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className="px-[5rem] h-[60px] cursor-pointer hover:bg-gradient-to-t hover:from-pink-700 hover:to-rose-500 p-2.5 bg-gradient-to-t from-pink-600 to-rose-400 rounded-[100px] shadow flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-base font-bold font-['Noto Sans Thai']">
                {children}
            </div>
        </button>
    )
}


export default Button