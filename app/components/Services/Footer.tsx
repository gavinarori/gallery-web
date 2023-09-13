import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-100'>
        <div className="p-6 text-center text-slate-900 sm:p-12">
        Proudly developed by{' '}
        <a
          href="https://gavin-arori-porforlio.vercel.app/"
          target="_blank"
          className="font-semibold hover:text-white"
          rel="noreferrer"
        >
          Gavin Arori
        </a>
        ,UI{' '}
        <a
          href=""
          target="_blank"
          className="font-semibold hover:text-slate-200"
          rel="noreferrer"
        >
          Front-end developer
        </a>
        , and{' '}
        <a
          href="https://unsplash.com/"
          target="_blank"
          className="font-semibold hover:text-white"
          rel="noreferrer"
        >
          Unsplash
        </a>{' '}
        for the pictures.
      </div>
    </div>
  )
}

export default Footer;