const base = import.meta.env.BASE_URL || '/'

const footerLinks = [
  { label: 'Privacy Policy', href: `${base}privacy.html` },
  { label: 'Terms of Service', href: '#' },
  { label: 'Support', href: 'mailto:quivlo.app@gmail.com' },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 pb-[calc(3rem+env(safe-area-inset-bottom))]">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-6">
        <a
          href="https://www.producthunt.com/products/quivlo?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-quivlo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
          aria-label="Quivlo on Product Hunt"
        >
          <img
            alt="Quivlo - Turn what you read into flashcards you remember | Product Hunt"
            width={250}
            height={54}
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1090146&theme=dark&t=1772665284012"
            className="h-[54px] w-[250px] object-contain"
          />
        </a>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Footer">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="min-h-[44px] flex items-center justify-center py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors touch-manipulation"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-center text-sm text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} Quivlo. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
