import type CompanyAnsweringRuleWeeklyScheduleInfoRequest from './CompanyAnsweringRuleWeeklyScheduleInfoRequest';
import type RangesInfo from './RangesInfo';

/**
 * Schedule when an answering rule should be applied
 */
interface CompanyAnsweringRuleScheduleInfo {
  /**
   */
  weeklyRanges?: CompanyAnsweringRuleWeeklyScheduleInfoRequest;

  /**
   * Specific data ranges. If specified, weeklyRanges cannot be specified
   */
  ranges?: RangesInfo[];

  /**
   * Reference to Business Hours or After Hours schedule = ['BusinessHours', 'AfterHours']
   */
  ref?: 'BusinessHours' | 'AfterHours';
}

export default CompanyAnsweringRuleScheduleInfo;
