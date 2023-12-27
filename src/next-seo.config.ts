import { DefaultSeoProps } from "next-seo";

export default {
  title: "KU Luv",
  description: "KU Luv",
  openGraph: {
    title: "KU Luv",
    url: "https://luv.tech.nisit.ku.ac.th",
    type: "website",
    description: "KU Luv",
    images: [
      //   {
      //     url: "/og-image.png",
      //     width: 1600,
      //     height: 900,
      //     alt: "KU Clubs",
      //   },
    ],
    siteName: "KU Luv",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
} as DefaultSeoProps;