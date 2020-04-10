if (document.querySelector('form')) {
  document.querySelector('form').onsubmit = (event) => {
    event.preventDefault();

    // Get fields
    const fields = event.target.elements;
    const length = fields.length;

    // Storage data
    let data = {};

    for (let i = 0; i < length; i++) {
      const element = fields[i];

      // Store field data
      if (element.name && element.name !== '') {
        data[element.name] = element.value;
      }
    }

    // Send request
    axios.post('/commands', data);
  }
}