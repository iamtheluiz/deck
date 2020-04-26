async function deleteCommand(index) {
  axios.delete(`/commands/${index}`);

  window.location.reload();
}