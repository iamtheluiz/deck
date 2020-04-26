function executeCommand(commandIndex, folder = "") {
  axios.get('/commands/execute', {
    headers: {
      index: commandIndex,
      folder
    }
  });
}