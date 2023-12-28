import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { HeartIcon } from "lucide-react";

import { api } from "@/utils/api";
import MainLayout from "@/layouts/MainLayout";
import { cdn } from "@/utils/cdn";

export default function Home() {
    return (
        <MainLayout>
            <div className="flex flex-col justify-center items-center h-screen gap-[4rem] relative">
                <img className="absolute top-0 right-0 " src={cdn+"/heartbox.webp"} />
                <img className="max-w-[20rem]" src={cdn + "/concept_icon.webp"} alt="" />
                <div className="flex flex-col font-bold text-center">
                    <div className="text-4xl">ค้นหา <span className="text-primary">คู่ของคุณ</span></div>
                    <div className="text-4xl">กับเรา <span className="text-primary">KU Luv</span></div>
                </div>
                <div>
                    <div className="px-[5rem] h-[60px] p-2.5 bg-gradient-to-t from-pink-600 to-rose-400 rounded-[100px] shadow flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="text-white text-base font-bold font-['Noto Sans Thai']">Continue</div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}