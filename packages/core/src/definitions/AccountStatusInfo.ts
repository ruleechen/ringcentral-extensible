/**
 * Status information (reason, comment, lifetime). Returned for 'Disabled'
 * status only
 *
 */
interface AccountStatusInfo {
  /**
   * A free-form user comment, describing the status change reason
   */
  comment?: string;

  /**
   * Type of suspension
   */
  reason?: 'SuspendedVoluntarily' | 'SuspendedInvoluntarily' | 'UserResumed';

  /**
   * Date until which an account will get deleted. The default
   *  value is 30 days since the current date
   */
  till?: string;
}

export default AccountStatusInfo;
