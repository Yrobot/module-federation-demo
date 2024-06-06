import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { init, loadRemote } from "@module-federation/enhanced/runtime";

// import type { Metadata } from "next";
import { apps } from "@/config";

init({
  name: "web",
  //   {
  //     name: "@demo/app1",
  //     entry: "http://localhost:3005/mf-manifest.json",
  //     alias: "app1",
  //   }[]
  remotes: apps.map(({ key, origin, entryPath = "/mf-manifest.json" }) => ({
    name: key,
    entry: `${origin}${entryPath}`,
    alias: key,
  })),
});

const getAppConfig = (id: string) => apps.find((app) => app.key === id);

export default function DetailPage() {
  const router = useRouter();
  if (typeof router.query?.id !== "string")
    return <div>App Id NOT Valid: {router.query?.id}</div>;
  const app = getAppConfig(router.query?.id);
  if (!app) return <div>NOT FOUND</div>;
  const Page = dynamic(
    () =>
      loadRemote<any>(`${app?.key}/Page`).catch((err) => () => (
        <div>Load Page Fail: {err.message}</div>
      )),
    {
      loading: () => <p>Loading...</p>,
    }
  );
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
