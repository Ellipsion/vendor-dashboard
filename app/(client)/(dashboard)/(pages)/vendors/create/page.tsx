import VendorForm from "../_components/vendor-form";

const CreateVendorPage = () => {
  return (
    <div className="py-5 pr-6 pl-6 md:pl-1">
      <div className="flex items-end justify-between py-5">
        <div>
          <h1 className="text-3xl font-medium">Vendor</h1>
          <h5 className="text-sm text-neutral-400 m-1 font-medium">
            Add new vendor
          </h5>
        </div>
      </div>
      <div className="bg-white shadow-sm rounded-xl p-6">
        <VendorForm create={true} />
      </div>
    </div>
  );
};

export default CreateVendorPage;
