import type CallersInfoRequest from './CallersInfoRequest';
import type CalledNumberInfo from './CalledNumberInfo';
import type ScheduleInfo from './ScheduleInfo';
import type ForwardingInfo from './ForwardingInfo';
import type UnconditionalForwardingInfo from './UnconditionalForwardingInfo';
import type QueueInfo from './QueueInfo';
import type TransferredExtensionInfo from './TransferredExtensionInfo';
import type VoicemailInfo from './VoicemailInfo';
import type MissedCallInfo from './MissedCallInfo';
import type GreetingInfo from './GreetingInfo';

interface CreateAnsweringRuleRequest {
  /**
   * Specifies if the rule is active or inactive. The default value
   *  is 'True'
   */
  enabled?: boolean;

  /**
   * Type of an answering rule. The 'Custom' value should be specified
   * Required
   */
  type?: string;

  /**
   * Name of an answering rule specified by user
   * Required
   */
  name?: string;

  /**
   * Answering rule will be applied when calls are received from the specified caller(s)
   */
  callers?: CallersInfoRequest[];

  /**
   * Answering rules are applied when calling to selected number(s)
   */
  calledNumbers?: CalledNumberInfo[];

  /**
   */
  schedule?: ScheduleInfo;

  /**
   * Specifies how incoming calls are forwarded
   */
  callHandlingAction?:
    | 'ForwardCalls'
    | 'UnconditionalForwarding'
    | 'AgentQueue'
    | 'TransferToExtension'
    | 'TakeMessagesOnly'
    | 'PlayAnnouncementOnly'
    | 'SharedLines';

  /**
   */
  forwarding?: ForwardingInfo;

  /**
   */
  unconditionalForwarding?: UnconditionalForwardingInfo;

  /**
   */
  queue?: QueueInfo;

  /**
   */
  transfer?: TransferredExtensionInfo;

  /**
   */
  voicemail?: VoicemailInfo;

  /**
   */
  missedCall?: MissedCallInfo;

  /**
   * Greetings applied for an answering rule; only predefined greetings
   *  can be applied, see Dictionary Greeting List
   */
  greetings?: GreetingInfo[];

  /**
   * Call screening status. 'Off' - no call screening; 'NoCallerId'
   *  - if caller ID is missing, then callers are asked to say their name before
   *  connecting; 'UnknownCallerId' - if caller ID is not in contact list, then
   *  callers are asked to say their name before connecting; 'Always' - the
   *  callers are always asked to say their name before connecting. The default
   *  value is 'Off'
   * Default: Off
   */
  screening?: 'Off' | 'NoCallerId' | 'UnknownCallerId' | 'Always';
}

export default CreateAnsweringRuleRequest;
