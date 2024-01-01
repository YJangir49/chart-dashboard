import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { tpOverviewMockResp, tpUtilityConstant } from "../data";
import { generateDataBetweenDates } from "../utils/mockDataGenerator";

const apiMock = () => {
  const mock = new MockAdapter(axios, { delayResponse: 500 });
  mock
    .onGet("http://localhost:1880/tp/overview")
    .reply(200, tpOverviewMockResp);
  mock
    .onGet("http://localhost:1880/tp/utility/constants")
    .reply(200, tpUtilityConstant);

  mock
    .onPost("http://localhost:1880/tp/utility/tphistorical")
    .reply((config) => {
      const requestBody = JSON.parse(config.data);
      return [
        200,
        generateDataBetweenDates(requestBody.startDate, requestBody.endDate),
      ];
    });

  return axios;
};

export default apiMock;
