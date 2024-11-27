import General from "../components/account/General";
import Orders from "../components/account/Orders";

const Account = () => {
  return (
    <div className="grid grid-cols-1 items-start gap-y-12">
      <General />
      <Orders />
    </div>
  );
};

export default Account;
