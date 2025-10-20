import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";
import styled from "styled-components";
const TableWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;

  table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
  }

  th,
  td {
    padding: 1rem;
    text-align: left;
    white-space: nowrap;
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
  max-height: 415px;
  overflow-y: scroll;
  width: 100%;

  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
`;

function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!cabins.length) return <Empty resourceName="cabins" />;
  //1) Filter
  const filterValue = searchParams.get("discount") || "all";

  let filteredCabins;

  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "no-discount") filteredCabins = cabins.filter((cabin) => cabin.discount === 0);

  if (filterValue === "with-discount") filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
  // 2) Sort

  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");

  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort((a, b) => (a[field] - b[field]) * modifier);
  return (
    <Menus>
      <TableWrapper>
        <Table columns=" 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
          <Table.Header>
            <div></div>
            <div>Cabin</div>
            <div>Capacity</div>
            <div>Price</div>
            <div>Discount</div>
          </Table.Header>
          <TableBodyWrapper>
            <Table.Body
              //data={cabins}
              // data={filteredCabins}
              data={sortedCabins}
              render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
            />
          </TableBodyWrapper>
        </Table>
      </TableWrapper>
    </Menus>
  );
}

export default CabinTable;
