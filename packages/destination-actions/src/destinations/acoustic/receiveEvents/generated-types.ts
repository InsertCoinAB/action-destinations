// Generated file. DO NOT MODIFY IT BY HAND.

export interface Payload {
  /**
   * At a minimum Email is required, see mapping presets for more info.
   */
  email: string
  /**
   * The Event Type, will be either Track or Identify
   */
  type?: string
  /**
   * The Timestamp of the Event
   */
  timestamp?: string | number
  /**
   * Parses all properties provided via a Context Section
   */
  context?: {
    [k: string]: unknown
  }
  /**
   * Parses all properties provided via a Properties Section
   */
  properties?: {
    [k: string]: unknown
  }
  /**
   * Parses all properties provided via a Traits Section
   */
  traits?: {
    [k: string]: unknown
  }
}
