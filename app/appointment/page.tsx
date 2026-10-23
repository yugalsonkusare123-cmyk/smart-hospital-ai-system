
'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Heart,
  CalendarDays,
  Clock,
  UserRound,
  Mail,
  Phone,
  Stethoscope,
  ArrowLeft,
  CheckCircle,
} from 'lucide-react';

const specialties = [
  'General Medicine',
  'Cardiology',
  'Neurology',
  'Orthopedics',
  'Pediatrics',
  'Ophthalmology',
];

export default function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const [patientName, setPatientName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialty, setSpecialty] = useState('General Medicine');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');

  const today = new Date();
  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, '0'),
    String(today.getDate()).padStart(2, '0'),
  ].join('-');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

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

          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4" />
            Home
          </Link>
        </div>
      </header>

      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <CalendarDays className="h-4 w-4" />
              Appointment Booking
            </span>

            <h1 className="mt-5 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Book Your Appointment
            </h1>

            <p className="mt-3 text-gray-600">
              Enter your details and preferred appointment information.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-2xl border border-green-200 bg-white p-6 shadow-lg sm:p-10">
              <CheckCircle className="mx-auto h-16 w-16 text-green-600" />

              <h2 className="mt-5 text-center text-2xl font-bold text-gray-900">
                Form Submitted Successfully!
              </h2>

              <p className="mt-3 text-center leading-7 text-gray-600">
                Your appointment details have been collected in this demo.
                No appointment has been saved to a database or confirmed
                by a hospital.
              </p>

              <div className="mt-6 space-y-3 rounded-xl bg-gray-50 p-5 text-sm text-gray-700">
                <p><strong>Patient:</strong> {patientName}</p>
                <p><strong>Specialty:</strong> {specialty}</p>
                <p><strong>Preferred doctor:</strong> {doctor || 'No preference'}</p>
                <p><strong>Date:</strong> {date}</p>
                <p><strong>Time:</strong> {time}</p>
              </div>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Back to Form
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border border-gray-100 bg-white p-5 shadow-lg sm:p-8"
            >
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Patient Information
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Fill in the required fields below.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="patientName" className="mb-2 block text-sm font-semibold text-gray-700">
                    Full Name *
                  </label>
                  <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-3">
                    <UserRound className="h-5 w-5 text-gray-400" />
                    <input
                      id="patientName"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      required
                      maxLength={100}
                      autoComplete="name"
                      placeholder="Enter your full name"
                      className="w-full py-3 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
                    Email Address *
                  </label>
                  <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="w-full py-3 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gray-700">
                    Phone Number *
                  </label>
                  <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      autoComplete="tel"
                      pattern="[0-9+() -]{10,20}"
                      title="Enter a valid phone number"
                      placeholder="Enter phone number"
                      className="w-full py-3 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="specialty" className="mb-2 block text-sm font-semibold text-gray-700">
                    Department *
                  </label>
                  <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-3">
                    <Stethoscope className="h-5 w-5 text-gray-400" />
                    <select
                      id="specialty"
                      value={specialty}
                      onChange={(e) => setSpecialty(e.target.value)}
                      className="w-full bg-white py-3 outline-none"
                    >
                      {specialties.map((item) => (
                        <option key={item} value={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="doctor" className="mb-2 block text-sm font-semibold text-gray-700">
                    Preferred Doctor
                  </label>
                  <input
                    id="doctor"
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    maxLength={100}
                    placeholder="Doctor name (optional)"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="date" className="mb-2 block text-sm font-semibold text-gray-700">
                    Preferred Date *
                  </label>
                  <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-3">
                    <CalendarDays className="h-5 w-5 text-gray-400" />
                    <input
                      id="date"
                      type="date"
                      min={minDate}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                      className="w-full bg-white py-3 outline-none"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="time" className="mb-2 block text-sm font-semibold text-gray-700">
                    Preferred Time *
                  </label>
                  <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-3">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <select
                      id="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                      className="w-full bg-white py-3 outline-none"
                    >
                      <option value="">Select preferred time</option>
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="03:00 PM">03:00 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                    </select>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    These are sample time options, not verified hospital availability.
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="reason" className="mb-2 block text-sm font-semibold text-gray-700">
                    Reason for Visit
                  </label>
                  <textarea
                    id="reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    maxLength={1000}
                    rows={4}
                    placeholder="Briefly describe the reason for your visit (optional)"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-green-600 px-6 py-4 font-bold text-white shadow-md transition hover:opacity-90"
              >
                Submit Appointment Request
              </button>

              <p className="text-center text-xs leading-5 text-gray-500">
                Demo only: submitting this form does not book or confirm a
                real medical appointment.
              </p>
            </form>
          )}
        </div>
      </section>

      <footer className="bg-gray-950 px-6 py-6 text-center text-sm text-gray-400">
        © 2026 SmartHospital. All rights reserved.
      </footer>
    </main>
  );
}
