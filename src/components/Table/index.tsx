// import { ICar } from "@/interfaces/car";
import React from "react";

type TableProps = {
  // cars?: ICar[];
  // config: any;
};

const Table = ({ cars, config }: any) => {
  const renderHeaders = config.map((column: any) => {
    return <th>{column.header ? column.header(column) : column.label}</th>;
  });
  const renderRows = cars.map((car: any) => {
    const renderColumns = config.map((column: any) => {
      return <td>{column.render ? column.render(car) : car[column.key]}</td>;
    });
    return <tr>{renderColumns}</tr>;
  });
  return (
    <div>
      <table>
        <thead>
          <tr>{renderHeaders}</tr>
        </thead>
        <tbody>{renderRows}</tbody>
      </table>
    </div>
  );
};

export default Table;
