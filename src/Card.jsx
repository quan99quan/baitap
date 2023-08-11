import { Component } from "react";

const products = [
  {
    id: 1,
    url: "https://myphamthuanchay.com/data/upload_file/Image/vegan-thang-10/co-nen-mua-my-pham-vegan.png",
    price: "$100",
    title: "thuốc",
  },
];
export default class Card extends Component {
  render() {
    return (
      <>
        {products.map((item, index) => (
          <div key={index}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.price}</h5>
                <p className="card-text">{item.title}</p>
                <a href="#" className="btn btn-primary">
                  BUY
                </a>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}
