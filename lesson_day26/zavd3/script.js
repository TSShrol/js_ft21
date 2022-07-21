async function getUsers(names) {
    let jobs = [];
  
    for(let name of names) {
      let job = fetch(`https://api.github.com/users/${name}`).then(
        successResponse => {
          if (successResponse.status != 200) {
            return null;
          } else {
            return successResponse.json();
          }
        },
        failResponse => {
          return null;
        }
      );
      jobs.push(job);
    }
  
    let results = await Promise.all(jobs);
  
    return results;
  }
 
  let names=['TSShrol','bodzey','MykhalV'];
  console.log(getUsers(names));
  let users= getUsers(names).then(function(value){
    console.log(value);
  });


  https://api.openweathermap.org/data/3.0/onecall?lang=uk&units=metric&q=Rivne&appid=40df048e842adba4c0190cfda31a7571
