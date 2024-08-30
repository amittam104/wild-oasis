import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import Filter from "../ui/Filter";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations>
          <Filter
            filterField="discount"
            options={[
              { value: "all", label: "All" },
              { value: "no-discount", label: "No Discount" },
              { value: "with-discount", label: "With Discount" },
            ]}
          />
        </CabinTableOperations>
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
