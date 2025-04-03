import { footerContent } from './footer-content'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { LocaleSwitch, ThemeSwitch } from 'nextra-theme-docs';

const currentYear = new Date().getFullYear()

export default function Footer() {
    return (
        <footer className='border-t-2 border-seashore'>
            <div className="py-6 md:py-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-0">
                        <div className="md:col-span-8 lg:col-span-7 grid gap-8 hidden md:block">
                            <ul>
                                {footerContent.links.slice(0, 4).map((link, index) => (
                                    <li className="mb-1" key={index}>
                                        <Link
                                            href={link.href}
                                            className="hover:text-seashore transition duration-150 ease-in-out"
                                        >
                                            {link.text} <ChevronRight className="inline-block w-4 h-4" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:col-span-4 lg:col-span-5 md:text-right">
                            <div className="mb-2">
                                <Link
                                    href={footerContent.logo.link}
                                    className="inline-block"
                                    aria-label={footerContent.logo.alt}
                                >
                                    <img
                                        src={footerContent.logo.src}
                                        className="h-8"
                                        alt={footerContent.logo.alt}
                                    />
                                </Link>
                            </div>
                            <div className="text-muted-foreground mb-4">
                                Catenary helps connect people and communities with powerful transit data and algorithms.
                            </div>
                            <ThemeSwitch />
                            <LocaleSwitch />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}