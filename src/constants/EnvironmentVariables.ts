type Env = {
  [key: string]: {
    value: string;
    required: boolean;
  };
};

const EnvironmentVariables: Env = {
  API_URL: {
    value: process.env.API_URL || "",
    required: true,
  },
  NODE_ENV: {
    value: process.env.NODE_ENV || "",
    required: false,
  },
};

for (const key in EnvironmentVariables) {
  const { required, value } = EnvironmentVariables[key];

  if (!value && required) {
    throw new Error(`[ENVIRONMENT_VARIABLES] Missing ${key} variable`);
  }

  if (!value) {
    console.warn(`[ENVIRONMENT_VARIABLES] Missing ${key} variable`);
  }
}

export default EnvironmentVariables;
