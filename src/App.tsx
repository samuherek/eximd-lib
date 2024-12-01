// import reactLogo from "./assets/react.svg"; import { invoke } from "@tauri-apps/api/core";
import {
    BellIcon,
    Cog6ToothIcon,
    HomeIcon,
} from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const files = [
    {
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
            'https://plus.unsplash.com/premium_photo-1731860726887-6b1cb8129b0f?&auto=format&fit=crop&w=512&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
            'https://images.unsplash.com/photo-1731902062604-51bb7926e6d5?&auto=format&fit=crop&w=512&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
]

const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}



function App() {
    // const [greetMsg, setGreetMsg] = useState("");
    // const [name, setName] = useState("");

    // async function greet() {
    //   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    //   setGreetMsg(await invoke("greet", { name }));
    // }

    return (
        <>
            {/*
        This example requires updating your template:

        ```
       <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
            <div className="hidden sm:fixed sm:inset-y-0 sm:z-50 sm:flex sm:w-56 sm:flex-col">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-zinc-800 px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                        <span className="text-zinc-50 font-bold">Eximd</span>
                    </div>
                    <nav className="flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-zinc-800 text-zinc-50'
                                                        : 'text-zinc-500 hover:bg-zinc-800 hover:text-zinc-50',
                                                    'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                )}
                                            >
                                                <item.icon
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        item.current ? 'text-zinc-50' : 'text-zinc-600 group-hover:text-zinc-50',
                                                        'size-6 shrink-0',
                                                    )}
                                                />
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="mt-auto">
                                <a
                                    href="#"
                                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                                >
                                    <Cog6ToothIcon
                                        aria-hidden="true"
                                        className="size-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                                    />
                                    Settings
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="sm:pl-56">
                <div className="sticky top-0 z-40 sm:mx-auto sm:max-w-7xl sm:px-8">
                    <div className="flex h-16 items-center gap-x-4 border-b border-zinc-800 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none">
                        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                            <form action="#" method="GET" className="grid flex-1 grid-cols-1">
                                <input
                                    name="search"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    className="col-start-1 row-start-1 block bg-zinc-900 size-full pl-8 text-base text-zinc-50 outline-none placeholder:text-zinc-400 sm:text-sm/6"
                                />
                                <MagnifyingGlassIcon
                                    aria-hidden="true"
                                    className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"
                                />
                            </form>
                            <div className="flex items-center gap-x-4 lg:gap-x-6">
                                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon aria-hidden="true" className="size-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <main className="py-10 ">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <ul role="list" className="grid grid-cols-2 gap-x-px gap-y-px sm:grid-cols-3 lg:grid-cols-4">
                            {files.map((file) => (
                                <li key={file.source} className="relative bg-zinc-800">
                                    <p className="block truncate text-sm text-gray-500">{file.title}</p>
                                    <div className="group overflow-hidden">
                                        <img
                                            alt=""
                                            src={file.source}
                                            className="h-1/4 aspect-auto m-auto object-contain group-hover:opacity-75 h-full"
                                        />
                                    </div>
                                    <p className="block text-sm font-medium text-gray-500">sss</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </main>
            </div>
        </>
    );
}

export default App;
