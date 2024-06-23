import Avatar from "@/components/Avatar";

export default function Home() {
  return (
    <>
      <div className="w-screen h-[80vh] flex items-center justify-center flex-col space-y-8">
        <Avatar />
        <p>Next.js App</p>
        <div className="space-x-4">
          <button className="btn">Button</button>
          <button className="btn btn-neutral">Neutral</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
          <button className="btn btn-ghost">Ghost</button>
          <button className="btn btn-link">Link</button>
        </div>
      </div>
    </>
  );
}
