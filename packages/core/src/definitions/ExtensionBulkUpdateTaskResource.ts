import type ExtensionBulkUpdateTaskResult from './ExtensionBulkUpdateTaskResult';

/**
 * Information on a task for updating multiple extensions
 *
 */
interface ExtensionBulkUpdateTaskResource {
  /**
   * Link to a task resource
   * Required
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of a task
   * Required
   */
  id?: string;

  /**
   * Task status
   * Required
   */
  status?: 'Accepted' | 'InProgress' | 'Completed' | 'Failed';

  /**
   * Task creation datetime
   * Required
   * Format: date-time
   */
  creationTime?: string;

  /**
   * Task latest update datetime
   * Required
   * Format: date-time
   */
  lastModifiedTime?: string;

  /**
   */
  result?: ExtensionBulkUpdateTaskResult;
}

export default ExtensionBulkUpdateTaskResource;
