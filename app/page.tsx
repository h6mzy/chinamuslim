'use client'

import { Button, Grid } from 'antd-mobile'
import { project_details } from './_lib/project'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='pad'>
      <section className='text-center'>
        <h1>Welcome to {project_details.title} Apps</h1>
      </section>
      <section className='container'>
        <p>Design and build your web apps with {project_details.title}. Works in all modern browsers.</p>
        <Grid columns={2} gap={12} className='pad-t'>
          <Link href='/about'>
            <Button block fill='outline' style={{ '--border-color': 'var(--adm-color-light)' }}>
              How it works
            </Button>
          </Link>
          <Link href='/contact'>
            <Button block color='primary'>
              Get started
            </Button>
          </Link>
        </Grid>
      </section>
    </main>
  )
}