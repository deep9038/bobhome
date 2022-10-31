import axios from "axios";
import { useEffect, useState } from "react";
// import './App5.css'
import "./Mainstylr.css";
import Body from "./component/Body/Body";
import Foot from "./component/Foot/Foot";
import Hading from "./component/Hadding/Hading";
import Bill from "./component/Bill/Bill";
function App() {
  const [addItem, setAddItem] = useState(false);
  const [ctagoryes, setCtagoryes] = useState([]);
  const [addOn, setAddOn] = useState([]);
  const [openAllItem, setOpenAllItem] = useState(false);
  const [item, setItem] = useState([]);
  const [openBill, setOpenBill] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [totalPrice, setTolalPrice] = useState();
  const [customer,setcustomer]=useState({
    CustomerName:null,
    CustomerNumber:null
  })
  const baseURL = "http://127.0.0.1:2000";

  useEffect(() => {
    axios.get(`${baseURL}/api/addCategory`).then((res) => {
      setCtagoryes(res.data.result);
    });
    axios.get(`${baseURL}/api/addOnItem`).then((res) => {
      setAddOn(res.data.result);
    });
    axios.get(`${baseURL}/api/Items`).then((res) => {
      setItem(res.data.result);
    });
  },[]);

  // cart
  // add
  const onAdd = (projuts) => {
    const exist = cartItem.find((item) => item._id === projuts._id);
    if (exist) {
      const newCartItem = cartItem.map((x) =>
        x._id === projuts._id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCartItem(newCartItem);
      localStorage.setItem("cartItem", JSON.stringify(newCartItem));
    } else {
      const newCartItem = [...cartItem, { ...projuts, qty: 1 }];
      setCartItem(newCartItem);
      localStorage.setItem("cartItem", JSON.stringify(newCartItem));
    }
  };

  const onClier = () => {
    setCartItem([]);
    localStorage.removeItem("cartItem")
  };
  useEffect(() => {
    setCartItem(
      localStorage.getItem("cartItem")
        ? JSON.parse(localStorage.getItem("cartItem"))
        : []
    );
  },[]);
  // remove
  const onRemove = (projuts) => {
    const exist = cartItem.find((item) => item._id === projuts._id);
    if (exist.qty === 1) {
      const newCartItem = cartItem.filter((x) => x._id !== projuts._id);
      setCartItem(newCartItem);
      localStorage.setItem("cartItem", JSON.stringify(newCartItem));
    } else {
      const newCartItem = cartItem.map((x) =>
        x._id === projuts._id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCartItem(newCartItem);
      localStorage.setItem("cartItem", JSON.stringify(newCartItem));
    }
  };

  return (
    <div className="maiDdiv">
      <Hading
        setAddItem={setAddItem}
        ctagoryes={ctagoryes}
        addItem={addItem}
        item={addOn}
      />
      <Body
      customer={customer}
      setcustomer={setcustomer}
        setTolalPrice={setTolalPrice}
        onClier={onClier}
        onAdd={onAdd}
        cartItem={cartItem}
        onRemove={onRemove}
        setOpenAllItem={setOpenAllItem}
        openAllItem={openAllItem}
        addItem={addItem}
        addOn={addOn}
        item={item}
        ctagoryes={ctagoryes}
        setAddItem={setAddItem}
        setOpenBill={setOpenBill}
      />
      <Foot totalPrice={totalPrice} />
      {openBill && (
        <div
          style={{
            position: "absolute",
            height: "100vh",
            width: "99vw",
            backgroundColor: "white",
            zIndex: "3",
            top: "0",
          }}
        >
          < Bill setOpenBill={setOpenBill} cartItem={cartItem} totalPrice={totalPrice} customer={customer} />
        </div>
      )}
    </div>
  );
}

export default App;
