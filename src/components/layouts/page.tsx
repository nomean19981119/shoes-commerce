import { Container, Flex } from '@chakra-ui/react'

export interface PageProps {
  children: React.ReactNode
}

export default function Page({ children }: PageProps) {
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Container as="main" flex="1 1 auto" maxWidth="1280px" mb={['24px', null, null, '36px']}>
        {children}
      </Container>
    </Flex>
  )
}
