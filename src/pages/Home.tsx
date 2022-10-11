// export function Home() {
//   return <h1>Home</h1>;
// }
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
// import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

// export function Home() {
//   return (
//     <>
//       <h1>Store</h1>
//       <Row md={2} xs={1} lg={3} className="g-3">
//         {storeItems.map((item) => (
//           <Col key={item.id}>
//             <StoreItem {...item} />
//           </Col>
//         ))}
//       </Row>
//     </>
//   );
// }

export function Home() {
  // let fruits = [
  //   { label: "Apple", value: "🍎" },
  //   { label: "Banana", value: "🍌" },
  //   { label: "Orange", value: "🍊" },
  // ];

  // Using state to keep track of what the selected fruit is
  let [fruit, setFruit] = useState("Select your GPU");

  // Using this function to update the state of fruit
  // whenever a new option is selected from the dropdown
  let handleFruitChange = (e) => {
    setFruit(e.target.value);
  };

  return (
    <div className="App">
      {/* Displaying the value of fruit */}
      {fruit}
      <br />

      <select onChange={handleFruitChange}>
        <option value="⬇️ Select a fruit ⬇️"> -- Select a fruit -- </option>
        {/* Mapping through each fruit object in our fruits array
          and returning an option element with the appropriate attributes / values.
         */}
        {storeItems.map((fruit) => (
          <option key={fruit.name} value={fruit.price}>
            {fruit.name}
          </option>
        ))}
      </select>
    </div>
  );
}
