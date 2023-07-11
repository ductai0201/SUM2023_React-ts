import React from "react";
import Item from "../Item";
import { ICar } from "@/interfaces/car";
import Skeleton from "react-loading-skeleton";
type ListProps = {
  cars: ICar[];
  onRemove: (id: number) => void;
  loading?: boolean;
};

const List = ({ cars, onRemove, loading }: ListProps) => {
  const renderList = () => {
    return cars?.map((car) => (
      <Item key={car.id} car={car} onRemove={onRemove} />
    ));
  };
  return (
    <>
      {loading && <Skeleton count={3} height={40} />}
      <ul>{renderList()}</ul>
    </>
  );
};

export default List;
