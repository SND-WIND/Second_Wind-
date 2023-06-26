import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = "/api/jobs";

export const createJob = async ({
  description,
  location,
  salary,
  position,
  job_type,
  link,
}) =>
  fetchHandler(
    baseUrl,
    getPostOptions({ description, location, salary, position, job_type, link })
  );

export const getAllJobs = async () => {
  const [jobs] = await fetchHandler(baseUrl);
  return jobs || [];
};

export const getJob = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const updateJob = async ({
  description,
  location,
  salary,
  position,
  job_type,
  link,
}) =>
  fetchHandler(
    `${baseUrl}/${id}`,
    getPatchOptions({ description, location, salary, position, job_type, link })
  );
