export const GET = "GET";
export const POST = "POST";
export const PUT = "PUT";
export const ENV_STAGING = "STAGING";
export const ENV_PRODUCTION = "PRODUCTION";

export const CURRENT_API_ENVIRONMENT = ENV_STAGING;

export function GetBaseURL() {
  switch (CURRENT_API_ENVIRONMENT) {
    case ENV_STAGING:
      return "https://www.optimizekwtestingserver.com/testdemo/public/";
    case ENV_PRODUCTION:
      return "https://www.optimizekwtestingserver.com/testdemo/public/";
  }
}

//https://www.optimizekwtestingserver.com/testdemo/public/campaigndetail/2238

export const URLs = {
  CAMPAIGN: {
    URL: "campaign",
    TYPE: POST,
    IMAGE:false,
  },
  CREATIVE: {
    URL: "creative",
    TYPE: POST,
    IMAGE:true,
  },
  CAMPAIGNDETAIL: {
    URL: "campaigndetail",
    TYPE: GET,
    IMAGE:false,
  },
};
