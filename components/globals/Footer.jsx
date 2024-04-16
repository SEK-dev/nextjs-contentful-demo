import { FaYoutube, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
// import LiftedLogo from '../../public/images/logo-symbolic-main-512.png'
import Image from 'next/image'

const navigation = {
  social: [
    {
      name: 'Youtube',
      href: 'https://www.youtube.com/channel/UCZSFuQ0eoDxe8WXbt_th9zA',
      icon: props => <FaYoutube />,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/lifteddotsite',
      icon: props => <FaTwitter />,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/lifteddotsite/',
      icon: props => <FaGithub />,
    },

    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/lifteddotsite',
      icon: props => <FaLinkedin />,
    },
  ],
}

const footerData = {
  callToActionURL: 'https://lifted.site/contact',
}

export default function Footer() {
  return (
    <footer className='bg-white'>
      <div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
        <p className='text-center text-base text-gray-400'>
          {footerData.followMessage}
        </p>
        <div className='mt-2 flex justify-center space-x-6'>
          {navigation.social.map(item => (
            <a
              key={item.name}
              href={item.href}
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>{item.name}</span>
              <item.icon className='h-6 w-6' aria-hidden='true' />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
