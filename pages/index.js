import CardItem from '../app/cards/CardItem'
import Meta from '../app/utils/Meta'

export default function Home({ cards }) {
  return (
    <div>
      <Meta title='Главная' description='Описание страницы' />

      <main className="w-1/4 mx-auto mt-20">
        {cards.map(card => <CardItem key={card._id} card={card} />)}
      </main>

    </div>
  )
}
export const getStaticProps = async () => {

  const res = await fetch('http://localhost:3000/api/cards')
  const cards = await res.json()
  return {
    props: {
      cards
    },
    revalidate: 10
  }
}