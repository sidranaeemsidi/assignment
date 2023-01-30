import { useState, useEffect } from "react";
import axios from "axios";

function ItemsList(props) {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get("https://crudcrud.com/api/7433699c08d54106b8a949faa01239eb")
      // .then((res) => setAPIData(res.data));
      .then((res) => console.log(res.data));
  }, []);

  return (
    <div className="wrap invert">
      <div className="container">
        <div className="title d-flex align-items-center justify-content-between">
          <h1>
            Items <span>( List )</span>
          </h1>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price ($)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {/* Getting API DATA*/}
            {APIData && APIData.length > 0 ? (
              APIData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{item}</td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        onClick={() => alert(item.id)}
                        className="btn btn-success me-2">
                        Edit
                      </button>
                      <button
                        // onClick={() => handleDelete(item.id)}
                        className="btn btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={4} className="text-center bg-light">
                  <span className="text-danger">Nothing Found!</span>
                </td>
              </tr>
            )}
            {/* Getting Values ON SUBMIT IN THIS ROW */}
            <tr>
              <td>1</td>
              <td>{props.itemName}</td>
              <td>{props.itemPrice}</td>
              <td>
                <button className="btn btn-success me-2">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ItemsList;
