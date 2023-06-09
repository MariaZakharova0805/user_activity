import { useState, useMemo, useCallback, ChangeEvent } from 'react'
import { shallow } from 'zustand/shallow'
import { useDictionaryStore, selectorDictionaryItems, addDictionaryItem } from 'entities/dictionary'

export const useDictionaryForm = () => {
  const [key, setKey] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [err, setErr] = useState<boolean>(false)

  const items = useDictionaryStore(selectorDictionaryItems, shallow)

  const keyHandler = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setKey(value)
    if (items.some(({ key }) => key === value)) {
      setErr(true)
      return
    }
    setErr(false)
  }, [items, setKey, setErr])

  const textHandler = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setText(value)
  }, [setText])
  const addHandler = useCallback(async () => {
    if (!err && key && text && await addDictionaryItem({ key, text })) {
      setKey('')
      setText('')
    }
  }, [key, text, err, setKey, setText])

  return useMemo(() => ({
    key,
    text,
    err,
    keyHandler,
    textHandler,
    addHandler
  }), [key, text, err, textHandler, keyHandler, addHandler])
}