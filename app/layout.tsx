import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { PageTransition } from '@/components/ui/page-transition';
import { SmoothScroll } from '@/components/ui/smooth-scroll';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { PerformanceOptimizer } from '@/components/ui/performance-optimizer';
import { GoogleAnalytics, Analytics } from '@/components/ui/analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Parth Valia - React Native Developer',
    template: '%s | Parth Valia'
  },
  description: 'Mobile Developer with 2.8+ years of experience in crafting cross-platform applications using React Native, significantly enhancing user engagement and app performance. Demonstrates a collaborative spirit by working closely with design, backend, and product teams, achieving a 30% reduction in crash rates and fostering a culture of knowledge sharing.',
  keywords: [
    'React Native Developer',
    'Mobile App Developer',
    'Cross-platform Development',
    'JavaScript',
    'TypeScript',
    'Redux',
    'Firebase',
    'AWS',
    'Mobile Applications',
    'iOS Development',
    'Android Development',
    'Parth Valia'
  ],
  authors: [{ name: 'Parth Valia' }],
  creator: 'Parth Valia',
  publisher: 'Parth Valia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://parthvalia.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://parthvalia.dev',
    title: 'Parth Valia - React Native Developer',
    description: 'Mobile Developer with 2.8+ years of experience in crafting cross-platform applications using React Native, significantly enhancing user engagement and app performance.',
    siteName: 'Parth Valia Portfolio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Parth Valia - React Native Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parth Valia - React Native Developer',
    description: 'Mobile Developer with 2.8+ years of experience in crafting cross-platform applications using React Native.',
    images: ['/images/og-image.png'],
    creator: '@parthvalia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Parth Valia",
              "jobTitle": "React Native Developer",
              "description": "Mobile Developer with 2.8+ years of experience in crafting cross-platform applications using React Native",
              "url": "https://parthvalia.dev",
              "sameAs": [
                "https://github.com/parthvalia",
                "https://linkedin.com/in/parthvalia",
                "https://twitter.com/parthvalia"
              ],
              "knowsAbout": [
                "React Native",
                "JavaScript",
                "TypeScript",
                "Mobile Development",
                "Cross-platform Development",
                "Redux",
                "Firebase",
                "AWS"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Corenet Tech"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Gujarat Technological University"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark">
          <PerformanceOptimizer />
          <ScrollProgress />
          <SmoothScroll />
          <Header />
          <PageTransition>
            <main className="min-h-screen">{children}</main>
          </PageTransition>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}