import { Fragment, useRef, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import Config from '../../../../../resources/settings.json'


interface Items {
  id: number
  name: string
  style: string
}

interface SelectMenuProps{
  TitleOption: string,
  Items: Items[]
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SelectMenu({ TitleOption, Items }: SelectMenuProps) {
  const [selected, setSelected] = useState(Items.length > 0 ? Items[0] : null);
  const styleRef = useRef<HTMLStyleElement>();
  const [configStyle, setconfigStyle] = useState(Config.font.family)

  const saveSelectedFontToSettings = (fontStyle: string) => {

    window.electron.ipcRenderer.send('updateSettings', fontStyle);
  }


  const handleClick = (item) => {
    setSelected(item);
    if (!styleRef.current) {
      styleRef.current = document.createElement('style');
      document.head.appendChild(styleRef.current);
    }
    styleRef.current.innerHTML = `* { font-family: ${item.style} !important; }`;
    saveSelectedFontToSettings(item.name)
  };

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-zinc-300 mr-28">{TitleOption}</Listbox.Label>
          <div className="relative mt-2 w-56">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-black/35 py-1.5 pl-3 pr-10 text-left text-gray-100 shadow-sm ring-1 ring-inset ring-black/30 focus:outline-none focus:ring-2  sm:text-sm sm:leading-6">
              <span className="flex items-center">
                {/* <img src={selected.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
                <span className="ml-3 block truncate">{selected?.name}</span> {/* Usamos optional chaining (?) */}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Listbox.Options className="absolute z-10 mt-1 backdrop max-h-56 w-full overflow-auto rounded-md bg-black/90 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {Items.map((item) => (
                  <Listbox.Option
                    key={item.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'gradient-color text-white' : 'text-zinc-300',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={item}
                    onClick={() => handleClick(item)}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          {/* <img src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {item.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-[#FF9800]',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
