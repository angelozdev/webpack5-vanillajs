import axios from "axios";
import { EnvironmentVariables } from "src/constants";
import { Response, User, Options } from "types/response";

async function getUsers(
  options: Options = {},
  callback?: (err: Error | null, data?: User[]) => void
): Promise<User[]> {
  const { results, gender, nat, page } = options;
  const params = { results, gender, nat, page };
  const { API_URL } = EnvironmentVariables;
  return axios
    .get<Response>(API_URL.value, {
      params,
    })
    .then(({ data }) => {
      callback?.(null, data.results);
      return data.results;
    })
    .catch((error) => {
      console.error(error);
      callback?.(error);
      return [];
    });
}

export default getUsers;
