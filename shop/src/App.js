import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Chair",
          img: "chair.webp",
          desk: "Comfortable wooden chair",
          category: "chairs",
          price: 49.99,
        },
        {
          id: 2,
          title: "Table",
          img: "table.jpg",
          desk: "Modern dining table",
          category: "tables",
          price: 150.0,
        },
        {
          id: 3,
          title: "Bed",
          img: "bed.jpg",
          desk: "Queen size bed with mattress",
          category: "beds",
          price: 350.0,
        },
        {
          id: 4,
          title: "Sofa",
          img: "sofa.jpg",
          desk: "Comfortable fabric sofa",
          category: "sofas",
          price: 499.99,
        },
        {
          id: 5,
          title: "Armchair",
          img: "armchair.jpg",
          desk: "Stylish armchair",
          category: "chairs",
          price: 89.99,
        },
        {
          id: 6,
          title: "Bookshelf",
          img: "bookshelf.webp",
          desk: "Spacious wooden bookshelf",
          category: "shelves",
          price: 199.99,
        },
        {
          id: 7,
          title: "Dining Set",
          img: "dining_set.jpg",
          desk: "Dining table with 4 chairs",
          category: "tables",
          price: 299.99,
        },
        {
          id: 8,
          title: "Wardrobe",
          img: "wardrobe.jpg",
          desk: "Large wooden wardrobe",
          category: "wardrobes",
          price: 450.0,
        },
        {
          id: 9,
          title: "Coffee Table",
          img: "coffee_table.webp",
          desk: "Modern glass coffee table",
          category: "tables",
          price: 120.0,
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders}/>
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  addToOrder(item) {
    let isInArray=false
    this.state.orders.forEach(el =>{
      if(el.id === item.id)
      isInArray=true
    })
    if(!isInArray)
    this.setState({ orders: [...this.state.orders, item] });
  }
}
export default App;
