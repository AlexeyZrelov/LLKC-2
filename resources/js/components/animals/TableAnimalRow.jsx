import React from 'react'
import DeleteAnimalButton from "./buttons/DeleteAnimalButton.jsx";
import EditAnimalButton from "./buttons/EditAnimalButton.jsx";

const TableAnimalRow = (props) => {
    const { id, number, name, age } = props.data;
    const index = props.index;

  return (
      <tr>
          <td>{index}</td>
          <td>{id}</td>
          <td>{number}</td>
          <td>{name}</td>
          <td>{age}</td>
          <td>
              <EditAnimalButton eachRowId={ id }/>
              <DeleteAnimalButton rowId={ id }/>
          </td>
      </tr>
  )
}

export default TableAnimalRow
