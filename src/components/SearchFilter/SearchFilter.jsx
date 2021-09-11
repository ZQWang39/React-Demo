/* eslint-disable array-callback-return */
import React, { useState } from "react";
import MockData from "../../MOCK_DATA.json";

const SearchFilter = () => {
  const [searchPerson, setSearchPerson] = useState("");

  const handleChange = (e) => {
    setSearchPerson(e.target.value);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search by name ..."
        className="form-control"
        style={{ marginTop: 50, marginBottom: 50 }}
        value={searchPerson}
        onChange={handleChange}
      />
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Frist Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {MockData.filter((data) => {
            if (searchPerson === "") {
              return null;
            } else if (
              data.first_name
                .toLowerCase()
                .includes(searchPerson.toLowerCase()) ||
              data.last_name.toLowerCase().includes(searchPerson.toLowerCase())
            ) {
              return data;
            }
          }).map((data) => (
            <tr key={data.id}>
              <td>{data.first_name}</td>
              <td>{data.last_name}</td>
              <td>{data.email}</td>
              <td>{data.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchFilter;
