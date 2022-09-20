import Image from "next/image";
import Link from "next/link";

const CardItem = ({ card }) => {
    return (
        <div className="rounded-xl p-5 -mt-5 text-white w-3/4 mx-auto" style={{ background: card.color }}>
            <Link href={`/card/${card._id}`}>
                <a>
                    <Image src={'https://www.seekpng.com/png/full/794-7948448_mastercard-mastercard-logo-grayscale.png'}
                        width={40} height={30} alt=''
                    />

                    <div className="opacity-50 text-xs" style={{ fontSize: '11px' }}>Current Balance</div>
                    <div className="">{card.balance.toLocaleString('ru-RU', { currency: 'RUB', style: 'currency' })}</div>
                    <div className="mt-6 text-xs">{card.number}</div>
                </a>
            </Link>
        </div>
    );
};

export default CardItem;