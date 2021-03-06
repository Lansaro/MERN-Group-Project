const MemoryController = require('../controllers/memory.controller');
const {authenticate, verify} = require('../middleware/jwt.config')

module.exports = app => {
    app.post('/api/memory', MemoryController.createMemory);
    app.get('/api/memory', MemoryController.getAllMemories);
    app.get('/api/memory/:id', MemoryController.getOneMemory);
    app.delete('/api/memory/:id', MemoryController.deleteMemory);
}