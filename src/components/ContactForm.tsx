import { useState, type FormEvent } from 'react'

const businessNeeds = [
  'Corporate Strategy & Consulting',
  'Mergers & Acquisitions (M&A)',
  'Turnkey Project Management',
  'White-Label Solutions',
  'General Advisory',
]

const turnoverBands = [
  'Under ₹10 Crores',
  '₹10 - ₹50 Crores',
  '₹50 - ₹100 Crores',
  'Above ₹100 Crores',
]

const fieldClass =
  'mt-2 w-full border border-white/15 bg-navy-950 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-gold-400'

function ContactForm() {
  const [fullName, setFullName] = useState('')
  const [designation, setDesignation] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [businessNeed, setBusinessNeed] = useState('')
  const [turnover, setTurnover] = useState('')
  const [challenge, setChallenge] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6" noValidate={false}>
      <label className="block text-sm font-medium text-zinc-200">
        Full Name
        <input
          required
          type="text"
          name="fullName"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          className={fieldClass}
        />
      </label>
      <label className="block text-sm font-medium text-zinc-200">
        Designation / Job Title
        <input
          required
          type="text"
          name="designation"
          value={designation}
          onChange={(event) => setDesignation(event.target.value)}
          className={fieldClass}
        />
      </label>
      <label className="block text-sm font-medium text-zinc-200">
        Company Name
        <input
          required
          type="text"
          name="companyName"
          value={companyName}
          onChange={(event) => setCompanyName(event.target.value)}
          className={fieldClass}
        />
      </label>
      <label className="block text-sm font-medium text-zinc-200">
        Official Email Address
        <input
          required
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={fieldClass}
        />
      </label>
      <label className="block text-sm font-medium text-zinc-200">
        Phone Number
        <input
          required
          type="tel"
          name="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className={fieldClass}
        />
      </label>
      <label className="block text-sm font-medium text-zinc-200">
        Primary Business Need
        <select
          required
          name="businessNeed"
          value={businessNeed}
          onChange={(event) => setBusinessNeed(event.target.value)}
          className={fieldClass}
        >
          <option value="" disabled>
            Select a focus area
          </option>
          {businessNeeds.map((need) => (
            <option key={need} value={need}>
              {need}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-medium text-zinc-200">
        Current Annual Turnover
        <select
          name="turnover"
          value={turnover}
          onChange={(event) => setTurnover(event.target.value)}
          className={fieldClass}
        >
          <option value="">Prefer not to say</option>
          {turnoverBands.map((band) => (
            <option key={band} value={band}>
              {band}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-medium text-zinc-200">
        What is the single biggest operational or strategic challenge your
        business is facing right now?
        <textarea
          required
          name="challenge"
          rows={6}
          value={challenge}
          onChange={(event) => setChallenge(event.target.value)}
          className={`${fieldClass} resize-y`}
        />
      </label>
      <button
        type="submit"
        className="mt-2 inline-flex w-fit items-center bg-gold-400 px-7 py-3 text-sm font-semibold tracking-wide text-navy-950 transition hover:bg-gold-300"
      >
        Submit Diagnostic
      </button>
    </form>
  )
}

export default ContactForm
