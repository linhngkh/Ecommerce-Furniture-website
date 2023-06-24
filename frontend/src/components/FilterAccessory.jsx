import { GiSettingsKnobs } from "react-icons/gi";

const FilterAccessory = () => {
  return (
    <div className="">
      <div className="flex items-center gap-3">
        <p className="text-sm text-blue">Filter </p>
        <GiSettingsKnobs />
      </div>
    </div>
  );
};

export default FilterAccessory;
