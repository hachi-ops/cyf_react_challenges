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
            <CompanyLogo />
            <CompanyName />
            <JobTitle />
            <JobBriefDetails />
            <JobTags />
        </div>
    )
}

function CompanyLogo () {
  return (
    <div>
      {jobsData.map((logo)=>{
        return (
          <img src={logo.logo} alt={"logo"} style={{width: "80px"}} />
        )
      })}
    </div>
  )
}

function CompanyName () {
  return (
    <div>
      {jobsData.map((company) => {
        return (
          <h1>{company.company}</h1>
        )
      })}
    </div>
  )
}

function JobTitle () {
  return (
    <div>
      {jobsData.map((position) => {
        return (
          <h1>{position.position}</h1>
        )
      })}
  
    </div>
  )
}

function JobBriefDetails () {
  return (
    <div>
      {jobsData.map((jobBriefDetails) => {
        return (
          <ul>
            <li>{jobBriefDetails.postedAt}</li>
            <li>{jobBriefDetails.contract}</li>
            <li>{jobBriefDetails.location}</li>
          </ul>
        )
      })}
    </div>
  )
}

function JobTags () {
  return (
    <div>
      {jobsData.map((jobTags) => {
        return (
          <ul>
            <li>{jobTags.role}</li>
            <li>{jobTags.level}</li>
            <li>{jobTags.languages}</li>
            <li>{jobTags.tools}</li>
          </ul>
        )
      })}
    </div>
  )
}
export default App;
