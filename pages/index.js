import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon} from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

export default function Home() {
  return (
      <Layout>
        <Container>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backdropFilter: 'blur(10px)' }}
          >
            Hello, I&apos;m an full-stack developer based in Brazil!
          </Box>
    
          <Box display={{ md: 'flex' }}>
            <Box flexGrow={1}>
              <Heading as="h2" variant="page-title">
                Lorran Porto
              </Heading>
              <p>Full-Stack Developer</p>
            </Box>
            <Box
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
              textAlign="center"
            >
              <Box
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                w="100px"
                h="100px"
                display="inline-block"
                borderRadius="full"
                overflow="hidden"
              >
                <ProfileImage
                  src="/images/my-photo.jpg"
                  alt="Profile image"
                  borderRadius="full"
                  width="100"
                  height="100"
                />
              </Box>
            </Box>
          </Box>
    
          <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
              Work
            </Heading>
            <Paragraph>
              Lorran is a freelance and full-stack developer based in
              Rio de Janeiro, Brazil, with a passion for crafting digital
              services aand projects that align with his own aspirations.
              He possesses remarkable skills across the entire product
              launch process, from planning and design to solving real-world
              problems through coding. When he&apos;s not online, he enjoys leisure
              activities and occasionally engages in live streaming.
            </Paragraph>
            <Box align="center" my={4}>
              <Button
                as={NextLink}
                href="/works"
                scroll={false}
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
              >
                My portfolio
              </Button>
            </Box>
          </Section>
    
          <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
              Bio
            </Heading>
            <BioSection>
              <BioYear>2004</BioYear>
              Born in Rio de Janeiro, Brazil.
            </BioSection>
            <BioSection>
              <BioYear>2021</BioYear>
              Graduated from high school.
            </BioSection>
            <BioSection>
              <BioYear>2021 to present</BioYear>
              Working as a freelancer and started data science college at IBMEC.
            </BioSection>
          </Section>
    
          <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
              I ♥
            </Heading>
            <Paragraph>
                Music,{' '}, Making live streams,{' '}
              <Link href="#" target="_blank">
                Photography
              </Link>
              , Machine Learning
            </Paragraph>
          </Section>
    
          <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
              On the web
            </Heading>
            <List>
              <ListItem>
                <Link href="https://github.com/lorranprt" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoGithub />}
                  >
                    @lorranprt
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://twitter.com/lorranprt" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoTwitter />}
                  >
                    @lorranprt
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://instagram.com/lorranprt" target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoInstagram />}
                  >
                    @lorranprt
                  </Button>
                </Link>
              </ListItem>
            </List>
          </Section>
        </Container>
      </Layout> 
    )
  }

export { getServerSideProps } from '../components/chakra'