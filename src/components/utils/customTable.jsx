import { useState } from "react";
import { Table, TableContainer, TableBody, TableCell, TableHead, TableRow,
  TableSortLabel, Rating, Avatar
} from "@mui/material";

import { Circle } from "@mui/icons-material";

function CustomTable() {
  // State for sorting
  const [orderBy, setOrderBy] = useState("num");
  const [order, setOrder] = useState("asc");

  const orders = [
    {
      id: 1,
      customer: "Elias",
      photo: "https://picsum.photos/id/1/200/300",
      order: "Filther",
      out: '234-567',
      dueDate: '23/2/2023',
      rating: 4,
      status: 'completed'
    },
    {
      id: 2,
      customer: "Luiz",
      photo: "https://picsum.photos/id/237/200/300",
      order: "Filther",
      out: '234-567',
      dueDate: '23/2/2023',
      rating: 3,
      status: 'pending'
    },
    {
      id: 1,
      customer: "Fionna",
      photo: "https://picsum.photos/id/22/200/300",
      order: "Filther",
      out: '234-567',
      dueDate: '23/2/2023',
      rating: 5,
      status: 'cancelled'
    }
  ]

  // Function to handle sorting
  const handleSort = (property) => {
    const isAscending = orderBy === property && order === "asc";
    setOrder(isAscending ? "desc" : "asc");
    setOrderBy(property);
  };

  // Function to compare values for sorting
  const compareValues = (a, b) => {
    if (a[orderBy] < b[orderBy]) {
      return order === "asc" ? -1 : 1;
    }
    if (a[orderBy] > b[orderBy]) {
      return order === "asc" ? 1 : -1;
    }
    return 0;
  };

  const getColor = (status) => {
    return status === 'completed' ? 'green' : status === 'pending' ? 'orange' : 'red'
  };

  // Sort orders based on current order and orderBy state
  const sortedOrders = orders.sort(compareValues);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={orderBy === "num"}
                direction={order}
                onClick={() => handleSort("num")}
              >
                Num
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "customer"}
                direction={order}
                onClick={() => handleSort("customer")}
              >
                Customer
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "order"}
                direction={order}
                onClick={() => handleSort("order")}
              >
                Order
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "out"}
                direction={order}
                onClick={() => handleSort("out")}
              >
                Out
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "dueDate"}
                direction={order}
                onClick={() => handleSort("dueDate")}
              >
                Due Date
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "rating"}
                direction={order}
                onClick={() => handleSort("rating")}
              >
                Rating
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "status"}
                direction={order}
                onClick={() => handleSort("status")}
              >
                Status
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedOrders.map((order, index) => (
            <TableRow key={order.customer}>
              <TableCell>{index + 1}</TableCell>
              <TableCell sx={{ display: 'flex', alignItems:'center', gap: '1rem'}}>
                <Avatar src={order.photo} sx={{ width: 34, height: 30 }}/>
                <p>{order.customer}</p>
              </TableCell>
              <TableCell>{order.order}</TableCell>
              <TableCell>{order.out}</TableCell>
              <TableCell>{order.dueDate}</TableCell>
              <TableCell>{<Rating value={order.rating} readOnly/>}</TableCell>
              <TableCell>
                <p style={{ color: getColor(order.status)}}>
                  <Circle sx={{ fontSize: '8px'}}/>
                  { ' '}
                {order.status}
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;

// const orderdata = () => {
//   const data = [
//     {
//       id: 1,
//       customer: "Elias",
//       order: "Filther",
//       out: '234-567',
//       dueDate: '23/2/2023',
//       rating: '3',
//       status: 'delivered'
//     }
//   ]
// }