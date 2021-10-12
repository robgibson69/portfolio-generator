const profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = (profileDataArr) => {

    profileDataArr.forEach(poo => console.log(poo));
};
  
  printProfileData(profileDataArgs);