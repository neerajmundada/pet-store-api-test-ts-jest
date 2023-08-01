# Pet store API Test

## Requirements
1. node

## Installation

To install library to your local

```shell
npm install
```

To execute from command line using Maven goal, simply execute:

```shell
npx jest
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java

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

```


## Documentation for API Endpoints

All URIs are relative to *https://petstore.swagger.io/v2*

**NOTE**

[**For test purpose I have added tried to add few tests using type script**](#)



Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*PetApi* | [**addPet**](docs/PetApi.md#addPet) | **POST** /pet | Add a new pet to the store
*PetApi* | [**deletePet**](docs/PetApi.md#deletePet) | **DELETE** /pet/{petId} | Deletes a pet
*PetApi* | [**findPetsByStatus**](docs/PetApi.md#findPetsByStatus) | **GET** /pet/findByStatus | Finds Pets by status
*PetApi* | [**findPetsByTags**](docs/PetApi.md#findPetsByTags) | **GET** /pet/findByTags | Finds Pets by tags
*PetApi* | [**getPetById**](docs/PetApi.md#getPetById) | **GET** /pet/{petId} | Find pet by ID
*PetApi* | [**updatePet**](docs/PetApi.md#updatePet) | **PUT** /pet | Update an existing pet
*PetApi* | [**updatePetWithForm**](docs/PetApi.md#updatePetWithForm) | **POST** /pet/{petId} | Updates a pet in the store with form data
*PetApi* | [**uploadFile**](docs/PetApi.md#uploadFile) | **POST** /pet/{petId}/uploadImage | uploads an image
*StoreApi* | [**deleteOrder**](docs/StoreApi.md#deleteOrder) | **DELETE** /store/order/{orderId} | Delete purchase order by ID
*StoreApi* | [**getInventory**](docs/StoreApi.md#getInventory) | **GET** /store/inventory | Returns pet inventories by status
*StoreApi* | [**getOrderById**](docs/StoreApi.md#getOrderById) | **GET** /store/order/{orderId} | Find purchase order by ID
*StoreApi* | [**placeOrder**](docs/StoreApi.md#placeOrder) | **POST** /store/order | Place an order for a pet
*UserApi* | [**createUser**](docs/UserApi.md#createUser) | **POST** /user | Create user
*UserApi* | [**createUsersWithArrayInput**](docs/UserApi.md#createUsersWithArrayInput) | **POST** /user/createWithArray | Creates list of users with given input array
*UserApi* | [**createUsersWithListInput**](docs/UserApi.md#createUsersWithListInput) | **POST** /user/createWithList | Creates list of users with given input array
*UserApi* | [**deleteUser**](docs/UserApi.md#deleteUser) | **DELETE** /user/{username} | Delete user
*UserApi* | [**getUserByName**](docs/UserApi.md#getUserByName) | **GET** /user/{username} | Get user by user name
*UserApi* | [**loginUser**](docs/UserApi.md#loginUser) | **GET** /user/login | Logs user into the system
*UserApi* | [**logoutUser**](docs/UserApi.md#logoutUser) | **GET** /user/logout | Logs out current logged in user session
*UserApi* | [**updateUser**](docs/UserApi.md#updateUser) | **PUT** /user/{username} | Updated user


