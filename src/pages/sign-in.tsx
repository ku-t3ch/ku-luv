import Button from '@/components/Button'
import MainLayout from '@/layouts/MainLayout'
import { cdn } from '@/utils/cdn'
import { NextPage } from 'next'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface Props { }

const SignIn: NextPage<Props> = () => {
    const { push } = useRouter()
    const goToApp = () => {
        signIn("google", {
            callbackUrl: "/app"
        })
    }
    return (
        <MainLayout>
            <div className="flex flex-col justify-center items-center h-screen gap-[4rem] relative">
                <img className="absolute top-0 right-0 " src={cdn + "/heartbox_blur.webp"} />
                <img className="absolute bottom-0 left-0 " src={cdn + "/compass_blur.webp"} />
                <img className="max-w-[20rem]" src={cdn + "/concept_icon.webp"} alt="" />
                <div className="flex flex-col gap-3">
                    <div className="text-4xl font-bold">Sign In</div>
                </div>
                <div>
                    <Button onClick={goToApp}>Sign In @ku.th</Button>
                </div>
            </div>
        </MainLayout>
    )
}

export default SignIn