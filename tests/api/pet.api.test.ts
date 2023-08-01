import axios from 'axios';
import yaml from 'yamljs';
import path from 'path';
import { randomGenerator } from '../utils/random-number-generator';

const config = yaml.load(path.join(__dirname, '../../config/config.yaml'));

// base URL of your REST API
const baseURL = config.baseURL;
var petID: number = 0;

// get pet by available status
describe('Petstore API Test - get pets by status', () => {
  it('should fetch pets by status', async () => {
    const status = 'available';

    const response = await axios.get(`${baseURL}/pet/findByStatus?status=${status}`, {
      headers: { 'Accept': 'application/json' }
    });

    // Assert response status code
    expect(response.status).toBe(200);

    // Assert the response body is not empty
    expect(JSON.stringify(response.data)).not.toBe('{}');
  });

});


describe('Petstore API Test - order pet', () => {
  it('should create a new order and assert status code and status complete = true', async () => {

    const data = {
      "quantity": 1,
      "petId": petID,
      "id": randomGenerator(),
      "complete": true
    };


    const response = await axios.post(`${baseURL}/store/order`, data, {
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
    });


    // Assert the status code
    expect(response.status).toBe(200);

    // Assert the response body
    expect(response.data).toEqual(data);

    // Assert the property complete = true
    expect(response.data.complete).toBe(true);
  });

});

describe('Petstore API Test - get ineventory details', () => {

  it('should get store inventory', async () => {
    const status = 'available';

    const response = await axios.get(`${baseURL}/store/inventory`, {
      headers: { 'Accept': 'application/json' }
    });

    // Assert response status code
    expect(response.status).toBe(200);
    // Assert response body is not empty
    expect(JSON.stringify(response.data)).not.toBe('{}');
  });

});

describe('Petstore API Test - create user', () => {
it('should create a new user and assert the status code', async () => {
  const data = {
    "id": String(randomGenerator()),
    "username": "test-pet-user" + String(randomGenerator()),
    "firstName": "test-pet-user-fname",
    "lastName": "test-pet-user-lname",
    "email": "test-pet-user@test.com",
    "password": "1234",
    "phone": "09099999999",
    "userStatus": "1"
  };

  const response = await axios.post(`${baseURL}/user`, data, {
    headers: { 'Content-Type': 'application/json'}
  });

   // Assert the status code
   expect(response.status).toBe(200);

  });
});
