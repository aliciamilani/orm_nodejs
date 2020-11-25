module.exports = {
	up: (queryInterface, Sequelize) => {
		  return queryInterface.bulkInsert('Turmas', [
			  {
				  data_inicio: "2020-02-01",
				  nivel_id: 19,
				  docente_id: 45,
				  createdAt: new Date(),
				  updatedAt: new Date()				 
			  },
			  {
				  data_inicio: "2020-02-01",
				  nivel_id: 20,
				  docente_id: 46,
				  createdAt: new Date(),
				  updatedAt: new Date()			
			  },
			  {
				  data_inicio: "2020-02-01",
				  nivel_id: 21,
				  docente_id: 47,
				  createdAt: new Date(),
				  updatedAt: new Date()			
				  },
			  {
				  data_inicio: "2020-07-01",
				  nivel_id: 21,
				  docente_id: 48,
				  createdAt: new Date(),
				  updatedAt: new Date()			
			  }
		  ], {})
	},
  
	down: (queryInterface, Sequelize) => {
		  return queryInterface.bulkDelete('Turmas', null, {})
	}
  }
  