
'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Search,
  Stethoscope,
  HeartPulse,
  Brain,
  Baby,
  Bone,
  Eye,
  Clock,
  CalendarDays,
  ArrowLeft,
  UserRound,
} from 'lucide-react';

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  experience: number;
  availability: string;
  description: string;
  icon: typeof Stethoscope;
};

const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Rahul Sharma',
    specialty: 'Cardiology',
    experience: 10,
    availability: 'Mon–Fri',
    description: 'Heart health and cardiovascular consultations.',
    icon: HeartPulse,
  },
  {
    id: 2,
    name: 'Dr. Priya Patel',
    specialty: 'Neurology',
    experience: 8,
    availability: 'Mon–Sat',
    description: 'Brain and nervous system consultations.',
    icon: Brain,
  },
  {
    id: 3,
    name: 'Dr. Amit Verma',
    specialty: 'Pediatrics',
    experience: 7,
    availability: 'Mon–Fri',
    description: 'Healthcare and routine checkups for children.',
    icon: Baby,
  },
  {
    id: 4,
    name: 'Dr. Neha Deshmukh',
    specialty: 'Orthopedics',
    experience: 9,
    availability: 'Tue–Sat',
    description: 'Bone, joint and musculoskeletal consultations.',
    icon: Bone,
  },
  {
    id: 5,
    name: 'Dr. Arjun Mehta',
    specialty: 'Ophthalmology',
    experience: 6,
    availability: 'Mon–Sat',
    description: 'Eye health and vision consultations.',
    icon: Eye,
  },
  {
    id: 6,
    name: 'Dr. Sneha Kulkarni',
    specialty: 'General Medicine',
    experience: 5,
    availability: 'Mon–Sat',
    description: 'General health assessments and consultations.',
    icon: Stethoscope,
  },
];

export default function DoctorsPage() {
  const [search, setSearch] = useState('');
  const [specialty, setSpecialty] = useState('All Specialties');

  const specialties = [
    'All Specialties',
    ...Array.from(new Set(doctors.map((doctor) => doctor.specialty))),
  ];

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesSearch =
        doctor.name.toLowerCase().includes(search.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(search.toLowerCase());

      const matchesSpecialty =
        specialty === 'All Specialties' ||
        doctor.specialty === specialty;

      return matchesSearch && matchesSpecialty;
    });
  }, [search, specialty]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <header className="mb-8 rounded-3xl bg-gradient-to-r from-blue-700 to-emerald-600 p-7 text-white shadow-lg md:p-10">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white/15 p-3">
              <Stethoscope size={32} />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-100">
              SmartHospital
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold md:text-4xl">
            Find the Right Doctor
          </h1>
          <p className="mt-3 max-w-2xl leading-7 text-blue-50">
            Explore medical specialties and find a doctor for your
            consultation. Choose a specialty and continue to appointment
            booking.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-white/15 px-4 py-2">
              {doctors.length} Sample Profiles
            </span>
            <span className="rounded-full bg-white/15 px-4 py-2">
              Multiple Specialties
            </span>
          </div>
        </header>

        <section className="mb-8 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-gray-900">
            Search Doctors
          </h2>

          <div className="grid gap-4 md:grid-cols-[1fr_260px]">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by doctor name or specialty..."
                aria-label="Search doctors"
                className="w-full rounded-xl border border-gray-200 py-3 pl-12 pr-4 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <select
              value={specialty}
              onChange={(event) => setSpecialty(event.target.value)}
              aria-label="Filter by specialty"
              className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none focus:border-blue-500"
            >
              {specialties.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </section>

        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Our Doctors
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Search and select a specialty to explore the sample listings.
            </p>
          </div>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            {filteredDoctors.length} doctors found
          </span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDoctors.map((doctor) => {
            const Icon = doctor.icon;

            return (
              <article
                key={doctor.id}
                className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon size={32} />
                  </div>
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                    Sample Profile
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {doctor.name}
                </h3>
                <p className="mt-1 font-semibold text-blue-700">
                  {doctor.specialty}
                </p>
                <p className="mt-3 min-h-12 text-sm leading-6 text-gray-600">
                  {doctor.description}
                </p>

                <div className="mt-5 space-y-3 border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <UserRound size={17} className="text-gray-400" />
                    {doctor.experience} years of sample experience
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CalendarDays size={17} className="text-gray-400" />
                    {doctor.availability}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Clock size={17} className="text-gray-400" />
                    Appointment required
                  </div>
                </div>

                <Link
                  href={`/appointment?specialty=${encodeURIComponent(doctor.specialty)}&doctor=${encodeURIComponent(doctor.name)}`}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
                >
                  <CalendarDays size={18} />
                  Book Appointment
                </Link>
              </article>
            );
          })}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="rounded-2xl border border-gray-100 bg-white p-10 text-center">
            <Search size={32} className="mx-auto text-gray-400" />
            <h3 className="mt-3 text-lg font-bold text-gray-900">
              No doctors found
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Try another name or select a different specialty.
            </p>
            <button
              onClick={() => {
                setSearch('');
                setSpecialty('All Specialties');
              }}
              className="mt-4 rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700"
            >
              Clear Filters
            </button>
          </div>
        )}

        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm leading-6 text-amber-900">
            <strong>Project demo notice:</strong> These doctor names,
            experience figures and schedules are sample data, not verified
            real healthcare provider information. Confirm real doctor details
            before using this page for actual appointments.
          </p>
        </div>
      </div>
    </main>
  );
}
