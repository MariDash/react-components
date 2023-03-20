import React from 'react';
import { Product } from '../cardsBase';

class Card extends React.Component {
    name: string;

    brand: string;

    price: number;

    img: string;

    description: string;

    constructor(prop: Product) {
        super(prop);
        this.name = prop.title;
        this.brand = prop.brand;
        this.description = prop.description;
        this.price = prop.price;
        this.img = prop.image;
    }

    render(): JSX.Element {
        return (
            <div className="card">
                <img className="card__image" src={this.img} alt={this.name} />
                <div className="card__description">
                    <p className="product__name">{this.name}</p>
                    <p className="product__brand">{this.brand}</p>
                    <p className="product__price">$ {this.price}</p>
                </div>
                <p className="product__description">{this.description}</p>
            </div>
        );
    }
}

export default Card;
