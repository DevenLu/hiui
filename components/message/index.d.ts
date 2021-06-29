interface Props {

}
type Options = {
  type?: 'info' | 'success' | 'error' | 'warning'
  title: string
  duration?: number
  style?: CSSProperties
  className?: string
  onClick?: (event: MouseEvent) => void
  onClose?: () => void
}
const OpenFun: (options: Options) => void
declare class Message extends React.Component<Props, any> {
  static open = OpenFun
}
export default Message
