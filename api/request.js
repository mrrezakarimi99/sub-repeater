import axios from 'axios';

const apiUrl = 'https://api.fardad.sourceinja.ir/api';

const Request = (
  path,
  method = 'GET',
  data = {},
  headers = {
    'Content-Type': 'application/json'
  },
  auth = false
) => {
  const url = `${apiUrl}/${path}`;
  const options = {
    method,
    headers,
    data: JSON.stringify(data)
  };
  if (auth) {
    options.headers['Authorization'] = `Bearer ${auth}`;
  }
  return axios(url, options)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default Request;
