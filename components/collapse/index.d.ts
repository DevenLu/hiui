interface Props {
  accordion?: boolean
  defaultActiveId?: string | string[]
  activeId?: string | string[] | number | number[]
  arrowPlacement?: 'left' | 'right'
  showArrow?: boolean
  onChange?: () => void
  children: Collapse.Panel
  style?: CSSProperties
  className?: string
}
interface PanelProps {
  id?: string
  title?: string | JSX.Element
  disabled?: boolean
  extra?: React.ReactNode
}
declare class Panel extends React.Component<PanelProps, any> {
}
declare class Collapse extends React.Component<Props, any> {
  static Panel = Panel
}
export default Collapse
