import { CommentCard } from "@/components/shared";

const comments = [{
    id: 1,
    userName: 'jafar ali',
    message: 'Absolutely love the quality and fit. Everything feels stylish and comfortable!',
    rate: 5
}, {
    id: 2,
    userName: 'asghar ali',
    message: 'Absolutely love the quality and fit. Everything feels stylish and comfortable!',
    rate: 5
}, {
    id: 3,
    userName: 'mmad gholi',
    message: 'Absolutely love the quality and fit. Everything feels stylish and comfortable!',
    rate: 5
}, {
    id: 4,
    userName: 'jafar taghi',
    message: 'Absolutely love the quality and fit. Everything feels stylish and comfortable!',
    rate: 5
}]

export const Comments = () => {
    return (
        <section className="w-full py-8 text-center">
            <h2 className="text-lg font-heading md:text-xl md:font-semibold">What Our Customers Say</h2>
            <p className="text-xs max-w-2xs md:text-sm md:max-w-sm mx-auto pt-3">Style, quality, and confidence — straight from our customers!</p>
            <div className="w-full overflow-x-auto px-4 pb-4 flex items-center gap-3 mt-8">
                {
                    comments.map((comment) => <CommentCard key={comment.id} {...comment} />)
                }
            </div>
        </section>
    );
}