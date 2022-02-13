import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
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
