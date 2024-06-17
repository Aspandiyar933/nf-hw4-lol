/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/eyZsCOuN3Cx
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Gabarito } from 'next/font/google'
import { Comfortaa } from 'next/font/google'

gabarito({
  subsets: ['latin'],
  display: 'swap',
})

comfortaa({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
export function LoadingPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-white dark:bg-gray-950">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative h-12 w-12 animate-pulse">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50 blur-xl" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-spin" />
        </div>
        <p className="text-sm font-medium text-gray-400">Loading...</p>
      </div>
    </div>
  )
}
