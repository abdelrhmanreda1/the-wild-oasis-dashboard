import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import Menus from "../../ui/Menus";
import { HiEye, HiTrash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { HiArrowDownOnSquare, HiArrowUpOnSquare } from "react-icons/hi2";
import { useCheckout } from "../check-in-out/useCheckout";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteBooking } from "./useDelelteBooking";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  word-wrap: break-word;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const EmailColumn = styled(Stacked)`
  max-width: 180px;
  overflow-wrap: break-word;
  @media (max-width: 768px) {
    min-width: 200px;
  }
`;

const Dates = styled(Stacked)`
  width: 200px;
  overflow-wrap: break-word;
  white-space: normal;
  margin: 0px 6px;
  @media (max-width: 768px) {
    min-width: 19;
  }
`;

const Amount = styled(Stacked)`
  max-width: 180px;
  overflow-wrap: break-word;
  @media (max-width: 768px) {
    min-width: 100px;
  }
`;

function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const navigate = useNavigate();
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  const { checkout, isCheckingOut } = useCheckout();
  const { isDeleting, deleteBooking } = useDeleteBooking();
  return (
    <Table.Row style={{ tableLayout: "fixed", width: "100%" }}>
      <Cabin>{cabinName}</Cabin>

      <EmailColumn>
        <span>{guestName}</span>
        <span>{email}</span>
      </EmailColumn>

      <Dates>
        <span>
          {isToday(new Date(startDate)) ? "Today" : formatDistanceFromNow(startDate)} &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash; {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </Dates>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>
      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={bookingId} />
          <Menus.List id={bookingId}>
            <Menus.Button icon={<HiEye />} onClick={() => navigate(`/bookings/${bookingId}`)}>
              See details
            </Menus.Button>

            {status === "unconfirmed" && (
              <Menus.Button icon={<HiArrowDownOnSquare />} onClick={() => navigate(`/checkin/${bookingId}`)}>
                Check in
              </Menus.Button>
            )}

            {status === "checked-in" && (
              <Menus.Button style={{ maxWwidth: "180px", overflowWrap: "break-word", whiteSpace: "normal" }} icon={<HiArrowUpOnSquare />} onClick={() => checkout(bookingId)} disabled={isCheckingOut}>
                Check out
              </Menus.Button>
            )}
            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete booking</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>
        <Modal.Window name="delete">
          <ConfirmDelete resourceName="booking" onConfirm={() => deleteBooking(bookingId)} disabled={isDeleting} />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default BookingRow;
