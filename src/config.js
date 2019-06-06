const dev = {
    s3: {
      REGION: "ca-central-1",
      BUCKET: "notes-app-2-api-dev-attachmentsbucket-scatiw5bl71o"
    },
    apiGateway: {
      REGION: "ca-central-1",
      URL: "https://jtpirsanc0.execute-api.ca-central-1.amazonaws.com/dev"
    },
    cognito: {
      REGION: "ca-central-1",
      USER_POOL_ID: "ca-central-1_7EsHHVkaz",
      APP_CLIENT_ID: "6hmlhn83fcrocace8svuia2at",
      IDENTITY_POOL_ID: "ca-central-1:42293571-f37d-4a83-a296-b89e82a72233"
    }
  };
  
  const prod = {
    s3: {
      REGION: "ca-central-1",
      BUCKET: "notes-app-2-api-prod-attachmentsbucket-irpzzw5qeiq0"
    },
    apiGateway: {
      REGION: "ca-central-1",
      URL: "https://hgwtolj26b.execute-api.ca-central-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "ca-central-1",
      USER_POOL_ID: "ca-central-1_wyXX5ixJr",
      APP_CLIENT_ID: "4ie6s1comdh11nqs401rvdgivq",
      IDENTITY_POOL_ID: "ca-central-1:ba1db38b-e0c7-4534-adfa-86dc5523f0a7"
    }
  };
  
  // Default to dev if not set
  const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;
  
  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };
  