import Link from "next/link";
import CardItem from "../../app/cards/CardItem";
import Meta from "../../app/utils/Meta";

const Card = ({ card }) => {
    return (
        <div>
            <Meta title='Страница карточки' description='' />
            <main className="w-1/4 mx-auto mt-20">
                <CardItem card={card} />;

                <Link href={'/'}>
                    <a className="text-black">Back to home</a>
                </Link>
            </main>
        </div>
    )
};
export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:3000/api/cards')
    const cards = await res.json()
    const paths = cards.map(c => ({ params: { id: c._id } }))
    return { paths, fallback: 'blocking' }
}
export const getStaticProps = async ({ params }) => {
    const res = await fetch(`http://localhost:3000/api/cards/${params.id}`)
    const card = await res.json()


    return {
        props: {
            card
        },
        revalidate: 10
    }
}

export default Card;