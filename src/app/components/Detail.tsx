export default function Detail({
    detail,
    index,
}: {
    detail: DetailType
    index: number
}) {
    return (
        <>
            <p className=" my-6 text-base text-left">
                {" "}
                <span className=" text-sm">({index + 1})</span>{" "}
                {detail.BlogContent}{" "}
            </p>
        </>
    )
}
