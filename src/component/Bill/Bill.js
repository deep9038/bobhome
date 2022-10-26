import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";
import "./Bill.css";

import { IoMdArrowRoundBack } from "react-icons/io";
import { AiOutlinePrinter } from "react-icons/ai";

const Bill = ({ setOpenBill, totalPrice, cartItem, customer }) => {
  console.log(customer);
  console.log(cartItem);
  console.log(totalPrice);
  const itemsPrice = cartItem.reduce((a, c) => a + c.qty * c.itemPrice, 0);
  const taxPrice = itemsPrice * 0.10;

  return (
    <>
      <button
        style={{
          height: "60px",
          width: "100px",
          backgroundColor: "gray",
          margin: "10px",
          border: "none",
          borderRadius: "4px",
        }}
      >
        <IoMdArrowRoundBack
          style={{ margin: "auto" }}
          size={30}
          onClick={() => setOpenBill(false)}
        />
      </button>
      <button
        style={{
          height: "60px",
          width: "100px",
          backgroundColor: "#6460d6",
          margin: "10px",
          border: "none",
          borderRadius: "4px",
          float: "right",
        }}
      >
        <AiOutlinePrinter
          style={{ margin: "auto", color: "white" }}
          size={30}
        />
      </button>

      <Container style={{ textAlign: "center" }}>
        <Row>
          <Col>
            <h2>W T F</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>
              Ward No. 21, 416, Jessore Rd, Vivekananda Abasan, Amarpalli, Dum
              Dum, Kolkata, West Bengal 700055
            </h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>W.B.T.D.C.LTD.PH:080138 65077</h5>
          </Col>
        </Row>

        <Row>
          {customer.CustomerName !== null && (
            <Col>Customer Name :- {customer.CustomerName}</Col>
          )}
        </Row>
        <Row>
          {customer.CustomerNumber !== null && (
            <Col>Customer Contect :- {customer.CustomerNumber}</Col>
          )}
        </Row>
      </Container>
      <Container style={{ marginTop: "20px", textAlign: "center" }}>
        <h4>
          {" "}
          ............................................................CASH/BILL..............................................................
        </h4>
      </Container>

      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignIems: "center",
          marginTop: "10px",
        }}
      >
        <table class="table table-dark ">
          <thead>
            <tr>
              <th scope="col">DESCRIPTION</th>
              <th scope="col" style={{ textAlign: "right" }}>
                QTY
              </th>
              <th scope="col" style={{ textAlign: "right" }}>
                Rate
              </th>
              <th scope="col" style={{ textAlign: "right" }}>
                Amount
              </th>
            </tr>
          </thead>

          <tbody>
            {cartItem.map((item) => {
              return (
                <tr>
                  <th scope="row">{item.itemName}</th>
                  <td style={{ textAlign: "right" }}>{item.qty}</td>
                  <td style={{ textAlign: "right" }}></td>
                  <td style={{ textAlign: "right" }}>{taxPrice}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Container>
      <Container className="gstdot" style={{ textAlign: "center" }}>
        <h4>
          ............................................................................................................................................
        </h4>
      </Container>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignIems: "center",
          marginTop: "10px",
        }}
      >
        <table class="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">GST</th>
              <th scope="col" style={{ textAlign: "right" }}>
                @ 10% ON
              </th>
              <th scope="col" style={{ textAlign: "right" }}>
                
              </th>
              <th scope="col" style={{ textAlign: "right" }}>
                24.14
              </th>
            </tr>
          </thead>
        </table>
      </Container>

      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignIems: "center",
          marginTop: "10px",
        }}
      >
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">TOTAL AMOUNT :-</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col" style={{ textAlign: "right" }}>
                {totalPrice}
              </th>
            </tr>
          </thead>
        </table>
      </Container>
    </>
  );
};

export default Bill;
