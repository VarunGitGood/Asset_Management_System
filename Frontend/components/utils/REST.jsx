import axios from "axios";
const URL = "http://localhost:5000/api/v1"

// all return a promise

async function FetchData(path, auth, token) {
  if (auth) {
    const result = await axios.get(`${URL}${path}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return result;
  } else {
    const result = await axios.get(`${URL}${path}`);
    return result;
  }
}

async function postData(path, auth, token, body) {
  if (auth) {
    const result = await axios.post(`${URL}${path}`, body, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return result;
  } else {
    const result = await axios.post(`${URL}${path}`, body);
    return result;
  }
}

async function deleteData(path, auth, token) {
  if (auth) {
    const result = await axios.delete(`${URL}${path}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return result;
  } else {
    const result = await axios.delete(`${URL}${path}`);
    return result;
  }
}

async function putData(path, auth, token, body) {
  if (auth) {
    const result = await axios.put(`${URL}${path}`, {
      headers: { Authorization: `Bearer ${token}` },
      body: body,
    });
    return result;
  } else {
    const result = await axios.put(`${URL}${path}`, body);
    return result;
  }
}

export { FetchData, postData, deleteData, putData };
