'use client'
import { Button } from './Button'
import { useForm } from 'react-hook-form'
import { sendEmail } from '@/utils/sendEmail'
import { useState } from 'react'
import { LoadingSpinner } from './LoadingSpinner'
import { useRouter } from 'next/navigation'

export function ContactForm() {
  const inputsClasses =
    'block w-full rounded-md bg-white dark:bg-neutral-800 px-3.5 py-2 text-base text-gray-900 dark:text-neutral-300 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2'
  const labelClasses =
    'block text-sm/6 font-semibold text-gray-900 dark:text-zinc-100'
  const { register, handleSubmit } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  function onSubmit(data) {
    setIsLoading(true)
    sendEmail(data)
      .then(() => {
        setIsLoading(false)
        router.push('/thank-you')
      })
      .catch(() => {
        setIsLoading(false)
      })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto mt-16 max-w-xl sm:mt-20"
    >
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
              {...register('name', { required: true })}
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
              {...register('email', { required: true })}
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
              {...register('message', { required: true })}
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Button type="submit" className="w-full">
          <LoadingSpinner isLoading={isLoading} />
          Let´s talk
        </Button>
      </div>
    </form>
  )
}
