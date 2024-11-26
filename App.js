import React from "react";
import { PiButterflyFill } from "react-icons/pi";

import { MdOutlineSegment } from "react-icons/md";
import "./App.css";
import image1 from "./img/one.jpg";
import image2 from "./img/two.jpg";
import image3 from "./img/three.png";
import image4 from "./img/four.jpg";
import image5 from "./img/five.jpg";
import image6 from "./img/six.png";
import image7 from "./img/seven.png";
import image8 from "./img/eight.png";
import image9 from "./img/nine.png";
import image10 from "./img/ten.png";
import { FaCheck } from "react-icons/fa6";
import { customPostOperation, customSingleGetOperation, customUpdateOperation } from "./api";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        padding: 30,
        gap: 15,
        backgroundColor: "#f4f4f4",
      }}
    >
      <div
        style={{
          display: "flex",
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          height: "25px",
          borderBottom: "1px solid grey",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <PiButterflyFill
            style={{
              border: "2px solid black",
              borderRadius: 30,
              fontSize: 17,
              marginTop: 3,
              padding: 2,
            }}
          />
          <p style={{ margin: 0, fontWeight: "bold" }}>/hello@essential.io</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBotttom: 30,
            gap: 15,
          }}
        >
          <p style={{ margin: 0, fontWeight: "bold" }}>Product</p>
          <p style={{ margin: 0, fontWeight: "bold" }}>.</p>
          <p style={{ margin: 0, fontWeight: "bold" }}>Resources</p>
          <p style={{ margin: 0, fontWeight: "bold" }}>.</p>
          <p style={{ margin: 0, fontWeight: "bold" }}>Our work</p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: 15 }}>
          <p style={{ margin: 0, fontWeight: "bold" }}>FAQ</p>
          <button
            style={{
              backgroundColor: "white",
              border: "2px solid black",
              borderRadius: "20px",
              fontWeight: "bold",
              width: 150,
              fontSize: 13,
            }}
          >
            Download API
          </button>
          <MdOutlineSegment style={{ fontSize: 25 }} />
        </div>
      </div>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        <p
          style={{ border: "0.5px solid black", width: 20, marginBottom: 12 }}
        ></p>
        <p style={{ backgroundColor: "white", fontWeight: "bold" }}>
          API INTEGRATION
        </p>
        <p
          style={{ border: "0.5px solid black", width: 20, marginBottom: 12 }}
        ></p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontOpticalSizing: "auto",
            fontWeight: "weight",
            fontStyle: "bold",
            fontSize: "60px",
            marginBottom: 0,
            margin: 0,
          }}
        >
          The Essential Api That Help
        </p>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontOpticalSizing: "auto",
            fontWeight: "weight",
            fontStyle: "bold",
            fontSize: "60px",
            margin: 0,
          }}
        >
          {" "}
          Connecting Team
        </p>
        <p style={{ fontSize: "20px" }}>
          A platform delivering ultra-fast dynamic & perzonalised project
          experiences.{" "}
        </p>
      </div>
      <br></br>
      <br></br>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 25,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: 200,
            height: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            // border:"2px outset rgb(191, 191, 191)",
            borderRadius: "50px",
            boxShadow: "0 3px 10px rgb(148, 136, 136)",
          }}
        >
          <img src={image1} style={{ width: 100, height: 100 }}></img>
          <p style={{ fontWeight: "bold" }}>Group Chat</p>
        </div>
        <div
          style={{
            backgroundColor: "white ",
            width: 200,
            height: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            // border:"2px outset rgb(191, 191, 191)",
            borderRadius: "50px",
            boxShadow: "0 3px 10px rgb(148, 136, 136)",
          }}
        >
          <img src={image3} style={{ width: 100, height: 100 }}></img>
          <p style={{ fontWeight: "bold" }}>Instant Mail</p>
        </div>
        <div
          style={{
            backgroundColor: "white ",
            width: 200,
            height: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            // border:"2px outset rgb(191, 191, 191)",
            borderRadius: "50px",
            boxShadow: "0 3px 10px rgb(148, 136, 136)",
          }}
        >
          <img src={image2} style={{ width: 100, height: 100 }}></img>
          <p style={{ fontWeight: "bold" }}>File Boot</p>
        </div>
        <div
          style={{
            backgroundColor: "white ",
            width: 200,
            height: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            // border:"2px outset rgb(191, 191, 191)",
            borderRadius: "50px",
            boxShadow: "0 3px 10px rgb(148, 136, 136)",
          }}
        >
          <img src={image4} style={{ width: 100, height: 100 }}></img>
          <p style={{ fontWeight: "bold" }}>Call Manage</p>
        </div>
        <div
          style={{
            backgroundColor: "white ",
            width: 200,
            height: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            // border:"2px outset rgb(191, 191, 191)",
            borderRadius: "50px",
            boxShadow: "0 3px 10px rgb(148, 136, 136)",
          }}
        >
          <img src={image5} style={{ width: 100, height: 100 }}></img>
          <p style={{ fontWeight: "bold" }}>Teamwork</p>
        </div>
      </div>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
          padding: 5,
        }}
      >
        <button
          style={{
            borderRadius: "20px",
            color: "white",
            backgroundColor: "black",
            fontWeight: "normal",
            padding: "45",
            width: 200,
            height: 40,
            fontFamily: "'Montserrat', sans-serif",
            fontOpticalSizing: "auto",
            fontWeight: "weight",
            fontStyle: "normal",
            cursor:"pointer"
          }}
          onClick={() => 
          {customPostOperation();} 
          //  {customSingleGetOperation(1);}
          // {customUpdateOperation();}
          }
          
        >
          Get Started- It's free
        </button>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 30,
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", gap: 6 }}>
          <FaCheck style={{ marginTop: 4, fontSize: 15 }} />
          <p style={{ margin: 0, fontSize: 15 }}>Free Sign Up</p>
        </div>

        <div style={{ display: "flex", flexDirection: "row", gap: 6 }}>
          <FaCheck style={{ marginTop: 4, fontSize: 15 }} />
          <p style={{ margin: 0, fontSize: 15 }}>No Credit Card Required</p>
        </div>

        <div style={{ display: "flex", flexDirection: "row", gap: 6 }}>
          <FaCheck style={{ marginTop: 4, fontSize: 15 }} />
          <p style={{ margin: 0, fontSize: 15 }}>Cancel Anytime</p>
        </div>
      </div>
      <div style={{ gap: 55 }}>
        <div
          style={{
            display: "flex",
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 10,
            height: "25px",
            borderBottom: "1px solid grey",
            justifyContent: "space-between",
          }}
        >
          <br />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 65,
          }}
        >
          <img src={image6} style={{ maxHeight: 32 }}></img>
          <img src={image7} style={{ maxHeight: 32 }}></img>
          <img src={image8} style={{ maxHeight: 32 }}></img>
          <img src={image9} style={{ maxHeight: 32 }}></img>
          <img src={image10} style={{ maxHeight: 32 }}></img>
        </div>
      </div>
    </div>
  );
}

export default App;
