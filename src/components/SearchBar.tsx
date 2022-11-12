import React from 'react';
import Button from 'react-bootstrap/Button';
export default function SearchBar() {
  return (
    <div
      style={{ height: '400px', flexDirection: 'column' }}
      className="d-flex justify-content-center align-items-center row  "
    >
      <input
        style={{ height: '50px', textAlign: 'center' }}
        className="col-6 inputSearch"
        type="text"
        placeholder="ID RASTREO"
      />
      <Button className="col-3 mt-3" variant="secondary">
        SEARCH
      </Button>
    </div>
  );
}
