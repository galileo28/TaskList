import Link from 'next/link'

export default function AccountManagementLink ({ text, textLink, href }) {
  return (
    <div className='flex items-center justify-between'>
      <div className='text-sm ml-2'>
        <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
          {text}{' '}
          <Link href={href} className='font-medium text-purple-600 hover:text-purple-500'>
            {textLink}
          </Link>
        </p>
      </div>
    </div>
  )
}
