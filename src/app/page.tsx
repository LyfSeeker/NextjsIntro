import Image from "next/image";

export default function Home() {
  return (
    <div>
    <h1>App Page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus id quam eaque illo tempore. Nostrum vitae dicta accusamus, voluptatibus in maxime excepturi. Voluptates libero sint aspernatur beatae. Expedita, libero nulla!</p>
    <button className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">
      <a href="/home">Home</a>
    </button>
    </div>
  );
}
    