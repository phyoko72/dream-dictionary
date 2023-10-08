import Link from "next/link"

export default function Header({header}: {header: HeaderType}) {
    return (
        <Link href={`/dreams/${header.BlogId}`}>
            <div className=" w-[80px] h-[80px] border hover:bg-white hover:text-gray-900 rounded-sm flex justify-center items-center ">
                <span className=" text-xl md:text-2xl lg:text-3xl">
                    {header.BlogTitle[2]}
                </span>
            </div>
        </Link>
    )
}
