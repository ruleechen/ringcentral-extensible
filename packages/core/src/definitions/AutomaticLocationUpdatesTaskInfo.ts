import type TaskResultInfo from './TaskResultInfo';

interface AutomaticLocationUpdatesTaskInfo {
  /**
   * Internal identifier of a task
   */
  id?: string;

  /**
   * Status of a task
   */
  status?: 'Accepted' | 'InProgress' | 'Completed' | 'Failed';

  /**
   * Task creation time
   * Format: date-time
   */
  creationTime?: string;

  /**
   * Time of the task latest modification
   * Format: date-time
   */
  lastModifiedTime?: string;

  /**
   * Type of a task
   */
  type?: 'WirelessPointsBulkCreate' | 'WirelessPointsBulkUpdate' | 'SwitchesBulkCreate' | 'SwitchesBulkUpdate';

  /**
   */
  result?: TaskResultInfo;
}

export default AutomaticLocationUpdatesTaskInfo;
