import Avatar from "@/components/Avatar";
import "./style.css";

export default function App() {
  return (
    <div className="w-screen h-[80vh] flex items-center justify-center flex-col space-y-8">
      <Avatar />
      <p>Webpack App</p>
    </div>
  );
}
