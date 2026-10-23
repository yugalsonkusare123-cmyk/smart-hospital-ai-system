
'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Heart, Video, CalendarDays, Clock, UserRound,
  ArrowLeft, ShieldCheck, MessageCircle, CheckCircle,
  Stethoscope, MonitorSmartphone
} from 'lucide-react';

const doctors = [
  { name: 'Dr. Amit Sharma', specialty: 'General Medicine' },
  { name: 'Dr. Priya Verma', specialty: 'Cardiology' },
  { name: 'Dr. Rahul Patil', specialty: 'Orthopedics' },
  { name: 'Dr. Neha Gupta', specialty: 'Pediatrics' },
  { name: 'Dr. Sneha Joshi', specialty: 'Neurology' },
];

export default function TelemedicinePage() {
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

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
          <Link href="/" className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </header>

      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              <Video className="h-4 w-4" /> Virtual Healthcare
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              Healthcare from
              <span className="block text-blue-600">Where You Are</span>
            </h1>

            <p className="mt-5 max-w-xl leading-7 text-gray-600">
              Explore remote consultation options through SmartHospital.
              Choose a doctor and request a preferred time for an online
              consultation.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                Patient-focused consultation workflow
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <CalendarDays className="h-5 w-5 text-blue-600" />
                Choose your preferred date and time
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MessageCircle className="h-5 w-5 text-purple-600" />
                Share the reason for your consultation
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-green-500 p-6 shadow-xl md:p-10">
            <div className="rounded-2xl bg-white p-6 text-center md:p-8">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                <MonitorSmartphone className="h-10 w-10 text-blue-600" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-gray-900">
                Virtual Consultation
              </h2>
              <p className="mt-3 leading-6 text-gray-600">
                Request an online consultation with your preferred doctor.
              </p>
              <a
                href="#consultation-form"
                className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Request Consultation
              </a>
              <p className="mt-4 text-xs text-gray-500">
                Video calling is not enabled in this demo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="consultation-form" className="px-5 pb-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-100 bg-white p-6 shadow-lg md:p-9">
          {submitted ? (
            <div className="py-8 text-center">
              <CheckCircle className="mx-auto h-16 w-16 text-green-600" />
              <h2 className="mt-5 text-2xl font-bold text-gray-900">
                Consultation Request Prepared
              </h2>
              <p className="mt-3 leading-7 text-gray-600">
                Your preferred details have been collected in this demo.
                No appointment has been booked and no doctor has been notified.
              </p>
              <div className="mt-6 rounded-xl bg-gray-50 p-5 text-left text-sm leading-7 text-gray-700">
                <p><strong>Doctor:</strong> {doctor}</p>
                <p><strong>Date:</strong> {date}</p>
                <p><strong>Time:</strong> {time}</p>
                <p><strong>Reason:</strong> {reason || 'Not provided'}</p>
              </div>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Edit Request
              </button>
            </div>
          ) : (
            <>
              <div className="mb-7">
                <h2 className="text-2xl font-bold text-gray-900">
                  Request a Telemedicine Consultation
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Select your preferred doctor and consultation time.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="doctor" className="mb-2 block text-sm font-semibold text-gray-700">
                    Select Doctor *
                  </label>
                  <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-3">
                    <Stethoscope className="h-5 w-5 text-gray-400" />
                    <select
                      id="doctor"
                      value={doctor}
                      onChange={(e) => setDoctor(e.target.value)}
                      required
                      className="w-full bg-white py-3 outline-none"
                    >
                      <option value="">Choose a doctor</option>
                      {doctors.map((item) => (
                        <option key={item.name} value={item.name}>
                          {item.name} — {item.specialty}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="date" className="mb-2 block text-sm font-semibold text-gray-700">
                      Preferred Date *
                    </label>
                    <input
                      id="date"
                      type="date"
                      min={minDate}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="mb-2 block text-sm font-semibold text-gray-700">
                      Preferred Time *
                    </label>
                    <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3">
                      <Clock className="h-5 w-5 text-gray-400" />
                      <select
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                        className="w-full bg-white py-3 outline-none"
                      >
                        <option value="">Select time</option>
                        <option>09:00 AM</option>
                        <option>10:00 AM</option>
                        <option>11:00 AM</option>
                        <option>12:00 PM</option>
                        <option>02:00 PM</option>
                        <option>03:00 PM</option>
                        <option>04:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="reason" className="mb-2 block text-sm font-semibold text-gray-700">
                    Reason for Consultation
                  </label>
                  <textarea
                    id="reason"
                    rows={4}
                    maxLength={1000}
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Briefly describe why you want a consultation"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-green-600 px-6 py-4 font-bold text-white shadow-md hover:opacity-90"
                >
                  Submit Consultation Request
                </button>

                <p className="text-xs leading-5 text-gray-500">
                  Demo only. This form does not connect to a real doctor,
                  save to a database, or start a video call.
                </p>
              </form>
            </>
          )}
        </div>
      </section>

      <footer className="bg-gray-950 px-6 py-6 text-center text-sm text-gray-400">
        © 2026 SmartHospital. All rights reserved.
      </footer>
    </main>
  );
}
