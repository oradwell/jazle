import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the JavaScript library name in 6 tries. After each guess, the
        color of the tiles will change to show how close your guess was to the
        library name.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="R" status="correct" />
        <Cell value="E" />
        <Cell value="A" />
        <Cell value="C" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter R is in the library name and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="T" />
        <Cell value="H" />
        <Cell value="R" status="present" />
        <Cell value="E" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter R is in the library name but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="W" />
        <Cell value="T" />
        <Cell value="F" />
        <Cell value="J" status="absent" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter J is not in the library name in any spot.
      </p>
    </BaseModal>
  )
}
