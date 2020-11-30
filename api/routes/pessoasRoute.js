const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.post('/pessoas', PessoaController.criarPessoa)

router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.delete('/pessoas/:id', PessoaController.apagaPessoa)

router.get('/pessoas/ativas', PessoaController.pegaPessoasAtivas)

router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
router.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas)

router.post('/pessoas/:estudanteId/cancela', PessoaController.cancelaPessoa)

router.get('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.pegaUmaMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.atualizaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.apagaMatricula)

router.get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas)
router.get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma)
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)


module.exports = router