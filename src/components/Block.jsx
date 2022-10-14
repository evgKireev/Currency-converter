const corrency = ['RUB', 'USD', 'EUR', 'BYN'];

const Block = ({ onChangeCurrency, onChangeValue, currency, value }) => {
  return (
    <div className="block">
      <ul className="currencies">
        {corrency.map((value, index) => (
          <li
            className={currency === value ? 'active' : ''}
            key={index}
            onClick={() => {
              onChangeCurrency(value);
            }}
          >
            {value}
          </li>
        ))}

        <li>
          <svg height="50px" viewBox="0 0 50 50" width="50px">
            <rect fill="none" height="50" width="50" />
            <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
          </svg>
        </li>
      </ul>
      <input
        placeholder={0}
        type="number"
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
      />
    </div>
  );
};

export default Block;
