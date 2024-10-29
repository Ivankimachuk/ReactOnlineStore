import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "All goods",
        },
        {
          key: "chairs",
          name: "Chairs",
        },
        {
          key: "tables",
          name: "Tables",
        },
        {
          key: "beds",
          name: "Beds",
        },
        {
          key: "sofas",
          name: "Sofas",
        },
        {
          key: "bookshelfs",
          name: "Bookshelfs",
        },
        {
          key: "wardrobes",
          name: "Wardrobes",
        },
      ],
    };
  }

  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
