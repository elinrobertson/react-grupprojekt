import AdminUI from "../AntDesign/Table/Table";
import CreateProduct from "../AntDesign/CreateProduct/CreateProduct";


function Admin() {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <CreateProduct />
      < AdminUI />
    </div>
  );
  
}

export default Admin;