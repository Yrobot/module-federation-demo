import Link from "next/link";
import config, { apps } from "@/config";

export default function Home() {
  return (
    <main className="relative">
      <section className="hero py-36">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <div className="py-6 space-y-2">
              <p>This is the Homepage of</p>
              <p className="text-2xl">{config.title}.</p>
              <p>You can find the list of apps below.</p>
            </div>
            <a className="btn btn-primary" href="#apps">
              View Apps
            </a>
          </div>
        </div>
      </section>
      <section
        id="apps"
        className="py-36 space-y-12 flex items-center justify-center flex-col"
      >
        <h2 className="text-3xl font-bold">Apps</h2>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Description</th>
                <th>Pathname</th>
              </tr>
            </thead>
            <tbody>
              {apps.map(({ title, key, description }, i) => (
                <tr key={key}>
                  <th>{i + 1}</th>
                  <td>{title}</td>
                  <td>{description}</td>
                  <td>
                    <Link
                      className="link"
                      href={`/apps/${key}`}
                    >{`/apps/${key}`}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
