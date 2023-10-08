"use client"
import {useEffect, useState, ChangeEvent} from "react"
import data from "@/data/DreamDictionary.json"
import Detail from "../components/Detail"

export default function Search() {
    const [text, setText] = useState("")
    const [title, setTitle] = useState<string | null>(null)
    const [isError, setIsError] = useState(false)
    const [result, setResult] = useState<DetailType[] | null>(null)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value.trim())
    }

    const searching: (x: string) => void = (x) => {
        setIsError(false)
        setResult(null)
        setTitle(null)
        const inputText = x[0]
        const foundHeader = data.BlogHeader.find(
            (blog) => blog.BlogTitle[2] === inputText
        )

        if (!foundHeader) {
            return setIsError(true)
        }

        setTitle(foundHeader.BlogTitle)

        const finalResult = data.BlogDetail.filter(
            (blog) => blog.BlogId === foundHeader.BlogId
        )

        setResult(finalResult)
        setText("")
    }
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (text) searching(text)
        }, 1000)

        return () => clearTimeout(timeout)
    }, [text])
    return (
        <div>
            <input
                type="text"
                name=""
                id=""
                className=" bg-transparent border p-2 rounded my-5 w-full lg:w-3/4 text-base"
                placeholder="ရှာဖွေရန်"
                autoFocus
                value={text}
                onChange={handleChange}
            />

            {isError && (
                <h1 className=" mt-5 text-2xl font-bold">NOT FOUND!</h1>
            )}

            {title && <h1 className="title mb-5">{title}</h1>}

            {result &&
                result.map((detail, index) => (
                    <Detail
                        index={index}
                        key={detail.BlogDetailId}
                        detail={detail}
                    />
                ))}
        </div>
    )
}
