import React from "react";

//styles
import "./StorageBank.css";

//assets
import StorageBankImg from "../../../assets/StorageBank.png";

const StorageBank = () => {
  return (
    <div className="storageBank">
      <img src={StorageBankImg} alt="storage-bank" />

      <div className="storageBank__right">
        <h2 className="h2 text-color-2">
          We are a high-level data storage bank
        </h2>
        <p>
          The place to store various data that you can access at any time
          through the internet and where you can carry it. This very flexible
          storage area has a high level of security. To enter into your own data
          you must enter the password that you created when you registered in
          this Data Warehouse.
        </p>
      </div>
    </div>
  );
};

export default StorageBank;
