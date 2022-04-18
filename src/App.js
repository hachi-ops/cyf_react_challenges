import './App.css';
import jobsData from './data';

function App() {
  return (
    <div className="App">
      <JobListing />
    </div>
  );
};

function JobListing () {
    return (
        <div>
          {jobsData.map((data) => {
            return (
              <div>
                <div>
                  <img src={data.logo} alt={"logo"} style={{width: "80px"}} />
                </div>                
                <h1>{data.company}</h1>
                <h2>{data.position}</h2>            
                <div>JobBriefDetails</div>
                <div>JobTags</div>                                         
              </div>
            )
          })}
          
        </div>
    )
}

// function JobBriefDetails () {
//   return (
//     <div>
//       {jobsData.map((jobBriefDetails) => {
//         return (
//           <ul>
//             <li>{jobBriefDetails.postedAt}</li>
//             <li>{jobBriefDetails.contract}</li>
//             <li>{jobBriefDetails.location}</li>
//           </ul>
//         )
//       })}
//     </div>
//   )
// }

// function JobTags () {
//   return (
//     <div>
//       {jobsData.map((jobTags) => {
//         return (
//           <ul>
//             <li>{jobTags.role}</li>
//             <li>{jobTags.level}</li>
//             <li>{jobTags.languages}</li>
//             <li>{jobTags.tools}</li>
//           </ul>
//         )
//       })}
//     </div>
//   )
// }
export default App;
