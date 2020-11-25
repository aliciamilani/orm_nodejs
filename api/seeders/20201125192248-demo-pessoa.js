module.exports = {
	up: (queryInterface, Sequelize) => {
		  return queryInterface.bulkInsert('Pessoas', [
			  {
				  nome: 'Ana Souza',
				  ativa: true,
				  email: 'ana@ana.com',
				  role: 'estudante',
				  createdAt: new Date(),
				  updatedAt: new Date()
			  },
			  {
				  nome: 'Marcos Cintra',
				  ativa: true,
				  email: 'marcos@marcos.com',
				  role: 'estudante',
				  createdAt: new Date(),
				  updatedAt: new Date()
			  },
			  {
				  nome: 'Felipe Cardoso',
				  ativa: true,
				  email: 'felipe@felipe.com',
				  role: 'estudante',
				  createdAt: new Date(),
				  updatedAt: new Date()
			  },
			  {
				  nome: 'Sandra Gomes',
				  ativa: false,
				  email: 'sandra@sandra.com',
				  role: 'estudante',
				  createdAt: new Date(),
				  updatedAt: new Date()
			  },
			  {
				  nome: 'Paula Morais',
				  ativa: true,
				  email: 'paula@paula.com',
				  role: 'docente',
				  createdAt: new Date(),
				  updatedAt: new Date()
			  },
			  {
				  nome: 'Sergio Lopes',
				  ativa: true,
				  email: 'sergio@sergio.com',
				  role: 'docente',
				  createdAt: new Date(),
				  updatedAt: new Date()
			  }
	  ], {})
	},
  
	down: (queryInterface, Sequelize) => {
		  return queryInterface.bulkDelete('Pessoas', null, {})
	}
  }
  