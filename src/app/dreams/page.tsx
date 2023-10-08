import Header from "../components/Header"
import data from "@/data/DreamDictionary.json"
export default function Dreams() {
    return (
        <>
            <h1 className="title mt-2 mb-5">အိပ်မက်အက္ခရာစဉ်များ</h1>
            <div className="flex flex-wrap gap-2 justify-center">
                {data.BlogHeader.map((head) => (
                    <Header key={head.BlogId} header={head} />
                ))}
            </div>
        </>
    )
}
