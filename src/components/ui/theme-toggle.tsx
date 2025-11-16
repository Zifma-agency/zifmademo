import { Instagram } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <Button
      variant="outline"
      size="icon"
      asChild
      className="fixed top-4 right-4 z-50 rounded-full w-12 h-12 border-2 shadow-lg"
      aria-label="Visit Instagram"
    >
      <a 
        href="https://www.instagram.com/zifma.media/?hl=en" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <Instagram className="h-5 w-5" />
      </a>
    </Button>
  );
}
