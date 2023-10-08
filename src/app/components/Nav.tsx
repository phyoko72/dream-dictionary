import Link from "next/link"

export default function Nav() {
    return (
        <nav className=" space-x-3 my-5">
            <Link className=" underline underline-offset-4" href={"/"}>
                ပင်မစာမျက်နှာ
            </Link>
            <Link className=" underline underline-offset-4" href={"/dreams"}>
                အက္ခရာစဉ်
            </Link>
        </nav>
    )
}
