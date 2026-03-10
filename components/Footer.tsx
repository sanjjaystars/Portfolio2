import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted md:flex-row">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <p>Building elegant, scalable digital experiences.</p>
      </div>
    </footer>
  );
}
