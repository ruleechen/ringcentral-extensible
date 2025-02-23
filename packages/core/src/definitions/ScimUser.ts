import type ScimUserAddress from './ScimUserAddress';
import type ScimEmail from './ScimEmail';
import type ScimName from './ScimName';
import type ScimPhoneNumber from './ScimPhoneNumber';
import type ScimPhoto from './ScimPhoto';
import type ScimEnterpriseUser from './ScimEnterpriseUser';

interface ScimUser {
  /**
   * User status
   */
  active?: boolean;

  /**
   */
  addresses?: ScimUserAddress[];

  /**
   * Required
   */
  emails?: ScimEmail[];

  /**
   * External unique resource id defined by provisioning client
   */
  externalId?: string;

  /**
   * Unique resource id defined by RingCentral
   */
  id?: string;

  /**
   * Required
   */
  name?: ScimName;

  /**
   */
  phoneNumbers?: ScimPhoneNumber[];

  /**
   */
  photos?: ScimPhoto[];

  /**
   * Required
   */
  schemas?: 'urn:ietf:params:scim:schemas:core:2.0:User'[];

  /**
   * User title
   */
  title?: string;

  /**
   */
  'urn:ietf:params:scim:schemas:extension:enterprise:2.0:User'?: ScimEnterpriseUser;

  /**
   * MUST be same as work type email address
   * Required
   */
  userName?: string;
}

export default ScimUser;
