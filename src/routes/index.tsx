

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

const services = [
  { name: 'Retwist', price: 15000 },
  { name: 'Dreadlocks Installation', price: 70000 },
  { name: 'Loc Repair', price: 0 },
  { name: 'Loc Styling', price: 0 },
  { name: 'Artificial Locs', price: 0 },
  { name: 'Loc Detox', price: 0 },
]

function Home() {
  function submitBooking(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const selected = form.getAll('services').map(String)

    if (!selected.length) {
      alert('Chagua angalau huduma moja')
      return
    }

    const message = [
      'BOOKING MPYA - BEATUS DREADLOCKS',
      '',
      'Jina: ' + form.get('name'),
      'Simu: ' + form.get('phone'),
      'Huduma: ' + selected.join(', '),
      'Tarehe: ' + form.get('date'),
      'Muda: ' + form.get('time'),
      'Malipo: ' + form.get('payment'),
      'Payment code: ' + (form.get('code') || 'Bado sijalipa'),
      'Maelezo: ' + (form.get('notes') || 'Hakuna'),
      '',
      'Naomba kuthibitishiwa booking yangu.'
    ].join('\n')

    window.open(
      'https://wa.me/255715636213?text=' +
      encodeURIComponent(message),
      '_blank'
    )
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-yellow-600 p-5">
        <h1 className="text-2xl font-black text-yellow-500">
          BEATUS DREADLOCKS
        </h1>
        <p className="text-sm text-gray-400">PREMIUM LOC CARE</p>
        <a href="#booking" className="mt-3 inline-block rounded bg-yellow-500 px-5 py-2 font-bold text-black">
          BOOK NOW
        </a>
      </header>

      <section className="px-5 py-12 text-center">
        <h2 className="text-4xl font-black">
          YOUR LOCS
          <span className="block text-yellow-500">OUR PASSION</span>
        </h2>
        <p className="mt-4 text-gray-400">
          Karibu Beatus Dreadlocks, Ihumwa Dodoma.
          Book huduma yako hapa.
        </p>
      </section>

      <section id="booking" className="mx-auto max-w-xl px-4 pb-12">
        <div className="rounded-xl border border-yellow-600 p-5">
          <h2 className="mb-2 text-2xl font-bold text-yellow-500">
            Book an appointment
          </h2>
          <p className="mb-6 text-sm text-gray-400">
            Jaza taarifa zako na uchague huduma.
          </p>

          <form onSubmit={submitBooking} className="space-y-5">

            <div>
              <label className="mb-2 block">Your name</label>
              <input name="name" required placeholder="Jina lako"
                className="w-full rounded-lg bg-gray-900 p-3" />
            </div>

            <div>
              <label className="mb-2 block">Phone / WhatsApp</label>
              <input name="phone" required type="tel"
                placeholder="07XXXXXXXX"
                className="w-full rounded-lg bg-gray-900 p-3" />
            </div>

            <div>
              <p className="mb-3 font-bold">Services (chagua moja au zaidi)</p>
              <div className="space-y-3">
                {services.map(s => (
                  <label key={s.name}
                    className="flex items-center gap-3 rounded-lg bg-gray-900 p-3">
                    <input type="checkbox" name="services"
                      value={s.name} className="h-5 w-5 accent-yellow-500" />
                    <span className="flex-1">{s.name}</span>
                    <span className="font-bold text-yellow-400">
                      {s.price ? 'TSh ' + s.price.toLocaleString() : 'Bei kuulizia'}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-2 block">Appointment date</label>
              <input name="date" type="date" required
                className="w-full rounded-lg bg-gray-900 p-3" />
            </div>

            <div>
              <label className="mb-2 block">Appointment time</label>
              <input name="time" type="time" required
                className="w-full rounded-lg bg-gray-900 p-3" />
            </div>

            <div>
              <p className="mb-3 font-bold">Payment method</p>
              <label className="mb-3 flex gap-3 rounded-lg bg-gray-900 p-3">
                <input type="radio" name="payment"
                  value="Pay at salon" defaultChecked />
                Lipa saluni
              </label>
              <label className="flex gap-3 rounded-lg bg-gray-900 p-3">
                <input type="radio" name="payment"
                  value="Paid by mobile money" />
                Nimelipa kwa simu
              </label>
              <label className="mb-2 mt-3 block">
                M-Pesa confirmation code
              </label>
              <input name="code" placeholder="Weka transaction code"
                className="w-full rounded-lg bg-gray-900 p-3" />
            </div>

            <div>
              <label className="mb-2 block">Additional information</label>
              <textarea name="notes" rows={3}
                placeholder="Maelezo ya ziada..."
                className="w-full rounded-lg bg-gray-900 p-3" />
            </div>

            <button type="submit"
              className="w-full rounded-lg bg-yellow-500 p-4 font-bold text-black">
              SUBMIT BOOKING
            </button>

            <p className="text-center text-xs text-gray-400">
              Booking yako itatumwa WhatsApp kwa Beatus
              kwa ajili ya kuthibitishwa.
            </p>
          </form>
        </div>
      </section>

      <footer className="border-t border-yellow-600 p-5 text-center text-sm text-gray-400">
        BEATUS DREADLOCKS · Ihumwa, Dodoma
        <p className="mt-2 text-yellow-500">Premium Loc Care</p>
      </footer>
    </main>
  )
}
