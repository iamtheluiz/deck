function executeCommand(commandIndex) {
  axios.get('/commands/execute', {
    headers: {
      index: commandIndex
    }
  });
}