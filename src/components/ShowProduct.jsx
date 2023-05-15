import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { removeProduct } from "../redux/ProductRedux";
import { useDispatch } from "react-redux";

function ShowProduct(props) {
  const { phone } = props;
  const dispatch = useDispatch();
  const [phoneDetails, setPhoneDetails] = useState([]);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    setPhoneDetails(phone);
  }, [phone]);

  const deleteProduct = (item) => {
    dispatch(removeProduct(item));
  };

  const updateProd = (value) => {
    phoneDetails.map((item) => {
      if (item.id === value.id) {
        // Update the desired property (e.g., name)
        const title = prompt("enter title");
        settitle(title);
        const description = prompt("enter description");
        setdescription(description);
        const price = prompt("enter price");
        setPrice(price);
      }
    });
  };

  return (
    <div>
      <Table striped bordered>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Thumbnail</th>
          </tr>
        </thead>
        <tbody>
          {phoneDetails.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.id}</td>
                {title === "" ? <td>{value.title}</td> : title}
                {description === "" ? (
                  <td>{value.description}</td>
                ) : (
                  description
                )}
                {price === "" ? <td>{value.price}</td> : price}
                <td>
                  <img src={value.thumbnail} alt="" />
                </td>
                <td>
                  <Button onClick={() => updateProd(value)}>Update</Button>
                </td>
                <td>
                  <Button onClick={() => deleteProduct(value.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default ShowProduct;
