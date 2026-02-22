import { Box, Center, SimpleGrid, Spinner, VStack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import CardInfo from "../components/CardInfo"
import { api } from "../api"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../components/AppContext"
import { start } from "repl"

interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

const ContaInfo = () => {

    const [userData, setUserData] = useState<null | UserData>()
    const navigate = useNavigate()

    const { isLoggedIn } = useContext(AppContext)

    !isLoggedIn && navigate('/')

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [])

    return (
        <>
            <Center>
                <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                    {
                        userData === undefined || userData === null ?
                            (
                                <Center>
                                    <Spinner size='xl' color='white' />
                                </Center>
                            ) :
                            (
                                <>
                                    <CardInfo mainContent={`Dados da sua conta`}
                                        content={
                                            <VStack align='start' spacing={0}>
                                                <Box>E-mail: {userData?.email}</Box>
                                                <Box>Nome: {userData?.name}</Box>
                                                <Box>Número da conta: {userData?.id}</Box>
                                            </VStack>
                                        } />

                                </>
                            )
                    }
                </SimpleGrid>
            </Center>
        </>
    )
}

export default ContaInfo
