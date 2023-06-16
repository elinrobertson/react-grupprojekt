import AdminTable from "../AntDesign/AdminTable/AdminTable";
import CreateProductForm from "../AntDesign/CreateProductForm/CreateProductForm";

function Admin() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <CreateProductForm />
      < AdminTable />
    </div>
  );

}

export default Admin;