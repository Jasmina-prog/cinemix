export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Cinemix</h1>
        <ul className="flex gap-6">
          <li><a href="#" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#" className="hover:text-yellow-400">Movies</a></li>
          <li><a href="#" className="hover:text-yellow-400">About</a></li>
        </ul>
      </div>
    </nav>
  );
}
