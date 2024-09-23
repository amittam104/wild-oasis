import styled from "styled-components";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
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
