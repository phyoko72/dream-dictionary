import Detail from "@/app/components/Detail"
import data from "@/data/DreamDictionary.json"
import {notFound} from "next/navigation"
export default function Dream({
    params: {dreamId},
}: {
    params: {dreamId: number}
}) {
    const header = data.BlogHeader.find(
        (head) => head.BlogId === Number(dreamId)
    )
    if (!header) {
        notFound()
    }
    const selection: DetailType[] = data.BlogDetail.filter(
        (blog) => blog.BlogId === Number(dreamId)
    )

    return (
        <>
            <h1 className="title">{header.BlogTitle}</h1>
            {selection.map((detail, index) => (
                <Detail
                    index={index}
                    key={detail.BlogDetailId}
                    detail={detail}
                />
            ))}
        </>
    )
}
