import React from "react";

const TableItem = ({ items }) => {
  return (
    <div>
      {items.map((itemData) => {
        return (
          <>
            <p>{itemData.description}</p>
          </>
        );
      })}
    </div>
  );
};

export default TableItem;
