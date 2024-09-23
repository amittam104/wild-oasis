import styled from "styled-components";
import useRecentBookings from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import useRecentStays from "./useRecentStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading, bookings } = useRecentBookings();
  const { isLoading1, stays, confirmedStatus } = useRecentStays();

  if (isLoading || isLoading1) return <Spinner />;

  console.log(bookings);

  return (
    <StyledDashboardLayout>
      <div>Summary</div>
      <div>Bookings data</div>
      <div>Chart 1</div>
      <div>Chart 2</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
