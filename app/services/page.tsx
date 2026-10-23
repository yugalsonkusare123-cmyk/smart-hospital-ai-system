
import Link from 'next/link';
import {
  Heart, CalendarDays, Video, FileText,
  Clock, Pill, Activity, ShieldCheck, ArrowLeft
} from 'lucide-react';

const services = [
  {
    title: 'Book Appointment',
    description:
      'Explore appointment access and connect with the hospital through the available patient workflow.',
    icon: CalendarDays,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    href: '/auth/login',
    button: 'Get Started',
  },
  {
    title: 'Telemedicine',
    description:
      'Explore digital healthcare access and online consultation options.',
    icon: Video,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    href: '/auth/login',
    button: 'Patient Login',
  },
  {
    title: 'Digital Health Records',
    description:
      'Access the patient area to explore available health record features.',
    icon: FileText,
    color: 'text-green-600',
    bg: 'bg-green-50',
    href: '/auth/login',
    button: 'View Patient Area',
  },
  {
    title: 'Smart Queue Management',
    description:
      'Explore queue-related features intended to make hospital visits more organized.',
    icon: Clock,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    href: '/auth/login',
    button: 'Get Started',
  },
  {
    title: 'Pharmacy Information',
    description:
      'Explore the available patient workflow for accessing healthcare-related services.',
    icon: Pill,
    color: 'text-pink-600',
    bg: 'bg-pink-50',
    href: '/auth/login',
    button: 'Patient Login',
  },
  {
    title: 'Emergency Information',
    description:
      'Find emergency information and access the hospital emergency page.',
    icon: Activity,
    color: 'text-red-600',
    bg: 'bg-red-50',
    href: '/emergency',
    button: 'Emergency Page',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="rounded-lg bg-gradient-to-r from-blue-600 to-green-600 p-2">
              <Heart className="h-6 w-6 text-white" fill="white" />
            </span>
            <span className="text-xl font-bold text-blue-700">
              SmartHospital
            </span>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-16 text-center md:py-20">
        <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          <ShieldCheck className="h-4 w-4" />
          Healthcare Services
        </span>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
          Our Hospital Services
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
          Explore SmartHospital services designed around convenient access,
          patient information, and smarter hospital management.
        </p>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="flex flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`mb-5 w-fit rounded-xl p-3 ${service.bg}`}>
                  <Icon className={`h-8 w-8 ${service.color}`} />
                </div>

                <h2 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h2>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  {service.button} →
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* Information Banner */}
      <section className="bg-gradient-to-r from-blue-700 to-green-600 px-6 py-14 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold md:text-3xl">
            Healthcare access, made simpler
          </h2>

          <p className="mt-4 leading-7 text-blue-50">
            Sign in to explore the features available in your SmartHospital
            account. Service availability depends on the functionality
            implemented in the project.
          </p>

          <Link
            href="/auth/login"
            className="mt-7 inline-block rounded-xl bg-white px-7 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Login to SmartHospital
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 px-6 py-6 text-center text-sm text-gray-400">
        © 2026 SmartHospital. All rights reserved.
      </footer>
    </main>
  );
}
