const generateUniqueID = require('../../src/utils/generateID')

describe('Generate Unique ID', () => {
    it('Should generate an unique ID', () => {
        const id = generateUniqueID();
        expect(id).toHaveLength(8)
    })
})