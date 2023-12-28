import { NextPage } from 'next'
import clsx from 'clsx'
import { css } from '@emotion/css'

interface Props {
    children: React.ReactNode
}

const MainLayout: NextPage<Props> = ({ children }) => {
    return (
        <div className={clsx('max-w-md mx-auto min-h-screen', css`
        background: linear-gradient(180deg, #FFCAE2 0%, #FFF 47.92%, #D1C0F9 100%);
        `)}>
            {children}
        </div>
    )
}

export default MainLayout