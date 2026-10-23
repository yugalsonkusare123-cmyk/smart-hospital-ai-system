
import Link from 'next/link';
import { Heart, Brain, Users, Clock, ArrowLeft } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/90 px-6 py-4 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
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
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* About Hero */}
      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            About Our Project
          </span>

          <h1 className="mt-6 text-4xl font-extrabold text-gray-900 md:text-6xl">
            Smarter Healthcare,
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Better Patient Care
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            SmartHospital is an AI-focused hospital management project
            designed to simplify healthcare access through digital
            services, smart queue management, and patient-focused tools.
          </p>

          <Link
            href="/auth/login"
            className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
            What SmartHospital Offers
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            A digital approach to making hospital services easier to access
            and manage.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <Brain className="mb-4 h-10 w-10 text-blue-600" />
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                AI-Focused System
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                A project concept focused on intelligent, data-driven
                healthcare management.
              </p>
            </div>

            <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <Clock className="mb-4 h-10 w-10 text-green-600" />
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                Smart Queue
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                Designed to help patients check queue information and
                manage waiting time more conveniently.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <Users className="mb-4 h-10 w-10 text-purple-600" />
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                Role-Based Access
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                Separate patient, doctor, and administrator dashboard
                routes for organized access.
              </p>
            </div>

            <div className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <Heart className="mb-4 h-10 w-10 text-red-500" />
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                Patient-Focused
              </h3>
              <p className="text-sm leading-6 text-gray-600">
                A user-friendly interface intended to make healthcare
                information and services easier to navigate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Mission */}
      <section className="bg-gradient-to-r from-blue-700 to-green-600 px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="mt-5 text-lg leading-8 text-blue-50">
            To explore how technology and artificial intelligence can
            support better hospital workflows, improve access to
            information, and make the healthcare experience more convenient.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Explore SmartHospital
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
