import {Suspense} from "react"
import Search from "./components/Search"
import error from "./error"
export default function Home() {
    return (
        <>
            <h1 className=" title">
                Dream Dictionary <span>(အိပ်မက် အဘိဓာန်)</span>{" "}
            </h1>
            <h2 className=" text-sm md:text-base lg:text-lg my-6">
                မြင်မက်ခဲ့သောအိပ်မက်ထဲမှ အဓိကဇာတ်ကောင်များ (သို့)
                အရာ၀တ္ထုများကို မြန်မာစာလုံးပေါင်းဖြင့် အောက်ပါအကွက်လေးထဲထည့်ပါ။
            </h2>

            <Search />
        </>
    )
}
