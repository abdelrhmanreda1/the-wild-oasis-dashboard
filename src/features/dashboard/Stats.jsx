import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar } from "react-icons/hi2";
import React from "react";

const StyledStats = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 0.7rem;
  width: auto;
  @media (max-width: 768px) {
    flex-direction: column !important;
  }
`;
function Stats({ bookings, confirmStays, numDays, cabinCount }) {
  //1.
  const numBookings = bookings.length;
  //2.
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  //3.
  const checkin = confirmStays.length;
  //4.
  // num check-in nights / all available nights(num days * num cabins)
  const occupation = confirmStays.reduce((acc, cur) => acc + cur.numNights, 0) / (numDays * cabinCount);
  return (
    <React.Fragment styled={StyledStats}>
      <Stat title="bookings" color="blue" icon={<HiOutlineBriefcase />} value={numBookings} />
      <Stat title="Sales" color="green" icon={<HiOutlineBanknotes />} value={formatCurrency(sales)} />
      <Stat title="Check ins" color="indigo" icon={<HiOutlineCalendarDays />} value={checkin} />
      <Stat title="Occupancy rate" color="yellow" icon={<HiOutlineChartBar />} value={Math.round(occupation * 100) + "%"} />
    </React.Fragment>
  );
}

export default Stats;
