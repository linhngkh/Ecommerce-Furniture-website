import React from "react";

const LanguageDropdown = () => {
  return (
    <select>
      {/* <option>Select Language</option> */}
      <option value="en" defaultValue={true}>
        EN
      </option>
      <option value="fi">FI</option>
      <option value="vn">VN</option>
    </select>
  );
};

export default LanguageDropdown;
