import './App.css';
import jobsData from './data';
import JobListing from './components/JobListing';

function App() {
  return (
    <div className="App">
      <JobListing data={jobsData}/>
    </div>
  );
};

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
