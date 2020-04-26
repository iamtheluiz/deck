const fs = require('fs');
const path = require('path');

const store = async (req, res, next) => {
  // Create a storage file
  await fs.writeFileSync(path.resolve(__dirname, '..', 'database', 'storage.json'), JSON.stringify(req.programData), () => { });

  return next();
}

module.exports = { store };