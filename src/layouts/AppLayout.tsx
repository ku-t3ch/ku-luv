import { NextPage } from 'next'
import clsx from 'clsx'
import { css } from '@emotion/css'
import AppBar from '@/components/common/AppBar'

interface Props {
    children: React.ReactNode
}

const AppLayout: NextPage<Props> = ({ children }) => {
    return (
        <div className={clsx('max-w-md mx-auto min-h-screen')}>
            {children}
            <AppBar />
        </div>
    )
}

export default AppLayout