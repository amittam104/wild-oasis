import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";

function Stats({ bookings, confirmedStays, numDays, cabinsCount }) {
  // 1
  const numBookings = bookings.length;

  // 2
  const totalSales = bookings.reduce(
    (acc, booking) => acc + booking.totalPrice,
    0
  );

  console.log(confirmedStays);

  // 3
  const numConfirmedStays = confirmedStays?.length;

  // 4
  const occupation =
    confirmedStays?.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinsCount);

  return (
    <>
      <Stat
        title="Bookings"
        value={numBookings}
        icon={<HiOutlineBriefcase />}
        color="blue"
      />
      <Stat
        title="Sales"
        value={formatCurrency(totalSales)}
        icon={<HiOutlineBanknotes />}
        color="green"
      />
      <Stat
        title="Check ins"
        value={numConfirmedStays}
        icon={<HiOutlineCalendarDays />}
        color="indigo"
      />
      <Stat
        title="Occupancy Rate"
        value={Math.ceil(occupation * 100) + "%"}
        icon={<HiOutlineChartBar />}
        color="yellow"
      />
    </>
  );
}

export default Stats;
