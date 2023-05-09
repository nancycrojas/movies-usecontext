import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  SimpleGrid,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UserContext } from '../../context/user/UserContext'
import { useLangContext } from '../../context/lang/LangProvider'

export const LoginModal = () => {
  const { t } = useLangContext()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { login } = useContext(UserContext)

  const handleLogin = (data) => {
    login(data)
    onClose()
  }

  return (
    <>
      <Button onClick={onOpen} color="white" variant="outline" mr={2}>
        {t('login')}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(handleLogin)}>
          <ModalHeader>{t('login')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid gap={5}>
              <FormControl isInvalid={!!errors.email}>
                <FormLabel>{t('email')}</FormLabel>
                <Input
                  type="email"
                  {...register('email', {
                    required: t('required'),
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: 'This email is not valid',
                    },
                  })}
                />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.password}>
                <FormLabel>{t('password')}</FormLabel>
                <Input
                  type="password"
                  {...register('password', {
                    required: t('required'),
                    minLength: {
                      value: 6,
                      message: 'The password is too short',
                    },
                  })}
                />
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>
            </SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              {t('close')}
            </Button>
            <Button colorScheme="blue" type="submit">
              {t('login')}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
