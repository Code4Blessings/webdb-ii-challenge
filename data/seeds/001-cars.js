
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate() //resets the id (primary key) back to 1 
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
              "vin": "V12345678910324556",
            "car make": "toyota",
              "model": "rav4", 
              "mileage": "12,000"
        },
        {
            "vin": "V12345678910324590", 
            "car make": "toyota",
            "model": "corolla", 
            "mileage": "14,000"
        },
        {
              "vin": "V12345678910324517",
              "car make": "toyota",
              "model": "camry", 
              "mileage": "15,000"
        },
      ]);
    });
};
