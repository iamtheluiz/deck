const fs = require('fs');
const path = require('path');

module.exports = async () => {
  let programData = {
    commands: []
  };

  try {
    const raw = await fs.readFileSync(path.resolve(__dirname, '..', 'database', 'storage.json'));

    programData = await JSON.parse(raw);

    return programData;
  } catch (error) {
    fs.writeFile(path.resolve(__dirname, '..', 'database', 'storage.json'), JSON.stringify(programData), () => { });
  }

  return programData;
}