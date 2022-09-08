import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          display: `flex`,
          flexDirection: `column`,
          width: `100%`,
          height: `100%`,
          alignItems: `flex-start`,
          fontFamily: `'Source Serif Pro', serif`,
          gap: `1rem`,
          padding: `1rem`,
        }}
      >
        <Heading
          as="h1"
          sx={{ fontSize: `10vh`, fontFamily: `'Source Serif Pro', serif` }}
        >
          Vancouver Needs Hacker Houses
        </Heading>
        <Heading as="h3" sx={{ fontFamily: `'Source Serif Pro', serif` }}>
          What is a Hacker House?
        </Heading>
        <Text sx={{ maxWidth: `50ch` }}>
          iykyk... if you don&apos;t, employ google. This site does not intend
          to be a primary resource for sociologists studying nerds.
        </Text>
        <Heading as="h3" sx={{ fontFamily: `'Source Serif Pro', serif` }}>
          What is the plan here?
        </Heading>
        <Text sx={{ maxWidth: `50ch` }}>
          Let&apos;s socialize some square footage. If you also believe
          Vancouver needs a hacker house (or 2 or n+1 and so on), or{" "}
          <strong>especially</strong> if you would like to commit to living in a
          hacker house as your primary abode, you are in the right place.
        </Text>
        <Text sx={{ maxWidth: `50ch` }}>
          More specifically, the plan is to collect a significant number of
          individuals committed to deploying a hacker house, and then
          renting/buying a place for that express purpose.
        </Text>
        <Text sx={{ maxWidth: `50ch` }}>Most relevant for:</Text>
        <UnorderedList sx={{ maxWidth: `50ch` }}>
          <ListItem>People already working in Tech</ListItem>
          <ListItem>
            People involved with web3 (We will use crypto tools &amp; concepts
            for fund management)
          </ListItem>
          <ListItem>
            People who live in Vancouver that hate paying all that damn rent
          </ListItem>
          <ListItem>
            People who live outside of Vancouver and want to live there but
            can&apos;t figure it out due to all the damn rent
          </ListItem>
          <ListItem>STEM students</ListItem>
          <ListItem>
            Funded Founders looking to minimize lodging expenses and maximize
            productivity
          </ListItem>
        </UnorderedList>
        <Text sx={{ maxWidth: `50ch` }}>Less relevant for:</Text>
        <UnorderedList sx={{ maxWidth: `50ch` }}>
          <ListItem>
            People who hate computers and will smash all of our pretty little
            laptops
          </ListItem>
          <ListItem>Chads (GigaChads/Bloatlords only please)</ListItem>
          <ListItem>Thieves (you will simply be stabbed u.u)</ListItem>
        </UnorderedList>
        <Heading as="h3" sx={{ fontFamily: `'Source Serif Pro', serif` }}>
          This plan sucks and I hate you
        </Heading>
        <Text>Great let&apos;s fight it out</Text>
        <Heading as="h3" sx={{ fontFamily: `'Source Serif Pro', serif` }}>
          Why is this a good idea?
        </Heading>
        <Text sx={{ maxWidth: `50ch` }}>
          Putting a bunch of nerds in a room together does a little thing called
          synergy... obviously you&apos;ve never heard of synergy, and who could
          blame you? You&apos;re looking at a site about DIY socialized housing in a
          Canadian 2 road town on the other side of a continent from Ivy League
          Business Schools.
        </Text>
        <Text sx={{ maxWidth: `50ch` }}>
          Anyways, synergy. That&apos;s when you get more productivity out of a
          system of objects working together than you would out of those parts
          by themselves. The value of combining individuals is greater than the
          sum of individuals.
        </Text>
        <Text sx={{ maxWidth: `50ch` }}>
          This is important for Vancouver because nothing cool ever happens
          there. It&apos;s just all stinky pee streets and bars that close at
          2am on a Friday.
        </Text>
        <Text sx={{ maxWidth: `50ch` }}>
          The last innovation that came out of Vancouver was Vancouverism, the
          architectural 5-story-residential on top and 1-story-commercial below
          and that was like 15 years ago.
        </Text>
        <Text sx={{ maxWidth: `50ch` }}>
          Vancouver has a lot of talented, creative, and experienced people. Did
          you know that 90% of all Canadian film media is produced in and around
          Vancouver? Furthermore, did you know there&apos;s over a 50% chance a
          statistic you read on the internet is made up?
        </Text>
        <Text sx={{ maxWidth: `50ch` }}>
          The world&apos;s got problems, too. There&apos;s energy crises,
          housing crises, economic crises, food supply lines are strained, and
          all these problems require solutions. Putting a bunch of geniuses in
          close proximity together simply tends to create solutions.
        </Text>
        <Text sx={{ maxWidth: `50ch` }}>
          Do you want to solve problems for the world? Of course you do,
          you&apos;re not a hockey player and you&apos;ll never get laid any
          other way than be being the single greatest mind to ever exist in
          history.
        </Text>
        <Heading as="h3" sx={{ fontFamily: `'Source Serif Pro', serif` }}>
          Okay bet, how do I get involved?
        </Heading>
        <Text>
          Join the{" "}
          <a href="https://discord.gg/tRqMgXm6" style={{ textDecoration: `underline` }}>
            discord.
          </a>
        </Text>
      </Box>
    </>
  );
}
