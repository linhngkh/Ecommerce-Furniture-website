const LanguageDropdown = (props) => {
  return (
    <select onChange={props.onChange}>
      {/* <option>Select Language</option> */}
      <option value={"en"} defaultValue={true}>
        EN
      </option>
      <option value={"fi"}>FI</option>
      <option value={"vn"}>VN</option>
    </select>
  );
};

export default LanguageDropdown;
