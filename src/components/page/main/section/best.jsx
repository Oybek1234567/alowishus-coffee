import { bestCoffee } from "../../../../assets/data";

const Best = () => {
    return (
        <div className='best-selling'>
            <h2 className='best-selling__title'>Best Selling Coffee</h2>
            <p className='best-selling__text'>
                A drink from the ‘My Alowishus’ bottled brews range OR grab one
                of our delicious coffee’s.
            </p>
            <div className='best-selling__items'>
                {bestCoffee.map((item) => (
                    <div key={item.id} className='best-selling__items_cards'>
                        <img
                            src={item.img}
                            alt={item.title}
                            className='best-selling__items_cards-img'
                        />
                        <span className='best-selling__items_cards-rate'>
                            {item.rate}
                        </span>
                        <b className='best-selling__items_cards-title'>
                            {item.title}
                        </b>
                        <p className='best-selling__items_cards-text'>
                            {item.text}
                        </p>
                        <span className='best-selling__items_cards-price'>
                            {item.price}
                        </span>
                        <button className='best-selling__items_cards-btn'>
                            {item.btn}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Best;
