import { FOOTER_LINKS } from '@/constants'
import { link } from 'fs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-2 border-green-500 flexCenter mb-24'>
       <div className='border-2 border-blue-500 padding-container max-container flex w-full flex-col gap-14'>     
          <div className='border-2 border-red-500 flex flex-col items-start justify-center gap-[10%] md:flex-row'>
            <Link href="/" className='mb-10'>
                <Image 
                  src="hilink-logo.svg" 
                  alt='logo'
                  width={74}
                  height={29}
                />
            </Link>
            <div className='border-2 border-yellow-500 flex flex-wrap gap-10 sm:justify-between md:flex-1'>
              {
                FOOTER_LINKS.map((columns) => (
                   <FooterColumn title={columns.title}>
                        <ul className='regulae-14 flex flex-col gap-4 text-gray-30'>
                           {columns.links.map((link) => (
                              <Link href="/" key={link}>
                                {link}
                              </Link>
                           ))}
                        </ul>
                   </FooterColumn>
                ))
              }

            </div>
          </div>  
       </div>
    </footer>
  )
}

type FooterColunmProps = {
  title: string;
  children: React.ReactNode
}


const  FooterColumn = ({ title , children } : FooterColunmProps ) => {
  return (
    <div>
       <h4>{title}</h4>
       {children}
    </div>
  )
}

export default Footer