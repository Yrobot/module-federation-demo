import dynamic from "next/dynamic";

// import type { Metadata } from "next";
import { apps } from "@/config";

import("next-app/style").then((res) => {
  console.log(res);
});
const Page = dynamic(() => import("next-app/Page"), {
  ssr: false,
});

type Props = {
  params: { id: string };
};

const getAppConfig = (id: string) => apps.find((app) => app.key === id);

export default function DetailPage({ params }: Props) {
  const app = getAppConfig(params?.id);
  // const Page = lazy(() => import(`${app?.key}/Page`));
  return <Page />;
}

// export async function generateStaticParams() {
//   return apps.map((app) => ({
//     id: app.key,
//   }));
// }

// const getMetadata = (url: string): Promise<Metadata> =>
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       if (!(data?.metadata instanceof Object))
//         throw new Error(
//           "getMetadata response.metadata is NOT a Object: " + url
//         );
//       return data.metadata;
//     });

// // https://nextjs.org/docs/app/api-reference/functions/generate-metadata
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const app = getAppConfig(params?.id);
//   if (!app) return {};
//   const defaultMetadata = {
//     title: app.title,
//     description: app.description,
//   };
//   if (app.origin)
//     return await getMetadata(
//       `${app.origin}${app?.metaPath ?? "/data.json"}`
//     ).catch((err) => {
//       console.error(err);
//       return defaultMetadata;
//     });
//   return defaultMetadata;
// }
