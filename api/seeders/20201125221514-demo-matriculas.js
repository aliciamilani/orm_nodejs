module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Matriculas', [
			{
				status: "confirmado",
				estudante_id: 45,
				turma_id: 21,
				createdAt: new Date(),
				updatedAt: new Date()
		},
		{
			status: "confirmado",
			estudante_id: 46,
			turma_id: 22,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "confirmado",
			estudante_id: 47,
			turma_id: 23,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "confirmado",
			estudante_id: 48,
			turma_id: 24,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "cancelado",
			estudante_id: 49,
			turma_id: 21,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "cancelado",
			estudante_id: 50,
			turma_id: 23,
			createdAt: new Date(),
			updatedAt: new Date()
		}
		], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Matriculas', null, {})
  }
}
