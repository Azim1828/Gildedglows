import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageBannerProps {
  title: string;
  paths?: { label: string; href: string }[];
}

export function PageBanner({ title, paths = [] }: PageBannerProps) {
  return (
    <div className="relative py-24 bg-indigo-500">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/10 to-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-white/10 to-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">{title}</h1>
          
          {paths.length > 0 && (
            <nav className="flex justify-center items-center space-x-2 text-sm text-white/80">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              {paths.map((path, index) => (
                <span key={path.href} className="flex items-center">
                  <ChevronRight className="w-4 h-4 mx-2 text-white/60" />
                  {index === paths.length - 1 ? (
                    <span className="text-white">{path.label}</span>
                  ) : (
                    <Link href={path.href} className="hover:text-white transition-colors">
                      {path.label}
                    </Link>
                  )}
                </span>
              ))}
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}
