import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { HeartIcon } from "lucide-react";

import { api } from "@/utils/api";
import MainLayout from "@/layouts/MainLayout";
import { cdn } from "@/utils/cdn";
import { useRouter } from "next/router";
import Button from "@/components/Button";

export default function Home() {
    const { push } = useRouter()
    const goToApp = () => {
        push('/app')
    }
    return (
        <MainLayout>
            <div className="flex flex-col justify-center items-center h-screen gap-[4rem] relative">
                <img className="absolute top-0 right-0 " src={cdn + "/heartbox_blur.webp"} />
                <img className="absolute bottom-0 left-0 " src={cdn + "/compass_blur.webp"} />
                <img className="max-w-[20rem]" src={cdn + "/concept_icon.webp"} alt="" />
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col font-bold text-center">
                        <div className="text-4xl">ค้นหา <span className="text-primary">คู่ของคุณ</span></div>
                        <div className="text-4xl">กับเรา <span className="text-primary">KU Luv</span></div>
                    </div>
                    <div className="text-center text-slate-500 text-base font-bold font-['Noto Sans Thai']">เข้าร่วมกับเราแล้วค้นหาผู้คนที่คุณชอบ</div>
                </div>
                <div>
                    <Button onClick={goToApp}>
                        Continue
                    </Button>
                </div>
            </div>
        </MainLayout>
    );
}