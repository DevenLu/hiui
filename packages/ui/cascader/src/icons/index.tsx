import React from 'react'
import { DownOutlined } from '@hi-ui/icons'

export const defaultSuffixIcon = <DownOutlined />

export const defaultLeafIcon = <span style={{ display: 'inline-block', width: 16 }} />

function IconLoading({ size = '0.8em' }: any) {
  return (
    <i className="hi-v4-cascader__icon--loading">
      <svg viewBox="0 0 18 18" width={size} height={size} fill="currentColor">
        <g>
          <path
            d="m9 18c-4.9706 0-9-4.0294-9-9 0-4.9706 4.0294-9 9-9 4.9706 0 9 4.0294 9 9 0 4.9706-4.0294 9-9 9zm0-2c3.866 0 7-3.134 7-7 0-3.866-3.134-7-7-7-3.866 0-7 3.134-7 7 0 3.866 3.134 7 7 7z"
            opacity=".15"
          />
          <path d="m15.547 2.8242c0.37904 0.40168 0.36068 1.0346-0.040996 1.4136-0.40168 0.37904-1.0346 0.36068-1.4136-0.040996-1.315-1.3935-3.1381-2.1969-5.0922-2.1969-3.866 0-7 3.134-7 7 0 0.55228-0.44772 1-1 1s-1-0.44772-1-1c0-4.9706 4.0294-9 9-9 2.5103 0 4.8578 1.0343 6.5468 2.8242z" />
        </g>
      </svg>
    </i>
  )
}

export const defaultLoadingIcon = <IconLoading />
