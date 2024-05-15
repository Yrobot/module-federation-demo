import type { Metadata } from "next";
import DetailLayout from "@/comps/DetailLayout";
import { apps } from "@/config";

type Props = {
  params: { id: string };
};

const getAppConfig = (id: string) => apps.find((app) => app.key === id);

export default function DetailPage({ params }: Props) {
  const app = getAppConfig(params?.id);
  return (
    <DetailLayout>
      <div className="w-screen h-[80vh] flex items-center justify-center text-5xl">
        {app?.title}
      </div>
    </DetailLayout>
  );
}

export async function generateStaticParams() {
  return apps.map((app) => ({
    id: app.key,
  }));
}

const getMetadata = (url: string): Promise<Metadata> =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (!(data?.metadata instanceof Object))
        throw new Error(
          "getMetadata response.metadata is NOT a Object: " + url
        );
      return data.metadata;
    });

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const app = getAppConfig(params?.id);
  if (!app) return {};
  const defaultMetadata = {
    title: app.title,
    description: app.description,
  };
  if (app.origin)
    return await getMetadata(
      `${app.origin}${app?.metaPath ?? "/data.json"}`
    ).catch((err) => {
      console.error(err);
      return defaultMetadata;
    });
  return defaultMetadata;
}
