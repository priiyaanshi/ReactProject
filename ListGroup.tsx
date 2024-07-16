//import { Fragment } from "react";

import { useState } from "react";

//props is by convention
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {
  //   items = [];

  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //event handler
  return (
    // in react, a component cannot return more than 1 element so make it in a div
    // but this is an extra element thats not required so use fragments
    // one way is to import and use another is to just use <>
    // <Fragment>
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
    //</Fragment>
  );
}

export default ListGroup;
