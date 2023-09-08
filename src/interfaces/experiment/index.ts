import { DesignInterface } from 'interfaces/design';
import { ProjectInterface } from 'interfaces/project';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ExperimentInterface {
  id?: string;
  experiment_name: string;
  experiment_date?: any;
  results?: string;
  project_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  design?: DesignInterface[];
  project?: ProjectInterface;
  user?: UserInterface;
  _count?: {
    design?: number;
  };
}

export interface ExperimentGetQueryInterface extends GetQueryInterface {
  id?: string;
  experiment_name?: string;
  results?: string;
  project_id?: string;
  user_id?: string;
}
