import { GiSettingsKnobs } from "react-icons/gi";

const FilterAccessory = () => {
  return (
    <div className="pb-10">
      <div className="flex gap-3">
        <p>Filter </p>
        <GiSettingsKnobs />
      </div>
    </div>
  );
};

export default FilterAccessory;
