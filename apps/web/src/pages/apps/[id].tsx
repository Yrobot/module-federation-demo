import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { init, loadRemote } from "@module-federation/enhanced/runtime";

import { apps } from "@/config";

init({
  name: "web",
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
