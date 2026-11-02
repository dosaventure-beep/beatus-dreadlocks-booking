
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main className="min-h-screen bg-[#101010] text-white">
      <header className="border-b border-yellow-600/30 px-5 py-5">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div>
            <h1 className="text-xl font-black tracking-widest text-yellow-500">
              BEATUS
            </h1>
            <p className="text-xs tracking-[0.25em] text-gray-400">
              DREADLOCKS
            </p>
          </div>
          <a
            href="#booking"
            className="rounded-full bg-yellow-500 px-5 py-2 text-sm font-bold text-black"
          >
            BOOK NOW
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-20 text-center">
        <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-yellow-500">
          PREMIUM LOC CARE
        </p>
        <h2 className="text-4xl font-black leading-tight md:text-6xl">
          WE CARE FOR
          <span className="block text-yellow-500">YOUR LOCS</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-gray-400">
          Karibu BEATUS DREADLOCKS. Pata huduma bora za dreadlocks
          Ihumwa, Dodoma. Chagua huduma na weka miadi yako mtandaoni.
        </p>
        <a
          href="#booking"
          className="mt-8 inline-block rounded-lg bg-yellow-500 px-8 py-4 font-bold text-black"
        >
          WEKA BOOKING
        </a>
      </section>

      <section id="booking" className="mx-auto max-w-2xl px-5 pb-20">
        <div className="rounded-2xl border border-yellow-600/30 bg-[#1b1b1b] p-6 md:p-8">
          <h3 className="text-2xl font-bold text-yellow-500">
            Weka Booking Yako
          </h3>
          <p className="mt-2 text-sm text-gray-400">
            Jaza taarifa zako ili kuomba miadi.
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm">Chagua huduma</label>
              <select
                required
                className="w-full rounded-lg border border-gray-700 bg-[#101010] p-3 text-white"
                defaultValue=""
              >
                <option value="" disabled>Chagua huduma</option>
                <option>Retwist</option>
                <option>Installation</option>
                <option>Loc Repair</option>
                <option>Loc Styling</option>
                <option>Artificial Locs</option>
                <option>Loc Detox</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm">Jina lako</label>
              <input
                required
                type="text"
                placeholder="Andika jina lako"
                className="w-full rounded-lg border border-gray-700 bg-[#101010] p-3 text-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm">Namba ya simu</label>
              <input
                required
                type="tel"
                placeholder="Mfano: 07XXXXXXXX"
                className="w-full rounded-lg border border-gray-700 bg-[#101010] p-3 text-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm">Tarehe unayotaka</label>
              <input
                required
                type="date"
                className="w-full rounded-lg border border-gray-700 bg-[#101010] p-3 text-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm">Muda unaopendelea</label>
              <input
                required
                type="time"
                className="w-full rounded-lg border border-gray-700 bg-[#101010] p-3 text-white"
              />
            </div>

            <button
              type="button"
              disabled
              className="w-full rounded-lg bg-yellow-500 p-4 font-bold text-black opacity-60"
            >
              BOOKING INAUNGANISHWA
            </button>
            <p className="text-center text-xs text-gray-500">
              Mfumo wa kupokea na kuthibitisha booking unaandaliwa.
            </p>
          </form>
        </div>
      </section>

      <footer className="border-t border-yellow-600/30 px-5 py-6 text-center text-sm text-gray-500">
        BEATUS DREADLOCKS · Ihumwa, Dodoma
        <p className="mt-2 text-yellow-500">Premium Loc Care</p>
      </footer>
    </main>
  )
}
