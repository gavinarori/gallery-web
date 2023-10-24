import React from 'react'

const Footer = () => {
  return (
    <div className=''>
        <div className="p-6 text-center  sm:p-12">
        Proudly developed by{' '}
        <a
          href="https://gavin-arori-porforlio.vercel.app/"
          target="_blank"
          className="font-semibold "
          rel="noreferrer"
        >
          Gavin Arori
        </a>
        ,UI{' '}
        <a
          href=""
          target="_blank"
          className="font-semibold "
          rel="noreferrer"
        >
          Front-end developer
        </a>
        , and{' '}
        <a
          href="https://unsplash.com/"
          target="_blank"
          className="font-semibold "
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