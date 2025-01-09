import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import { ContactForm } from '@/components/ContactForm'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Tiago Agostinho</title>
        <meta
          name="description"
          content="Contact of Tiago Agostinho React and Outsystems developer"
        />
      </Head>
      <SimpleLayout
        title="Get in touch"
        intro="Have a project in mind or a question to ask? Let’s start the conversation—fill out the form below, and I’ll get back to you shortly."
      >
        <ContactForm />
      </SimpleLayout>
    </>
  )
}
