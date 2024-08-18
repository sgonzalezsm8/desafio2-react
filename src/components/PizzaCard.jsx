import { FaPizzaSlice } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


function PizzaCard({ name, price, ingredients, img }) {
    return (
        <div className="card h-100 mb-4">
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <img src={img} className="card-img-top" alt={name} />
                    <h5 className="card-title">Pizza {name}</h5>
                </li>
                <li className="list-group-item">
                    <p className="card-text"><FaPizzaSlice /> Ingredientes</p>
                    <p>{ingredients.join(', ')}</p>
                </li>
                <li className="list-group-item">
                    <p className="card-text"><strong>Precio: ${price}</strong></p>
                    <div className="d-flex justify-content-between">
                        <a href="#" className="btn btn-outline-secondary me-2 btn-sm"><FaRegEye /> Ver más</a>
                        <a href="#" className="btn btn-dark me-2 btn-sm"><FaShoppingCart /> Añadir</a>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default PizzaCard;