import axios from 'axios';
import queryString from 'query-string';
import { ExperimentInterface, ExperimentGetQueryInterface } from 'interfaces/experiment';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getExperiments = async (
  query?: ExperimentGetQueryInterface,
): Promise<PaginatedInterface<ExperimentInterface>> => {
  const response = await axios.get('/api/experiments', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createExperiment = async (experiment: ExperimentInterface) => {
  const response = await axios.post('/api/experiments', experiment);
  return response.data;
};

export const updateExperimentById = async (id: string, experiment: ExperimentInterface) => {
  const response = await axios.put(`/api/experiments/${id}`, experiment);
  return response.data;
};

export const getExperimentById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/experiments/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteExperimentById = async (id: string) => {
  const response = await axios.delete(`/api/experiments/${id}`);
  return response.data;
};
