import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import SEO from "@/next-seo.config";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <>
            <DefaultSeo {...SEO} />
            <SessionProvider session={session}>
                <Component {...pageProps} />
            </SessionProvider>
        </>

    );
};

export default api.withTRPC(MyApp);
