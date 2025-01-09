import { Button } from './Button'

export function ContactForm() {
  const inputsClasses =
    'block w-full rounded-md bg-white dark:bg-neutral-800 px-3.5 py-2 text-base text-gray-900 dark:text-neutral-300 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2'
  const labelClasses =
    'block text-sm/6 font-semibold text-gray-900 dark:text-zinc-100'

  return (
    <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <div className="mt-2.5">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="given-name"
              className={inputsClasses}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <div className="mt-2.5">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={inputsClasses}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClasses}>
            Message
          </label>
          <div className="mt-2.5">
            <textarea
              id="message"
              name="message"
              rows={4}
              className={inputsClasses}
              defaultValue={''}
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Button type="submit" className="w-full">
          Let's talk
        </Button>
      </div>
    </form>
  )
}
