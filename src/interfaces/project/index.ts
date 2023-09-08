import { ExperimentInterface } from 'interfaces/experiment';
import { ClientInterface } from 'interfaces/client';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  project_name: string;
  start_date?: any;
  end_date?: any;
  status?: string;
  client_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  experiment?: ExperimentInterface[];
  client?: ClientInterface;
  user?: UserInterface;
  _count?: {
    experiment?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  project_name?: string;
  status?: string;
  client_id?: string;
  user_id?: string;
}
