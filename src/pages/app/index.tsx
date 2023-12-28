import AppLayout from '@/layouts/AppLayout'
import { NextPage } from 'next'

// redirect to chat
export const getServerSideProps = () => {
    return {
        redirect: {
            destination: '/app/chat',
            permanent: false,
        },
    }
}

interface Props {}

const Index: NextPage<Props> = () => {
    return (
        <AppLayout>
        asfsadf
        </AppLayout>
    )
}

export default Index