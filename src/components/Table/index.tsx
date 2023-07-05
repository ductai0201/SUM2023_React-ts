import { ICar } from "@/interfaces/car";
import React from "react";

type TableProps = {
  // cars?: ICar[];
  // config: any;
};

const Table = ({ cars, config }: any) => {
  console.log(config);
  console.log(cars);

  const renderHeaders = config.map((column: any) => {
    if (column.header) {
      return <th>{column.header(column)}</th>;
    }
    return <th>{column.label}</th>;
  });
  const renderRows = cars.map((car: ICar) => {
    const renderColumns = config.map((column: any) => {
      return <td>{column.render(car)}</td>;
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
