import './App.css';
// import jobsData from './data';

function App() {
  return (
    <div className="App">
      <JobListing />
    </div>
  );
}


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
    <div>CompanyLogo</div>
  )
}

function CompanyName () {
  return (
    <div>CompanyName</div>
  )
}

function JobTitle () {
  return (
    <div>JobTitle</div>
  )
}

function JobBriefDetails () {
  return (
    <div>JobBriefDetails</div>
  )
}

function JobTags () {
  return (
    <div>JobTags</div>
  )
}
export default App;
