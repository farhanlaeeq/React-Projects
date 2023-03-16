/////
const options = [
  { label: "Karachi", value: "Karachi" },
  { label: "Lahore", value: "Lahore" },
  { label: "Islamabad", value: "Islamabad" },
  { label: "Hyderabad", value: "Hyderabad" },
  { label: "Tando Adam", value: "Tando Adam" },
  { label: "Sukhar", value: "Sukhar" },
  { label: "Multan", value: "Multan" },
  { label: "Gujranwala", value: "Gujranwala" },
  { label: "Turbat", value: "Turbat" },
  { label: "Faisalabad", value: "Faisalabad" },
  { label: "Peshawar", value: "Peshawar" },
];
const [selectedOption, setSelectedOption] = React.useState(null);
const [searchTerm, setSearchTerm] = React.useState("");
const [disp, setdisp] = React.useState(false);
const filteredOptions = options.filter((option) =>
  option.label.toLowerCase().includes(searchTerm.toLowerCase())
);

const handleSelectOption = (option) => {
  setSelectedOption(option.label);
  setSearchTerm(option.label);
  setdisp(false);
};

<div>
  <div className={classes.inlineWrap}>
    <Grid container spacing={3}>
      <Grid item xs={6} sm={6}>
        <div className="searchable-dropdown">
          <Input
            type="text"
            placeholder="Search options..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            onFocus={(e) => setdisp(true)}
            // onBlur={e => setdisp(false)}
          />
          <ul
            className="options-list"
            style={{
              border: "2px solid white",
              borderRadius: 10,
              color: "black",
              display: disp ? "block" : "none",
              width: 200,
              position: "absolute",
              zIndex: 999,
              backgroundColor: "grey",
              maxHeight: 200,
              overflowY: "scroll",
            }}
          >
            {filteredOptions.map((option) => (
              <li
                key={option.value}
                className={
                  option.value === selectedOption?.value ? "selected" : ""
                }
                onClick={() => handleSelectOption(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      </Grid>
    </Grid>
  </div>
</div>;
