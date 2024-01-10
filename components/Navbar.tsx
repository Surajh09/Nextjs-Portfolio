"use client"
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Suraj Hemnani', href: '/', current: true },
  { name: 'About', href: '#about', current: false },
  { name: 'Skills', href: '#skills', current: false },
  { name: 'Projects', href: '#project', current: false },
  { name: 'Experince', href: '#experince', current: false },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar(mailto: any, label: any) {
  return (
    <Disclosure as="nav" className="bg-gradient-tt from-white/40 backdrop-blur shadow-lg shadow-blue-400 fixed w-full h-16 inset-0 z-[50]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-blue-400 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">

                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-blue-900/50 backdrop-blur text-white' : 'text-blue-300 hover:bg-blue-700/50 backdrop-blur hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-xl bg-blue-700/70 p-1 backdrop-blur text-sm hover">
                      <span className="absolute -inset-1.5" />
                      <span className="text-zinc-300 font-bold rounded-lg p-2">Find Me Here</span>
                      
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-blue-600  text-gray-100 text-gray-100 text-gray-100 text-gray-100 text-gray-100 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="https://www.linkedin.com/in/suraj-hemnani-b4623a251"
                            className={classNames(active ? 'bg-white text-blue-700' : '', 'block px-4 py-2 text-sm')}
                          >
                            LinkedIn
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="mailto:surajhemnani04@gmail.com"
                            target={"_blank"}
                            rel="noreferrer"
                            className={classNames(active ? 'bg-white text-blue-700' : '', 'block px-4 py-2 text-sm')}
                          >Email
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="https://www.github.com/surajh09"
                            className={classNames(active ? 'bg-white text-blue-700' : '', 'block px-4 py-2 text-sm')}
                          >
                            GitHub
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-white text-blue-700' : '', 'block px-4 py-2 text-sm')}
                          >
                            Instagram
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="https://www.youtube.com/@SurajHemnani9124"
                            className={classNames(active ? 'bg-white text-blue-700' : '', 'block px-4 py-2 text-sm')}
                          >
                            Youtube
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-blue-900/50 backdrop-blur text-white' : 'text-blue-300 hover:bg-blue-700/50 backdrop-blur hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
