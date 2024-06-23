import Avatar from "@/components/Avatar";
import "./custom.css";

export default function App() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg space-y-6">
          <Avatar />
          <h1 className="text-5xl font-bold">This is Webpack App</h1>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
