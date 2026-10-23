
'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Search,
  ShoppingCart,
  Pill,
  Plus,
  Minus,
  Trash2,
  PackageCheck,
  ShieldCheck,
} from 'lucide-react';

type Medicine = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  stock: number;
  prescriptionRequired: boolean;
};

const medicines: Medicine[] = [
  {
    id: 1,
    name: 'Paracetamol',
    category: 'Pain Relief',
    description: 'Common pain and fever relief medicine',
    price: 20,
    stock: 25,
    prescriptionRequired: false,
  },
  {
    id: 2,
    name: 'Vitamin C',
    category: 'Vitamins',
    description: 'Vitamin supplement',
    price: 60,
    stock: 18,
    prescriptionRequired: false,
  },
  {
    id: 3,
    name: 'ORS Sachets',
    category: 'Wellness',
    description: 'Oral rehydration salts',
    price: 25,
    stock: 30,
    prescriptionRequired: false,
  },
  {
    id: 4,
    name: 'Cetirizine',
    category: 'Allergy Care',
    description: 'Antihistamine medicine',
    price: 35,
    stock: 12,
    prescriptionRequired: false,
  },
  {
    id: 5,
    name: 'Amoxicillin',
    category: 'Antibiotics',
    description: 'Antibiotic — prescription required',
    price: 90,
    stock: 8,
    prescriptionRequired: true,
  },
  {
    id: 6,
    name: 'Blood Pressure Medicine',
    category: 'Prescription',
    description: 'Example listing; medicine requires a prescription',
    price: 120,
    stock: 0,
    prescriptionRequired: true,
  },
];

export default function PharmacyPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [cart, setCart] = useState<Record<number, number>>({});
  const [message, setMessage] = useState('');

  const categories = [
    'All',
    ...Array.from(new Set(medicines.map((medicine) => medicine.category))),
  ];

  const filteredMedicines = useMemo(() => {
    return medicines.filter((medicine) => {
      const matchesSearch =
        medicine.name.toLowerCase().includes(search.toLowerCase()) ||
        medicine.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === 'All' || medicine.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const cartItems = medicines.filter((medicine) => cart[medicine.id] > 0);

  const cartCount = Object.values(cart).reduce(
    (total, quantity) => total + quantity,
    0
  );

  const total = cartItems.reduce(
    (sum, medicine) => sum + medicine.price * cart[medicine.id],
    0
  );

  function addToCart(medicine: Medicine) {
    setMessage('');

    if (medicine.stock === 0) {
      setMessage('This item is currently out of stock.');
      return;
    }

    if (medicine.prescriptionRequired) {
      setMessage(
        `${medicine.name} requires a valid prescription. This demo cannot accept or verify prescriptions.`
      );
      return;
    }

    if ((cart[medicine.id] || 0) >= medicine.stock) {
      setMessage('Demo stock limit reached for this item.');
      return;
    }

    setCart((previous) => ({
      ...previous,
      [medicine.id]: (previous[medicine.id] || 0) + 1,
    }));
  }

  function changeQuantity(id: number, amount: number) {
    setCart((previous) => {
      const nextQuantity = (previous[id] || 0) + amount;
      const medicine = medicines.find((item) => item.id === id);

      if (nextQuantity <= 0) {
        const updated = { ...previous };
        delete updated[id];
        return updated;
      }

      if (!medicine || nextQuantity > medicine.stock) return previous;

      return { ...previous, [id]: nextQuantity };
    });
  }

  function removeFromCart(id: number) {
    setCart((previous) => {
      const updated = { ...previous };
      delete updated[id];
      return updated;
    });
  }

  function placeDemoOrder() {
    if (cartCount === 0) {
      setMessage('Your cart is empty. Add an available item first.');
      return;
    }

    setMessage(
      `Demo order prepared for ₹${total}. No payment or real medicine order was placed.`
    );
    setCart({});
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <header className="mb-8 rounded-3xl bg-gradient-to-r from-blue-700 to-emerald-600 p-7 text-white shadow-lg md:p-10">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm">
                <Pill size={16} />
                Smart Hospital Pharmacy
              </div>
              <h1 className="text-3xl font-bold md:text-4xl">
                Pharmacy & Medicine Store
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-blue-50 md:text-base">
                Browse the sample medicine catalogue and manage your demo cart.
              </p>
            </div>

            <div className="flex w-fit items-center gap-3 rounded-2xl bg-white/15 p-4">
              <ShoppingCart size={28} />
              <div>
                <p className="text-sm text-blue-50">Cart Items</p>
                <p className="text-2xl font-bold">{cartCount}</p>
              </div>
            </div>
          </div>
        </header>

        <div className="mb-6 grid gap-4 md:grid-cols-[1fr_auto]">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search medicines..."
              className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-4 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none focus:border-blue-500"
            aria-label="Filter by medicine category"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[1fr_320px]">
          <section>
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-gray-900">
                Medicine Catalogue
              </h2>
              <span className="text-sm text-gray-500">
                {filteredMedicines.length} items
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {filteredMedicines.map((medicine) => (
                <article
                  key={medicine.id}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="rounded-xl bg-blue-50 p-3 text-blue-700">
                      <Pill size={25} />
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        medicine.stock > 0
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {medicine.stock > 0 ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                    {medicine.category}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-gray-900">
                    {medicine.name}
                  </h3>
                  <p className="mt-2 min-h-10 text-sm leading-5 text-gray-500">
                    {medicine.description}
                  </p>

                  {medicine.prescriptionRequired && (
                    <p className="mt-3 text-xs font-medium text-amber-700">
                      Prescription required
                    </p>
                  )}

                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
                    <div>
                      <p className="text-xl font-bold text-gray-900">
                        ₹{medicine.price}
                      </p>
                      <p className="text-xs text-gray-500">
                        Demo price only
                      </p>
                    </div>

                    <button
                      onClick={() => addToCart(medicine)}
                      disabled={
                        medicine.stock === 0 ||
                        medicine.prescriptionRequired
                      }
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
                    >
                      <Plus size={16} />
                      {medicine.prescriptionRequired
                        ? 'Prescription'
                        : 'Add'}
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {filteredMedicines.length === 0 && (
              <div className="rounded-2xl bg-white p-10 text-center text-gray-500">
                No medicines match your search.
              </div>
            )}
          </section>

          <aside className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm lg:sticky lg:top-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-green-100 p-3 text-green-700">
                <ShoppingCart size={22} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Your Cart
                </h2>
                <p className="text-sm text-gray-500">
                  {cartCount} item(s)
                </p>
              </div>
            </div>

            {cartItems.length === 0 ? (
              <p className="rounded-xl bg-gray-50 p-5 text-center text-sm text-gray-500">
                Your cart is empty. Add an available item to get started.
              </p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((medicine) => (
                  <div
                    key={medicine.id}
                    className="border-b border-gray-100 pb-4"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-semibold text-gray-900">
                          {medicine.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          ₹{medicine.price} each
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(medicine.id)}
                        aria-label={`Remove ${medicine.name}`}
                        className="rounded-lg p-2 text-red-500 hover:bg-red-50"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => changeQuantity(medicine.id, -1)}
                          aria-label="Decrease quantity"
                          className="rounded-lg border border-gray-200 p-1.5 hover:bg-gray-50"
                        >
                          <Minus size={15} />
                        </button>
                        <span className="min-w-4 text-center font-semibold">
                          {cart[medicine.id]}
                        </span>
                        <button
                          onClick={() => changeQuantity(medicine.id, 1)}
                          aria-label="Increase quantity"
                          disabled={cart[medicine.id] >= medicine.stock}
                          className="rounded-lg border border-gray-200 p-1.5 hover:bg-gray-50 disabled:opacity-40"
                        >
                          <Plus size={15} />
                        </button>
                      </div>
                      <p className="font-semibold text-gray-900">
                        ₹{medicine.price * cart[medicine.id]}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="flex items-center justify-between pt-1">
                  <span className="font-semibold text-gray-700">
                    Demo Total
                  </span>
                  <span className="text-2xl font-bold text-gray-900">
                    ₹{total}
                  </span>
                </div>

                <button
                  onClick={placeDemoOrder}
                  className="w-full rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white transition hover:bg-emerald-700"
                >
                  Prepare Demo Order
                </button>
              </div>
            )}

            {message && (
              <p
                role="status"
                className="mt-4 rounded-xl bg-blue-50 p-3 text-sm leading-5 text-blue-800"
              >
                {message}
              </p>
            )}

            <div className="mt-5 flex items-start gap-2 rounded-xl bg-amber-50 p-3 text-xs leading-5 text-amber-900">
              <ShieldCheck size={18} className="shrink-0" />
              <p>
                Sample catalogue only. Not a real pharmacy or prescription
                service. Consult a qualified healthcare professional before
                taking medicines.
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-green-100 bg-green-50 p-5">
          <PackageCheck className="shrink-0 text-green-700" size={24} />
          <div>
            <h3 className="font-semibold text-green-900">
              Pharmacy demo ready
            </h3>
            <p className="mt-1 text-sm leading-6 text-green-800">
              Search, category filters and cart quantities work in this page.
              Orders, payments, stock and prescriptions are not connected to a
              real backend.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
