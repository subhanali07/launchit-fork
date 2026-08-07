import { data } from '../utils'

export function Clients() {
  return (
    <section className="border-y border-line py-10" aria-label="Selected clients">
      <div className="relative overflow-hidden" style={{ maskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)' }}>
        <div className="flex w-max animate-marquee items-center gap-16 whitespace-nowrap pr-16">
          {[...data.clients, ...data.clients, ...data.clients].map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="label text-ink/45 transition-colors duration-300 hover:text-ink"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
