
'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Heart, ArrowLeft, UserRound, FileText, Activity,
  Pill, ShieldCheck, CalendarDays, ClipboardList,
  Upload, Search, LockKeyhole
} from 'lucide-react';

const sampleRecords = [
  {
    id: 1,
    title: 'General Health Checkup',
    category: 'Consultation',
    date: '2026-09-15',
    description: 'Sample general health checkup record.',
  },
  {
    id: 2,
    title: 'Blood Test Report',
    category: 'Laboratory',
    date: '2026-09-10',
    description: 'Sample laboratory report entry.',
  },
  {
    id: 3,
    title: 'Prescription Record',
    category: 'Prescription',
    date: '2026-09-05',
    description: 'Sample prescription record entry.',
  },
];

export default function HealthRecordsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const filteredRecords = sampleRecords.filter((record) => {
    const matchesSearch =
      record.title.toLowerCase().includes(search.toLowerCase()) ||
      record.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === 'All' || record.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <header className="border-b border-gray-200 bg-white px-5 py-4 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="rounded-lg bg-gradient-to-r from-blue-600 to-green-600 p-2">
              <Heart className="h-6 w-6 text-white" fill="white" />
            </span>
            <span className="text-xl font-bold text-blue-700">
              SmartHospital
            </span>
          </Link>

          <Link href="/" className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-10 md:py-14">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <ShieldCheck className="h-4 w-4" />
              Digital Health Records
            </span>

            <h1 className="mt-5 text-3xl font-extrabold text-gray-900 md:text-4xl">
              My Health Records
            </h1>

            <p className="mt-3 max-w-2xl leading-7 text-gray-600">
              A central interface for organizing patient information,
              medical history, prescriptions, and reports.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
            <LockKeyhole className="h-5 w-5" />
            <span>Keep medical information private</span>
          </div>
        </div>

        {/* Profile */}
        <section className="mt-10 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-blue-100 p-4">
              <UserRound className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Patient Profile
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Sign in to access your personal health information.
              </p>
            </div>
          </div>

          <Link
            href="/auth/login"
            className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Login to Your Account
          </Link>
        </section>

        {/* Record Categories */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'Medical History',
              description: 'Previous consultations and medical history.',
              icon: Activity,
              color: 'text-blue-600',
              bg: 'bg-blue-50',
            },
            {
              title: 'Prescriptions',
              description: 'Organize prescription records.',
              icon: Pill,
              color: 'text-green-600',
              bg: 'bg-green-50',
            },
            {
              title: 'Test Reports',
              description: 'Keep laboratory report entries organized.',
              icon: FileText,
              color: 'text-purple-600',
              bg: 'bg-purple-50',
            },
            {
              title: 'Appointments',
              description: 'Review appointment-related records.',
              icon: CalendarDays,
              color: 'text-orange-600',
              bg: 'bg-orange-50',
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <div className={`mb-4 w-fit rounded-xl p-3 ${item.bg}`}>
                  <Icon className={`h-7 w-7 ${item.color}`} />
                </div>
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Records */}
        <section className="mt-10 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Medical Records
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Example entries for demonstrating the interface.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-3 text-sm text-blue-700">
              <ClipboardList className="h-5 w-5" />
              {filteredRecords.length} records
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-3">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search records..."
                aria-label="Search medical records"
                className="w-full py-3 outline-none"
              />
            </div>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              aria-label="Filter records by category"
              className="rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="All">All Categories</option>
              <option value="Consultation">Consultations</option>
              <option value="Laboratory">Laboratory</option>
              <option value="Prescription">Prescriptions</option>
            </select>
          </div>

          <div className="mt-6 space-y-4">
            {filteredRecords.length > 0 ? (
              filteredRecords.map((record) => (
                <article
                  key={record.id}
                  className="flex flex-col gap-4 rounded-xl border border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-blue-50 p-3">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {record.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {record.description}
                      </p>
                      <p className="mt-2 text-xs text-gray-400">
                        {record.category} · {record.date}
                      </p>
                    </div>
                  </div>
                  <span className="w-fit rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                    Demo Record
                  </span>
                </article>
              ))
            ) : (
              <p className="rounded-xl bg-gray-50 p-8 text-center text-gray-500">
                No matching records found.
              </p>
            )}
          </div>

          {/* Demo upload control */}
          <div className="mt-8 rounded-xl border-2 border-dashed border-gray-200 p-6 text-center">
            <Upload className="mx-auto h-8 w-8 text-blue-500" />
            <h3 className="mt-3 font-bold text-gray-900">
              Select a Report File
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Choose a PDF or image to preview its filename.
            </p>

            <input
              id="report-file"
              type="file"
              accept=".pdf,image/*"
              onChange={(e) => setSelectedFile(e.target.files?.[0] ?? null)}
              className="mx-auto mt-4 block max-w-full text-sm text-gray-600"
            />

            {selectedFile && (
              <p className="mt-3 break-all text-sm text-blue-700">
                Selected: {selectedFile.name}
              </p>
            )}

            <p className="mt-3 text-xs text-gray-400">
              Demo only: files are not uploaded or stored.
            </p>
          </div>
        </section>

        <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
          <strong>Privacy notice:</strong> This page uses sample records.
          It is not connected to a medical database. Do not enter or upload
          real sensitive medical information in this demo.
        </div>
      </section>

      <footer className="bg-gray-950 px-6 py-6 text-center text-sm text-gray-400">
        © 2026 SmartHospital. All rights reserved.
      </footer>
    </main>
  );
}
