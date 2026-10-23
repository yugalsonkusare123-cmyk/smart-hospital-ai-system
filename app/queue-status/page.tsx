
'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Clock,
  Users,
  Ticket,
  Search,
  CheckCircle,
  Activity,
  ArrowLeft,
  RefreshCw,
} from 'lucide-react';

const initialQueue = [
  { token: 'T-101', name: 'Patient A', department: 'Cardiology', status: 'Completed', wait: 0 },
  { token: 'T-102', name: 'Patient B', department: 'General Medicine', status: 'Serving Now', wait: 0 },
  { token: 'T-103', name: 'Patient C', department: 'Cardiology', status: 'Waiting', wait: 10 },
  { token: 'T-104', name: 'Patient D', department: 'Neurology', status: 'Waiting', wait: 20 },
  { token: 'T-105', name: 'Patient E', department: 'General Medicine', status: 'Waiting', wait: 30 },
  { token: 'T-106', name: 'Patient F', department: 'Orthopedics', status: 'Waiting', wait: 40 },
];

export default function QueueStatusPage() {
  const [token, setToken] = useState('');
  const [searchedToken, setSearchedToken] = useState('');
  const [queue, setQueue] = useState(initialQueue);

  const currentPatient = queue.find(
    (patient) => patient.status === 'Serving Now'
  );

  const waitingCount = queue.filter(
    (patient) => patient.status === 'Waiting'
  ).length;

  const result = queue.find(
    (patient) =>
      patient.token.toLowerCase() === searchedToken.trim().toLowerCase()
  );

  function checkToken() {
    setSearchedToken(token);
  }

  function refreshDemo() {
    setQueue((previousQueue) => {
      const servingIndex = previousQueue.findIndex(
        (patient) => patient.status === 'Serving Now'
      );

      if (servingIndex === -1) return previousQueue;

      return previousQueue.map((patient, index) => {
        if (index === servingIndex) {
          return { ...patient, status: 'Completed' };
        }

        if (index === servingIndex + 1) {
          return { ...patient, status: 'Serving Now', wait: 0 };
        }

        if (patient.status === 'Waiting') {
          return { ...patient, wait: Math.max(0, patient.wait - 10) };
        }

        return patient;
      });
    });
  }

  const statusStyle: Record<string, string> = {
    'Completed': 'bg-green-100 text-green-700',
    'Serving Now': 'bg-blue-100 text-blue-700',
    'Waiting': 'bg-amber-100 text-amber-700',
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
            <Activity size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Smart Hospital Queue Status
          </h1>
          <p className="mt-3 text-gray-600">
            Check your token status and estimated waiting time.
          </p>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                <Ticket size={23} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Now Serving</p>
                <p className="text-2xl font-bold text-gray-900">
                  {currentPatient?.token ?? '—'}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-green-100 p-3 text-green-700">
                <Users size={23} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Patients Waiting</p>
                <p className="text-2xl font-bold text-gray-900">
                  {waitingCount}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-amber-100 p-3 text-amber-700">
                <Clock size={23} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Next Wait Estimate</p>
                <p className="text-2xl font-bold text-gray-900">
                  {queue.find((patient) => patient.status === 'Waiting')?.wait ?? 0} min
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 md:p-8">
          <h2 className="mb-2 text-xl font-bold text-gray-900">
            Check Your Token
          </h2>
          <p className="mb-5 text-sm text-gray-600">
            Enter a demo token, for example T-103.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              value={token}
              onChange={(event) => setToken(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') checkToken();
              }}
              placeholder="Enter token number (e.g. T-103)"
              className="min-w-0 flex-1 rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
            <button
              onClick={checkToken}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <Search size={18} />
              Check Status
            </button>
          </div>

          {searchedToken && (
            <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50 p-4">
              {result ? (
                <>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-sm text-gray-500">Token Number</p>
                      <p className="text-xl font-bold text-gray-900">
                        {result.token}
                      </p>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-sm font-semibold ${statusStyle[result.status]}`}>
                      {result.status}
                    </span>
                  </div>
                  <p className="mt-3 text-gray-700">
                    Department: <strong>{result.department}</strong>
                  </p>
                  <p className="mt-1 text-gray-700">
                    Estimated wait: <strong>{result.wait} minutes</strong>
                  </p>
                </>
              ) : (
                <p className="text-sm text-red-600">
                  Token not found. Try a demo token such as T-102 or T-103.
                </p>
              )}
            </div>
          )}
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 md:p-8">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Live Queue Board
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Sample queue for project demonstration
              </p>
            </div>

            <button
              onClick={refreshDemo}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              <RefreshCw size={16} />
              Advance Demo Queue
            </button>
          </div>

          <div className="space-y-3">
            {queue.map((patient) => (
              <div
                key={patient.token}
                className="flex flex-col gap-3 rounded-xl border border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 font-bold text-blue-700">
                    {patient.token.split('-')[1]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {patient.token}
                    </p>
                    <p className="text-sm text-gray-500">
                      {patient.department}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle[patient.status]}`}>
                    {patient.status}
                  </span>
                  <span className="text-sm text-gray-600">
                    {patient.status === 'Completed' ? (
                      <span className="inline-flex items-center gap-1">
                        <CheckCircle size={15} />
                        Done
                      </span>
                    ) : patient.status === 'Serving Now' ? (
                      'Please proceed'
                    ) : (
                      `~${patient.wait} min wait`
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-6 text-center text-xs leading-5 text-gray-500">
          Demo only: queue details are sample data stored in page state.
          They are not real patient records and do not update from a hospital
          database. Waiting times are estimates, not medical guidance.
        </p>
      </div>
    </main>
  );
}
