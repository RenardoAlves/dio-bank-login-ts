import { Box, Button, Center, Flex, HStack, Spacer, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../services/storage'
import { AppContext } from './AppContext'

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage({ login: false, password: false })
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <Flex backgroundColor='orange' padding='5px'>
      <Box>
        <Center>
          <Text fontSize='3xl'>Dio Bank</Text>
        </Center>
      </Box>
      {
        isLoggedIn && (
          <>
            <Spacer />
            <HStack spacing={4}>
              <Button
                onClick={() => navigate('/conta/1')}
              >
                Página principal
              </Button>
              <Button
                onClick={() => navigate('/infoconta')}
              >
                Dados da conta
              </Button>
              <Button
                onClick={() => logout()}
              >
                Sair
              </Button>
            </HStack>
          </>
        )
      }
    </Flex>

  )
}
