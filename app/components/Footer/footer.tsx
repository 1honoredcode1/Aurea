import Link from "next/link";

const quickLinks = [
  { label: "About", href: "/ui-components/Pages/About" },
  { label: "Services", href: "/ui-components/Services" },
  { label: "Projects", href: "/ui-components/Projects" },
  { label: "Blog", href: "/ui-components/Blogs" },
  { label: "Contact", href: "/ui-components/Pages/Contact" },
];

const serviceLinks = [
  { label: "Interior Consultation", href: "/ui-components/Services" },
  { label: "Space Planning", href: "/ui-components/Services" },
  { label: "Renovation Styling", href: "/ui-components/Services" },
  { label: "Color Strategy", href: "/ui-components/Services" },
];

const Footer = () => {
  return (
    <footer className="relative mt-16 overflow-hidden bg-(--text) text-(--white)">
      <div className="pointer-events-none absolute -top-40 -right-16 h-80 w-80 rounded-full bg-(--prim)/25 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative px-[8%] lg:px-[12%] py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="inline-block text-4xl font-bold Audiowide tracking-wide"
            >
              Au<span className="text-(--prim)">rea</span>
            </Link>
            <p className="mt-4 max-w-[26ch] text-white/75 GolosText leading-relaxed">
              We design intentional interiors that blend aesthetics, comfort,
              and personality for modern living.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xl">
              <Link
                href="#"
                aria-label="Instagram"
                className="h-10 w-10 rounded-full border border-white/25 flex items-center justify-center hover:border-(--prim) hover:text-(--prim) transition"
              >
                <i className="ri-instagram-line"></i>
              </Link>
              <Link
                href="#"
                aria-label="Pinterest"
                className="h-10 w-10 rounded-full border border-white/25 flex items-center justify-center hover:border-(--prim) hover:text-(--prim) transition"
              >
                <i className="ri-pinterest-line"></i>
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="h-10 w-10 rounded-full border border-white/25 flex items-center justify-center hover:border-(--prim) hover:text-(--prim) transition"
              >
                <i className="ri-linkedin-line"></i>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold CalSans">Quick Links</h3>
            <ul className="mt-5 space-y-3 GolosText text-white/80">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-(--prim) transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold CalSans">Services</h3>
            <ul className="mt-5 space-y-3 GolosText text-white/80">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-(--prim) transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold CalSans">Stay Connected</h3>
            <p className="mt-5 text-white/75 GolosText leading-relaxed">
              Get monthly ideas, trend updates, and practical tips for designing
              your dream spaces.
            </p>
            <form className="mt-5 flex items-center rounded-full border border-white/20 bg-white/5 p-1">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent px-4 py-2 text-sm outline-none placeholder:text-white/50"
              />
              <button
                type="submit"
                className="rounded-full bg-(--prim) px-4 py-2 text-sm font-semibold text-black hover:bg-white transition-colors"
              >
                Join
              </button>
            </form>
            <div className="mt-5 space-y-2 text-sm text-white/70 GolosText">
              <p>
                <i className="ri-map-pin-line mr-2"></i> Oslo Design District,
                Norway
              </p>
              <p>
                <i className="ri-phone-line mr-2"></i> +47 123 123 12
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-white/60 GolosText">
          <p>© {new Date().getFullYear()} Aurea Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-(--prim) transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-(--prim) transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
