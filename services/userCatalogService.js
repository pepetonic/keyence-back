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
  
  module.exports = { processData };
  