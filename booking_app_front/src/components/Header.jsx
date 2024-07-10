import { useEffect, useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'







export default function Header() {
  const [isLangOpen, setIsLangOpen] = useState(false);

  const toggleLangMenu = () => {
    setIsLangOpen(!isLangOpen);
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langue, setLangue] = useState(localStorage.getItem("langue") ?? "FR");
  const handleLanguageChange = (newLangue) => {
    localStorage.setItem("langue", newLangue);
    setLangue(localStorage.getItem("langue"))
    console.log('langue changed to :', newLangue);
    window.location.reload();
  };

  return (
    <header className="bg-customBlue text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="flex items-center space-x-4">
            <img className=" w-12" src="LOGO.png" alt="" />
            <h1 className="text-xl ">LA BONNE ADRESSE</h1>
          </a>

        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-md font-medium leading-6 text-white hover:text-Lion transition duration-300 ease-in-out">
            Home
          </a>

          <a href="/Restaurants" className="text-md font-medium leading-6 text-white hover:text-Lion transition duration-300 ease-in-out">
            Restaurants
          </a>
          <a href="/Nights-Club" className="text-md font-medium leading-6 text-white hover:text-Lion transition duration-300 ease-in-out">
            Clubs
          </a>
          <a href="/Activités" className="text-md font-medium leading-6 text-white hover:text-Lion transition duration-300 ease-in-out">
            Activités
          </a>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-10">
          <div>
            langues:
            <Menu as="div" className="relative inline-block ml-3 text-left">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-customBlue text-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300">
                  {langue}
                  <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <button onClick={() => { handleLanguageChange("FR") }} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Français
                  </button>
                  <button onClick={() => { handleLanguageChange("EN") }} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    English
                  </button>
                  <button onClick={() => { handleLanguageChange("ES") }} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Español
                  </button>
                </div>
              </MenuItems>

            </Menu>
          </div>

        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-11 w-auto"
                src="LOGO.png"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-customBlue hover:bg-blue-50"
                >
                  Home
                </a>
                <a
                  href="/Restaurants"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-customBlue hover:bg-blue-50"
                >
                  Restaurants
                </a>
                <a
                  href="/Nights-Club"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-customBlue hover:bg-blue-50"
                >
                  Clubs
                </a>
                <a
                  href="/Activités"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-customBlue hover:bg-blue-50"
                >
                  Activités
                </a>
              </div>
              <div className="py-6">
                <div className="flex justify-between items-center cursor-pointer" onClick={toggleLangMenu}>
                  <span>Langues:</span>
                  {isLangOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {isLangOpen && (
                  <div className="mt-2 space-y-2">
                    <button
                      onClick={() => setLangue("FR")}
                      className="w-full text-left px-4 py-2 text-sm text-gray-900 bg-white hover:bg-gray-100"
                    >
                      Français
                    </button>
                    <button
                      onClick={() => setLangue("EN")}
                      className="w-full text-left px-4 py-2 text-sm text-gray-900 bg-white hover:bg-gray-100"
                    >
                      English
                    </button>
                    <button
                      onClick={() => setLangue("ES")}
                      className="w-full text-left px-4 py-2 text-sm text-gray-900 bg-white hover:bg-gray-100"
                    >
                      Español
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
