import React from 'react'
import TableFarmActionButtons from "./TableFarmActionButtons";

const TableFarmRow = (props) => {
    const { id, farm_name, email, website, animal_count } = props.data;
    const index = props.index;

    let badge;

    if (animal_count > 0 && animal_count < 4) {
        badge = "badge py-1 text-bg-success text-wrap";
    } else if (animal_count > 3) {
        badge = "badge py-1 text-bg-danger text-wrap";
    } else {
        badge = "badge py-1 text-bg-secondary text-wrap";
    }

  return (
      <tr>
          <td>{index}</td>
          <td>{id}</td>
          <td>{farm_name}</td>
          <td>{email}</td>
          <td>{website}</td>
          <td>
              <span className={badge}>
                  {animal_count}
              </span>
          </td>
          <td>
              <TableFarmActionButtons eachRowId={ id }/>
          </td>
      </tr>
  )
}

export default TableFarmRow
