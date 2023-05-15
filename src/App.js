import AddNewProduct from "./components/AddNewProduct";
import ShowProduct from "./components/ShowProduct";
import { addProduct } from "./redux/ProductRedux";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function App() {
  const dispatch = useDispatch();
  const phone = useSelector((state) => state.product.value);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((value) => dispatch(addProduct(value)));
  }, []);

  return (
    <div className="App">
      <AddNewProduct />
      <ShowProduct phone={phone} />
    </div>
  );
}
