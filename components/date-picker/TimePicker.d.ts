export interface TimeProps extends CommonProps {
  type?: 'default' | 'timerange'
  hourStep?: number
  minuteStep?: number
  secondStep?: number
  placement?: string
  disabledHours?: () => number[]
  disabledMinutes?: (selectedHour: number) => number[]
  disabledSeconds?: (selectedHour: number, selectedMinute: number) => number[]
  style?: React.CSSProperties
  className?: string
}
declare const TimePicker: React.ComponentType<TimeProps>
export default TimePicker
