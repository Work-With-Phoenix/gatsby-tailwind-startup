import * as React from 'react'
import { Link } from 'gatsby'


const Container = () => {
    return(
        <div className="h-screen pt-16 pb-12 flex flex-col bg-white">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto my-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 flex justify-center">
            <Link to={"https://github.com/Work-With-Phoenix"} target={"_blank"} className="inline-flex">
              <span className="sr-only">Work With Phoenix</span>
              <svg className="h-10 w-10" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M26 32H6C2.686 32 0 29.314 0 26V6C0 2.686 2.686 0 6 0H26C29.314 0 32 2.686 32 6V26C32 29.314 29.314 32 26 32Z" fill="#4338ca"/>
                                       <path d="M25.1459 14.6007C24.9397 15.7519 24.401 16.8449 23.6085 17.7148C23.691 17.296 23.8372 16.8907 23.9122 16.4682C24.0047 15.9242 24.0535 15.3678 23.9747 14.82C23.9035 14.0084 23.636 13.2314 23.3247 12.4829C23.3285 12.7716 23.3697 13.0579 23.3897 13.3466C23.4435 14.6589 23.0497 15.9911 22.251 17.0481C21.4848 18.0841 20.366 18.9069 19.0848 19.1932C18.5211 19.3072 17.8911 19.3035 17.3861 18.9974C16.9111 18.7161 16.6461 18.1832 16.5698 17.6566C16.4636 16.8176 16.6648 15.9663 17.0298 15.2104C17.4748 14.2785 18.1898 13.4767 19.056 12.9017C19.236 12.7778 19.4485 12.6874 19.586 12.5114C20.0798 11.9091 20.586 11.3131 21.1535 10.7753C21.7248 10.204 22.3697 9.71203 22.981 9.18537C21.8623 9.23742 20.7985 9.65255 19.7948 10.1123C18.5673 10.7009 17.4061 11.4209 16.3211 12.2375C15.6336 12.758 14.9849 13.3528 14.1949 13.7258C13.7386 13.9476 13.2199 14.0009 12.7211 13.9352C13.4999 14.2302 14.3649 14.1422 15.1461 13.9055L15.2024 13.8894C15.6861 13.7332 16.1486 13.5325 16.5461 13.3144C16.6211 13.2611 16.7086 13.2896 16.7923 13.3032C16.7886 13.4693 16.8386 13.6713 16.6898 13.794C16.3273 14.167 15.8911 14.4631 15.4424 14.7259C14.9136 15.022 14.3424 15.2587 13.7386 15.3529C13.2411 15.4533 12.7061 15.3492 12.2724 15.0939C11.7012 14.7395 11.4849 14.0356 11.4974 13.4024C11.5387 12.4705 11.9224 11.5808 12.4611 10.8236C13.2824 9.69097 14.4874 8.84335 15.8323 8.41707C16.3736 8.22499 16.9486 8.15683 17.5111 8.04902C16.7436 7.95856 15.9661 7.89412 15.1949 7.97591C14.4224 8.03663 13.6674 8.24358 12.9586 8.54594C12.7536 8.63021 12.5549 8.7343 12.3324 8.77148C13.4586 7.54095 15.0261 6.70325 16.7011 6.49754C17.6523 6.34759 18.6248 6.41327 19.5673 6.59172C18.4811 6.2088 17.3286 5.98823 16.1723 6.0031C13.8699 5.94485 11.5624 6.71068 9.74494 8.09859L9.74369 8.10231C7.59622 9.73186 6.15375 12.2735 6 14.9539V16.1571C6.08 17.3963 6.41749 18.6207 6.99123 19.726C7.79372 21.2825 9.0487 22.6059 10.5612 23.5168C13.4249 25.2839 17.1898 25.4722 20.2485 24.0806C22.171 23.2206 23.806 21.7497 24.8272 19.9317C25.4809 18.7805 25.8734 17.4905 25.9859 16.1782C26.0047 15.69 26.0047 15.1992 25.9859 14.7097C25.8534 13.2537 25.4022 11.8112 24.591 10.5807C25.1684 11.8298 25.3684 13.2462 25.1459 14.6007ZM19.4485 10.582C19.4073 10.7852 19.2398 10.945 19.046 11.0132C18.8435 11.0875 18.6361 11.1545 18.4223 11.1854C18.7498 10.9636 19.101 10.774 19.4485 10.582Z" fill="white"/>
                                   </svg>
            </Link>
          </div>
          <div className="pb-16 pt-8">
            <div className="text-center flex flex-col items-center justify-center">
              <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Now Would you look at that! </p>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">You got started.</h1>
              <p className="mt-2 text-base text-gray-500">Your Gatsby & Tailwind  are now in sync.</p>
              <div className="mt-6">
                <Link to={"https://github.com/Work-With-Phoenix/gatsby-tailwind-startup#readme"} target={"_blank"} className="text-base font-medium text-indigo-600 hover:text-indigo-500 flex space-x-2">
                  <span>Documentation</span>
                  <span><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <footer className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center space-x-4">
          <Link to={"https://github.com/Work-With-Phoenix/.github/blob/main/profile/README.md"} target={"_blank"} className="text-sm font-medium text-gray-500 hover:text-gray-600">
              Community
            </Link>
            <span className="inline-block border-l border-gray-300" aria-hidden="true" />
            <Link to={"https://github.com/Work-With-Phoenix"} target={"_blank"} className="text-sm font-medium text-gray-500 hover:text-gray-600">
              Tutorials
            </Link>
            <span className="inline-block border-l border-gray-300" aria-hidden="true" />
            <Link to={"https://github.com/orgs/Work-With-Phoenix/repositories"} target={"_blank"} className="text-sm font-medium text-gray-500 hover:text-gray-600">
              Resources
            </Link>
          </nav>
        </footer>
      </div>
    )
}

export default Container