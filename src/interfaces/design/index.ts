import { ExperimentInterface } from 'interfaces/experiment';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DesignInterface {
  id?: string;
  design_name: string;
  creation_date?: any;
  modification_date?: any;
  status?: string;
  experiment_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  experiment?: ExperimentInterface;
  user?: UserInterface;
  _count?: {};
}

export interface DesignGetQueryInterface extends GetQueryInterface {
  id?: string;
  design_name?: string;
  status?: string;
  experiment_id?: string;
  user_id?: string;
}
