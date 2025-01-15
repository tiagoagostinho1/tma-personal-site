import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'
import { Button } from '@/components/Button'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>You’re contacted - Tiago Agostinho</title>
        <meta name="description" content="Thanks for your contact." />
      </Head>
      <SimpleLayout
        title="Thanks for your contact."
        intro="Thank you for reaching out! I’ve received your message and will get back to you as soon as possible."
      >
        <Button variant="secondary" href="/">
          Get back to homepage
        </Button>
      </SimpleLayout>
    </>
  )
}
