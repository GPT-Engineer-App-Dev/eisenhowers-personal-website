import { Button } from "@/components/ui/button.jsx";

export function Navbar({ onPageChange }) {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100">
      <div>
        <Button onClick={() => onPageChange("home")}>Home</Button>
        <Button onClick={() => onPageChange("about")}>About</Button>
        <Button onClick={() => onPageChange("eisenhower")}>Eisenhower</Button>
      </div>
    </nav>
  );
}