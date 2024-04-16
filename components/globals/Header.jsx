import { PhoneIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import LiftedWPBanner from '../../public/images/nextjs_contentful_blog_power.png';
import LiftedFounderAvatar from '../../public/images/liftedwp-founder-avatar.png';

const profile = {
  companyName: 'SEK',
  profileImage: LiftedFounderAvatar,
  coverImage: LiftedWPBanner,
};

export default function Header() {
  return (
    <div>
      <div className='mb-8'>
        <div className='relative h-[30vh] w-full '>
          <Image
            className='object-cover scale-105'
            src={profile.coverImage}
            layout='fill'
            alt={`services offered by ${profile.companyName} - Headless Commerce & CMS Experts`}
          />
        </div>
      </div>
    </div>
  );
}
