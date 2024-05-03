export default function DetailPage({ params }: { params: { id: string } }) {
  const id = params?.id;
  return <div className="">{id}</div>;
}
