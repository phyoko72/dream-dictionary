"use client"
export default function error({error}: {error: Error}) {
    return (
        <div className=" h-[calc(100vh-11rem)] flex items-center justify-center">
            <div className=" text-base md:text-2xl font-bold">
                {error.message}
            </div>
        </div>
    )
}
