import { FC } from 'react'
import { removeDictionaryItem } from 'entities/dictionary'
import styled from 'styled-components'

const RemoveButton = styled.div`
  color: #cccccc;
  &:hover {
    color: red;
    cursor: pointer;
  }
`

type RemoveCellProps = { dictionaryKey: string }

export const RemoveCell: FC<RemoveCellProps> = ({ dictionaryKey }) => (
  <RemoveButton onClick={ () => removeDictionaryItem(dictionaryKey) }>&#10005;</RemoveButton>
)
