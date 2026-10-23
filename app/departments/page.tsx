
import Link from 'next/link';
import {
  Heart, Brain, Baby, Bone, Eye, Activity,
  Stethoscope, ArrowLeft, Clock
} from 'lucide-react';

const departments = [
  {
    name: 'Cardiology',
    description: 'Heart health, cardiovascular assessment, and heart care.',
    icon: Heart,
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
  {
    name: 'Neurology',
    description: 'Care related to the brain, nerves, and nervous system.',
    icon: Brain,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    name: 'Pediatrics',
    description: 'Healthcare information and services for children.',
    icon: Baby,
    color: 'text-pink-500',
    bg: 'bg-pink-50',
  },
  {
    name: 'Orthopedics',
    description: 'Bone, joint, muscle, and mobility-related care.',
    icon: Bone,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
  {
    name: 'Ophthalmology',
    description: 'Eye health, vision assessment, and eye care.',
    icon: Eye,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    name: 'General Medicine',
    description: 'General health consultations and routine medical care.',
    icon: Stethoscope,
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    name: 'Emergency Care',
    description: 'Information for urgent medical needs and emergency care.',
    icon: Activity,
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
  {
    name: 'Preventive Care',
    description: 'Routine checkups and guidance on maintaining good health.',
    icon: Clock,
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
];

export default function DepartmentsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <header className="border-b border-gray-200 bg-white px-6 py-4 shadow-sm">
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

      <section className="px-6 py-16 text-center md:py-20">
        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          Healthcare Departments
        </span>

        <h1 className="mt-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
          Explore Our Departments
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
          Explore different medical specialties and find the department
          relevant to your healthcare needs.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((department) => {
            const Icon = department.icon;

            return (
              <article
                key={department.name}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`mb-5 inline-flex rounded-xl p-3 ${department.bg}`}>
                  <Icon className={`h-8 w-8 ${department.color}`} />
                </div>

                <h2 className="mb-3 text-xl font-bold text-gray-900">
                  {department.name}
                </h2>

                <p className="mb-6 min-h-16 text-sm leading-6 text-gray-600">
                  {department.description}
                </p>

                <Link
                  href="/doctors"
                  className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800"
                >
                  Find Doctors
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-700 to-green-600 px-6 py-14 text-center text-white">
        <h2 className="text-2xl font-bold md:text-3xl">
          Need help finding the right department?
        </h2>

        <p className="mx-auto mt-4 max-w-xl leading-7 text-blue-50">
          Visit our doctors page to explore the available doctor listings.
          For urgent medical needs, contact local emergency services.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <Link
            href="/doctors"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50"
          >
            Find Doctors
          </Link>

          <Link
            href="/emergency"
            className="rounded-xl border border-white px-6 py-3 font-semibold text-white hover:bg-white/10"
          >
            Emergency
          </Link>
        </div>
      </section>

      <footer className="bg-gray-950 px-6 py-6 text-center text-sm text-gray-400">
        © 2026 SmartHospital. All rights reserved.
      </footer>
    </main>
  );
}
