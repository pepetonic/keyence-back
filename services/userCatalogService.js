function processData(jsonData) {
    return new Promise((resolve, reject) => {
      try {
        const processData = jsonData.map( element => {
            return {
                userId: element['User ID'],
                userName: element['User Name'],
                date: element.Date,
                punchIn: element['Punch In'],
                punchOut: element['Punch Out']
              };
        });
        resolve(processData);
      } catch (error) {
        reject(error);
      }
    });
  }

  function validateFormat(jsonData){
    return new Promise((resolve, reject) => {
      try {
        let valid = true;
        jsonData.forEach( ele => {
          if(!("User ID" in ele &&"User Name" in ele &&"Date" in ele &&"Punch In" in ele &&"Punch In")){
            valid = false;
          }
        });
        resolve(valid);
      } catch (error) {
        reject(false);
      }
    });

  }
  
  module.exports = { processData, validateFormat };
  