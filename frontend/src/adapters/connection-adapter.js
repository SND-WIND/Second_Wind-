import {
  fetchHandler,
  getPostOptions,
  getPatchOptions,
  deleteOptions,
  basicFetchOptions,
} from "../utils";

const baseUrl = "/api/connections";

export const createConnection = async ({ user_id, account_type }) => {
  const [connection] = await fetchHandler(
    baseUrl,
    getPostOptions({ user_id, account_type })
  );
  return connection;
};

export const updateConnection = async ({ connection_id }) => {
  const [connection] = await fetchHandler(
    `${baseUrl}/${connection_id}`,
    getPatchOptions({ account_type })
  );
  return connection;
};

export const deleteConnection = async ({ connection_id }) => {
  const [connection] = await fetchHandler(
    `${baseUrl}/${connection_id}`,
    deleteOptions
  );
  return connection;
};

export const getConnections = async () => {
  const [connections] = await fetchHandler(baseUrl);
  return connections || [];
};

export const getConnectionRequest = async () => {
  const [connectionRequests] = await fetchHandler(`${baseUrl}/request`);
  return connectionRequests || [];
};
