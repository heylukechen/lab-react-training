import profiles from '../data/berlin.json';
import { useState } from 'react';

const FaceBook = () => {
  const [profileList, setProfileList] = useState(profiles);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const selectCountry = (country) => {
    setSelectedCountry(country);
  };

  const studentsProfile = profiles.filter((student) => {
    return student.isStudent === true;
  });

  const countriesOfStudents = [];
  for (let i = 0; i < studentsProfile.length; i++) {
    if (!countriesOfStudents.includes(studentsProfile[i].country)) {
      countriesOfStudents.push(studentsProfile[i].country);
    }
  }

  const getSorting = (value) => {
    const copy = [...profiles];
    console.log(value);
    if (value === 'alphabeticalAscending') {
      const newList = copy.sort((a, b) => {
        return a.lastName.localeCompare(b.lastName);
      });
      setProfileList(newList);
    } else if (value === 'alphabeticalDescending') {
      const newList = copy.sort((a, b) => {
        return b.lastName.localeCompare(a.lastName);
      });
      setProfileList(newList);
    } else {
      setProfileList(profiles);
    }
  };

  // const filterList = (country) => {
  //   const newList = profiles.filter((profile) => {
  //     return profile.country === country;
  //   });
  //   setProfileList(newList);
  // };

  return (
    <div>
      <button
        onClick={() => {
          setProfileList(profiles);
          setSelectedCountry(null);
        }}
      >
        All
      </button>

      {countriesOfStudents.map((country) => {
        return (
          <button onClick={() => selectCountry(country)}>{country}</button>
        );
      })}

      <div>
        <label for="profiles">Sort: </label>
        <select
          onChange={(event) => getSorting(event.target.value)}
          name="profile"
          id="profile-sort"
        >
          <option value="default">Defualt</option>
          <option value="alphabeticalAscending">Name: A->Z</option>
          <option value="alphabeticalDescending">Name: Z->A</option>
        </select>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {profileList.map((profile) => {
          return (
            <div
              className="card col-3"
              style={{
                backgroundColor:
                  profile.country === selectedCountry ? 'lightblue' : 'white',
                border: 'solid',
              }}
            >
              <img className="head-shot" src={profile.img} alt="" />
              <div className="card-content">
                <p>
                  <span>Frist name: </span>
                  {profile.firstName}
                </p>
                <p>
                  <span>Last name: </span>
                  {profile.lastName}
                </p>
                <p>
                  <span>Country: </span>
                  {profile.country}
                </p>
                <p>
                  <span>Type: </span>
                  {profile.isStudent ? <>Student</> : <>Teacher</>}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaceBook;
