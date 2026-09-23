'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <Link href="/" className="nav-logo">
        Norb Lara
      </Link>
      <ul className="nav-links">
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className={isActive ? 'active' : ''}
                aria-current={isActive ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          );
        })}
        <li>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
            </a>
        </li>
      </ul>
    </nav>
  );
}