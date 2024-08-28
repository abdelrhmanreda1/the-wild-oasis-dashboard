import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import styled from "styled-components";

// Wrapper to allow vertical scrolling only in the table body
const TableWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden; /* Prevent horizontal scrolling */
  overflow-y: hidden;

  table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed; /* Fix column widths */
  }

  th,
  td {
    padding: 1rem;
    text-align: left;
    white-space: nowrap; /* Prevent text wrapping in cells */
  }

  thead th {
    position: sticky;
    top: 0;
    background: var(--color-primary-900);
    z-index: 10;
  }

  @media (max-width: 768px) {
    table {
      font-size: 0.9rem;
    }

    th,
    td {
      padding: 0.5rem;
    }

    th:nth-child(3),
    td:nth-child(3) {
      min-width: 150px;
    }
  }
`;

const TableBodyWrapper = styled.div`
  max-height: 455px;
  overflow-y: auto;
  width: 100%;

  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
`;

function BookingTable() {
  const { bookings, isLoading, count } = useBookings();

  if (isLoading) return <Spinner />;
  if (!bookings.length) return <Empty resourceName="bookings" />;

  return (
    <Menus>
      <TableWrapper>
        <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
          <Table.Header>
            <div>Cabin</div>
            <div>Guest</div>
            <div>Dates</div>
            <div>Status</div>
            <div>Amount</div>
            <div></div>
          </Table.Header>

          {/* TableBodyWrapper wraps the table body for vertical scrolling */}
          <TableBodyWrapper>
            <Table.Body data={bookings} render={(booking) => <BookingRow key={booking.id} booking={booking} />} />
          </TableBodyWrapper>

          <Table.Footer>
            <Pagination count={count} />
          </Table.Footer>
        </Table>
      </TableWrapper>
    </Menus>
  );
}

export default BookingTable;
