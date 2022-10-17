/* eslint-disable camelcase */
import { GET, GetBaseURL, POST, PUT } from "@networking/Urls";
import Axios from "axios";

const connectionTimeout = 5 * 60 * 1000; // 30 Secs

export const request = async (
  request,
  payload,
  noJWT,
  urlExtraData,
  cancelToken
) => {
  let { URL } = request;
  const { TYPE } = request;
  const axiosInstance = await getInstance(noJWT);

  if (TYPE === GET) {
    URL += payload ? `/${payload}` : "";
  } else {
    // payload = { payload };
    if (urlExtraData !== undefined) URL += urlExtraData;
  }

  switch (TYPE) {
    case GET:
      return axiosInstance
        .get(URL, { cancelToken })
        .then((response) => {
          return {
            response: response?.data,
            statusCode: response?.status
          };
        })
        .catch(async (err) => {
          return {
            response: err?.response?.data || err,
            statusCode: 0
          };
        });
    case POST:
      // console.log(URL);
      // console.log(payload);
      return axiosInstance
        .post(URL, payload, { cancelToken })
        .then((response) => {
          return {
            response: response?.data,
            statusCode: response?.status
          };
        })
        .catch(async (err) => {
          return {
            response: err?.response?.data || err,
            statusCode: 0
          };
        });
    case PUT:
      // console.log(URL);
      // console.log(payload);
      return axiosInstance
        .put(URL, payload, { cancelToken })
        .then((response) => {
          return {
            response: response?.data,
            statusCode: response?.status
          };
        })
        .catch(async (err) => {
          return {
            response: err?.response?.data || err,
            statusCode: 0
          };
        });
  }
};

async function getInstance(noJWT) {
  if (noJWT !== undefined && noJWT) {
    return getNewOrOldInstance(true);
  }
  return getNewOrOldInstance(false);
}

async function getNewOrOldInstance(noJWT) {
  let accessToken;
  if (!noJWT) {
    accessToken = ""
    if (accessToken === null) accessToken = "";
  }

  const newRequest = Axios.create({
    baseURL: GetBaseURL(),
    timeout: connectionTimeout,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${accessToken}`
    }
  });

  return newRequest;
}
