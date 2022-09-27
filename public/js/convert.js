console.log('client-side code running');

const convert_data_btn = document.getElementById('convert_data');
const xml_data_field = document.getElementById('xml_data');
const json_data_field = document.getElementById('json_data');

convert_data_btn.addEventListener('click', function(e) {
  console.log('convert_data button clicked');

  var _xml_data = xml_data_field.value;
  // var xml_data = { username: 'smhong' };

  fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      xml_data: _xml_data,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // var _data = JSON.parse(data);
      var _data = JSON.stringify(data, null, 2);
      console.log(_data);
      // console.log(data);
  });
});