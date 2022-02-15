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
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="R"
          status="correct"
        />
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
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="R"
          status="present"
        />
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

      <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
        JavaScript library guessing game by{' '}
        <a
          href="https://twitter.com/oliverradwell"
          className="underline font-bold"
        >
          @oliverradwell
        </a>
        .
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Based on{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          react-wordle
        </a>
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Source code:{' '}
        <a
          href="https://github.com/oradwell/jazle"
          className="underline font-bold"
        >
          github.com/oradwell/jazle
        </a>
      </p>
    </BaseModal>
  )
}
