import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
  tpOverviewMockResp,
  tpUtilityConstant,
  tgm4,
  tgm4Historical,
} from "../data";
import { generateDataBetweenDates } from "../utils/mockDataGenerator";

const apiMock = () => {
  const mock = new MockAdapter(axios, { delayResponse: 5000 });
  mock
    .onGet("http://localhost:1880/tp/overview")
    .reply(200, tpOverviewMockResp);
  mock
    .onGet("http://localhost:1880/tp/utility/constants")
    .reply(200, tpUtilityConstant);

  mock.onGet("http://localhost:1880/tp/tgm4").reply(200, tgm4);
  mock.onGet("http://localhost:1880/tp/tgm3").reply(200, tgm4);
  mock.onGet("http://localhost:1880/tp/tgm2").reply(200, tgm4);
  mock.onGet("http://localhost:1880/tp/tgm1").reply(200, tgm4);
  mock.onGet("http://localhost:1880/tp/n1").reply(200, tgm4);
  mock.onGet("http://localhost:1880/tp/n2").reply(200, tgm4);
  mock.onGet("http://localhost:1880/tp/pacmac1").reply(200, tgm4);
  mock.onGet("http://localhost:1880/tp/pacmac2").reply(200, tgm4);
  mock.onGet("http://localhost:1880/tp/pacmac3").reply(200, tgm4);
  mock.onGet("http://localhost:1880/tp/pacmac4").reply(200, tgm4);
  mock.onGet("http://localhost:1880/tp/pacmac5").reply(200, tgm4);

  mock
    .onPost("http://localhost:1880/tp/utility/tphistorical")
    .reply((config) => {
      const requestBody = JSON.parse(config.data);
      return [
        200,
        generateDataBetweenDates(requestBody.startDate, requestBody.endDate),
      ];
    });

  mock
    .onPost("http://localhost:1880/tp/historical/tgm4")
    .reply(200, tgm4Historical);
  mock
    .onPost("http://localhost:1880/tp/historical/tgm3")
    .reply(200, tgm4Historical);
  mock
    .onPost("http://localhost:1880/tp/historical/tgm2")
    .reply(200, tgm4Historical);
  mock
    .onPost("http://localhost:1880/tp/historical/tgm1")
    .reply(200, tgm4Historical);
  mock
    .onPost("http://localhost:1880/tp/historical/n1")
    .reply(200, tgm4Historical);
  mock
    .onPost("http://localhost:1880/tp/historical/n2")
    .reply(200, tgm4Historical);
  mock
    .onPost("http://localhost:1880/tp/historical/pacmac1")
    .reply(200, tgm4Historical);
  mock
    .onPost("http://localhost:1880/tp/historical/pacmac2")
    .reply(200, tgm4Historical);
  mock
    .onPost("http://localhost:1880/tp/historical/pacmac3")
    .reply(200, tgm4Historical);
  mock
    .onPost("http://localhost:1880/tp/historical/pacmac4")
    .reply(200, tgm4Historical);
  mock
    .onPost("http://localhost:1880/tp/historical/pacmac5")
    .reply(200, tgm4Historical);

  return axios;
};

export default apiMock;
