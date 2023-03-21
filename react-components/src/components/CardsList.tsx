import React from 'react';
import { base } from '../cardsBase';
import Card from './Card';

class CardsList extends React.Component {
    render(): JSX.Element {
        return (
            <div className="cards__wrapper">
                {base.map((card) => {
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    return <Card {...card} key={card.id} />;
                })}
            </div>
        );
    }
}

export default CardsList;
