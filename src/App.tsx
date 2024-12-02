// import reactLogo from "./assets/react.svg"; 
import { invoke } from "@tauri-apps/api/core";
import { useEffect, useRef, useState } from "react";
import { convertFileSrc } from '@tauri-apps/api/core';
import {
    BellIcon,
    Cog6ToothIcon,
    HomeIcon,
} from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { open } from '@tauri-apps/plugin-dialog';

const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

function Image({ file, className }: { file: any, className: string }) {
    const tauriSrc = file.file_type == "IMG" ? convertFileSrc(file.src) : "";

    return (
        <img
            alt=""
            className={className}
            src={tauriSrc}
        />
    )
}

function App() {
    const [path, setPath] = useState([]);
    const [fileCount, setFileCount] = useState(0);
    const [files, setFiles] = useState<any[]>([]);

    async function handleSelectDir() {
        const path = await open({
            multiple: false,
            directory: true,
        });
        const files: any[] = await invoke("start_conversion", { path });
        setFiles(files);

        console.log("path: ", path, "files: ", files);
    }

    // const [greetMsg, setGreetMsg] = useState("");
    // const [name, setName] = useState("");

    // async function greet() {
    //   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    //   setGreetMsg(await invoke("greet", { name }));
    // }

    return (
        <div className="grid grid-cols-[200px_1fr] h-screen overflow-hidden">
            <div className="inset-y-0 flex flex-col">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-zinc-950 px-6 pb-4">
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
                            <button onClick={handleSelectDir}>Select</button>
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

            <div className="">
                <div className="z-40 mx-auto px-8">
                    <div className="flex h-16 items-center gap-x-4 border-b border-zinc-950 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none">
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

                <main className="bg-zinc-950 h-full overflow-x-auto">
                    <div className="">
                        <ul role="list" className="grid grid-cols-2 gap-x-px gap-y-px sm:grid-cols-3 lg:grid-cols-4">
                            {files.map((file) => (
                                <li key={file.src} className="flex flex-col bg-zinc-900 h-[20vw] p-1">
                                    <div>
                                        <p className="truncate text-sm text-gray-500">{file.stem}</p>
                                    </div>
                                    <div className="group overflow-hidden">
                                        <Image
                                            file={file}
                                            className="aspect-auto m-auto object-contain group-hover:opacity-75 h-full"
                                        />
                                    </div>
                                    <p className="block text-sm font-medium text-gray-500 mt-auto">{file.ext}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
