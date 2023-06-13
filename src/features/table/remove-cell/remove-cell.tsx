import { FC } from 'react'
import styled from 'styled-components'

type RemoveCellProps = { onClick: () => void }

const RemoveButton = styled.div`
  color: #cccccc;
  &:hover {
    color: red;
    cursor: pointer;
  }
`

export const RemoveCell: FC<RemoveCellProps> = ({ onClick }) => (
  <RemoveButton onClick={ onClick }>&#10005;</RemoveButton>
)
