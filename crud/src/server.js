import  axios from 'axios'

const API = "http://localhost:3003/users"

async function getData(){
  try{const response =  await axios.get(API)
  return response.data}
  catch(error){
    console.log(error)
  }
}

async function postData(obj){
  try {
    await axios.post(API, obj)
  } catch (error) {
    console.log(error)
  }
}


export {getData, postData}