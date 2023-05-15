import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { updateProduct } from "../redux/ProductRedux";
function AddNewProduct() {
  const [showModal, setShowModal] = useState(false);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (title && description && price) {
      fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          description: description,
          price: price
        })
      })
        .then((res) => res.json())
        .then((value) => dispatch(updateProduct(value)));
      setShowModal(false);
    }
  };

  return (
    <div>
      <Button
        style={{ margin: "2rem", color: "white", backgroundColor: "blue" }}
        variant="primary"
        onClick={() => setShowModal(true)}
      >
        Add New Product
      </Button>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-4">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => settitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            close
          </Button>
          <Button onClick={handleSubmit}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddNewProduct;
