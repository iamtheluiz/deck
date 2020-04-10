function deleteCommand(index) {
  axios.delete(`/commands/${index}`);
}