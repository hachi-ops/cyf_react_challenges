import "./App.css";
// import dataHeathrow from "./data/dataHeathrow.js";

// const dataHeathrow = {
//   pharmacies: [
//     {
//       name: "Boots UK",
//       website: "http://www.boots.com",
//       phone: "020 8897 6018 ",
//       address: "Terminal 2 Satellite Airside Gate B, Hounslow, TW6 1EF",
//     },
//   ],
// };

const pharmacies = [
  {
    name: "Boots UK",
    website: "http://www.boots.com",
    phone: "020 8897 6018 ",
    address: "Terminal 2 Satellite Airside Gate B, Hounslow, TW6 1EF",
  },
];

function App() {
  const data = pharmacies.map((item) => {
    return (
      <tr>
        <td></td>
        <td>{item.name}</td>
        <td>{item.phone}</td>
        <td>{item.address}</td>
        <td>{item.website}</td>
      </tr>
    );
  });
  return (
    <div className="App">
      <h1>London Mini Guide</h1>
      <label htmlFor="choose-a-city">Choose a city</label>
      <select name="cities" id="choose-a-city">
        <option value="heathrow">Heathrow</option>
        <option value="harrow">Harrow</option>
        <option value="stratford">Stratford</option>
      </select>
      <button>Schools and Colleges</button>
      <button>Pharmacies</button>
      <button>Hospitals</button>
      <button>Doctors</button>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
    </div>
  );
}

export default App;
