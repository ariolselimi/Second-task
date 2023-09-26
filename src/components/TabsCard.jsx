import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import Css from '../index.css'
import DomainCards from './domains/DomainCards'
import DomainData from '../domainData.json'


function TabsCard() {
  return (
    <Tabs>
    <TabList>
    <div className='Header'>
      <Tab>Domains</Tab>
      <Tab>Web Hosting</Tab>
      <Tab>Dedicated Servers</Tab>
      <Tab>Virtual Cloud Servers</Tab>
      <Tab>WordsPress Hosting</Tab>
      <Tab>Email Hosting</Tab>
      <Tab>VPS Hosting Servers</Tab>
      <Tab>Free Hosting</Tab>
    </div>
    </TabList>
    <TabPanel>
        <div className='domain-card'>
        {DomainData.map((domain, index) => (
        <DomainCards 
          key = {index}
          title = {domain.title}
          price = {domain.price}
          description = {domain.description}
        />
        ))}
      </div>

    </TabPanel>
    <TabPanel>
      <p> 
        <h3>Web Hosting</h3>
        a fictional character featured in video games and related media
        released by Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi is portrayed
        as the slightly younger but taller fraternal twin brother of Nintendo's mascot Mario, and
        appears in many games throughout the Mario franchise, often as a sidekick to his brother.
      </p>
      <p>
        Source:{''}
        <a href="https://en.wikipedia.org/wiki/Luigi" target="_blank">
          Wikipedia
        </a>
      </p>
    </TabPanel>
    <TabPanel>
      <p>
        <h3>Deticated Server</h3>
        princess of the fictional Mushroom Kingdom, which is constantly under
        attack by Bowser. She often plays the damsel in distress role within the series and
        is the lead female. She is often portrayed as Mario's love interest and has appeared
        in Super Princess Peach, where she is the main playable character.
      </p>
      <p>
      </p>
    </TabPanel>
    <TabPanel>
      <p>
        <h3>Virtual Cloud Servers</h3>
        Yossy, is a fictional anthropomorphic dinosaur who appears in
        video games published by Nintendo. Yoshi debuted in Super Mario World (1990) on the
        Super Nintendo Entertainment System as Mario and Luigi's sidekick. Yoshi later starred
        in platform and puzzle games, including Super Mario World 2: Yoshi's Island, Yoshi's Story
        and Yoshi's Woolly World. Yoshi also appears in many of the Mario spin-off games, including
        Mario Party and Mario Kart, various Mario sports games, and Nintendo's crossover fighting
        game series Super Smash Bros. Yoshi belongs to the species of the same name, which is
        characterized by their variety of colors.
      </p>
      <p>
        Source:{' '}
        <a href="https://en.wikipedia.org/wiki/Yoshi" target="_blank">
          Wikipedia
        </a>
      </p>
    </TabPanel>
    <TabPanel>
      <p>
        <h3>WebPress Hosting</h3>. Created by Japanese video game designer Shigeru Miyamoto,
        he is portrayed as a citizen of the Mushroom Kingdom and is one of Princess Peach's most loyal
        attendants; constantly working on her behalf. He is usually seen as a non-player character (NPC)
        who provides assistance to Mario and his friends in most games, but there are times when Toad(s)
        takes center stage and appears as a protagonist, as seen in Super Mario Bros. 2, Wario's Woods,
        Super Mario 3D World, and Captain Toad: Treasure Tracker.
      </p>
      <p>
        Source:{' '}
        <a href="https://en.wikipedia.org/wiki/Toad_(Nintendo)" target="_blank">
          Wikipedia
        </a>
      </p>
    </TabPanel>
    <TabPanel>
      <p>
      <h3>Email Hosting</h3>
        Mario franchise. Created by Japanese video game designer Shigeru Miyamoto,
        he is portrayed as a citizen of the Mushroom Kingdom and is one of Princess Peach's most loyal
        attendants; constantly working on her behalf. He is usually seen as a non-player character (NPC)
        who provides assistance to Mario and his friends in most games, but there are times when Toad(s)
        takes center stage and appears as a protagonist, as seen in Super Mario Bros. 2, Wario's Woods,
        Super Mario 3D World, and Captain Toad: Treasure Tracker.
      </p>
      <p>
        Source:{' '}
        <a href="https://en.wikipedia.org/wiki/Toad_(Nintendo)" target="_blank">
          Wikipedia
        </a>
      </p>
    </TabPanel>
    <TabPanel>
      <p>
      <h3>Vps Hosting Servers</h3>
        Mario franchise. Created by Japanese video game designer Shigeru Miyamoto,
        he is portrayed as a citizen of the Mushroom Kingdom and is one of Princess Peach's most loyal
        attendants; constantly working on her behalf. He is usually seen as a non-player character (NPC)
        who provides assistance to Mario and his friends in most games, but there are times when Toad(s)
        takes center stage and appears as a protagonist, as seen in Super Mario Bros. 2, Wario's Woods,
        Super Mario 3D World, and Captain Toad: Treasure Tracker.
      </p>
      <p>
        Source:{' '}
        <a href="https://en.wikipedia.org/wiki/Toad_(Nintendo)" target="_blank">
          Wikipedia
        </a>
      </p>
    </TabPanel>
    <TabPanel>
      <p>
      <h3>Free Hosting</h3>
        Mario franchise. Created by Japanese video game designer Shigeru Miyamoto,
        he is portrayed as a citizen of the Mushroom Kingdom and is one of Princess Peach's most loyal
        attendants; constantly working on her behalf. He is usually seen as a non-player character (NPC)
        who provides assistance to Mario and his friends in most games, but there are times when Toad(s)
        takes center stage and appears as a protagonist, as seen in Super Mario Bros. 2, Wario's Woods,
        Super Mario 3D World, and Captain Toad: Treasure Tracker.
      </p>
      <p>
        Source:{' '}
        <a href="https://en.wikipedia.org/wiki/Toad_(Nintendo)" target="_blank">
          Wikipedia
        </a>
      </p>
    </TabPanel>
  </Tabs>
  )
}

export default TabsCard