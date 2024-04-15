export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="text-xl font-bold">Dwight D. Eisenhower</div>
      <div className="flex space-x-4">
        <a href="/" className="hover:text-blue-500">
          Home
        </a>
        <a href="/about" className="hover:text-blue-500">
          About
        </a>
        <a href="/legacy" className="hover:text-blue-500">
          Legacy
        </a>
        <a href="/contact" className="hover:text-blue-500">
          Contact
        </a>
      </div>
    </nav>
  );
}
