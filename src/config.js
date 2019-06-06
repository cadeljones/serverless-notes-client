export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "ca-central-1",
      BUCKET: "cadel-notes"
    },
    apiGateway: {
      REGION: "ca-central-1",
      URL: "https://xvrnvnbn2a.execute-api.ca-central-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "ca-central-1",
      USER_POOL_ID: "ca-central-1_qD2pyOvNw",
      APP_CLIENT_ID: "4698jnlr2vfla9hcgkr72k0nsc",
      IDENTITY_POOL_ID: "ca-central-1:c59db02e-e68c-4cde-a07e-bb247847d141"
    }
  };
  