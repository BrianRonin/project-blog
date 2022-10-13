import { Meta, Story } from '@storybook/react/types-6-0'
import { theme } from '../../styles/theme'
import { NavLink, navLinkProps } from './nav_link'

export default {
  title: 'MenuLink',
  component: NavLink,
  args: {
    children: 'children',
    link: 'google.com',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta

export const Template: Story<navLinkProps> = (args) => {
  return (
    <>
      <div
        style={{
          maxWidth: '320px',
          background: theme.colors.primary,
          padding: theme.spacings.large,
        }}
      >
        <NavLink {...args} />
        <NavLink {...args} />
        <NavLink {...args} />
        <NavLink {...args} />
        <NavLink {...args} />
      </div>
      <p>
        Gleeson atom luthor vicki. Rhino vale batgirl,
        zatanna bane outsider bullock clock supergirl knight
        selina mad. Abbott bennett metallo bane grey ragman
        dent falcone. Mad arrow thorne rupert flash robin
        alcor atom wayne mister. Czonk, boomerang knight
        society. Rhino kane prey gearhead ragman. Lucius
        temblor thomas, zucco thomas shade crane. Echo
        boomerang, raatko face gleeson. Gordon martha
        batarang pit clayface crane! Two bullock bullock
        thorne shadow tumbler arkham night tumbler bullock
        bat cypher blake? Gargoyle knight nyssa, batcave
        gargoyle. Batgirl blink batmobile lantern nyssa
        nyssa clench aquaman azrael outsider. Pennyworth
        hatter crane damian. Cain wing solomon.
      </p>
      <p>
        Alcor barbara martha blake? Wayne crane luthor
        canary zatanna arkham of? Nocturna sinestro, kane
        aquaman. Lynx abdullah clayface toymaker. Bullock
        flash anarky toymaker, owl robin. Thorne harlequin
        echo zucco thorne fox barrow wing ragman freeze joe.
        Aiko alcor ragman rhino doom lantern dick solomon!
        Batarang clayface night red wayne firefly abbott
        snake fairchild drake gordon catwoman. Two croc
        checkmate ventriloquist raatko amanda falcone.
        Abattoir carmine green vicki echo creeper hugo tim
        cypher smoke tumbler! Nigma strange a?
      </p>
      <p>
        Clayface of kane batgirl azrael. Mad al young shade
        caird rose ragman blink aiko a society. Azrael
        deathstroke katana alcor, doom drake mister
        cluemaster? Alfred carmine joker jim spoiler clock
        caird shadow joe. Prey rumor vicki batarang batman
        lazarus ghul barbara. Society ghul master jason
        harvey riddler ragman nyssa knight. Swamp nocturna
        owl catwoman helena edward batman clayface jason.
        Riddler cobblepot.
      </p>
      <p>
        Alcor drake creeper shade phantom czonk blue. Edward
        outsider luthor firefly, barrow swamp riddler arrow!
        Pit swamp joe cain jester. Collector superman chill
        abdullah solomon gleeson zucco rose. Metallo mask,
        robin clayface knight cobblepot hugo tim ragdoll.
        Drake smoke pit abdullah blue elongated red red
        charlatan. Sinestro amanda azrael, batarang al echo.
        Rose jester jason prey ventriloquist chill shadow
        league.
      </p>
      <p>
        Hammer nyssa shrike rhino montoya spectre spectre.
        Owl the tumbler swamp quinn? Thorne diamond alcor
        shadow martha hammer temblor wing. Nocturna diamond
        nocturna kobra strange firebug falcone zatanna
        anarky batgirl. Nyssa bat arrow batgirl robin fright
        pennyworth falcone green killer zeus gearhead.
        Anarky anarky firebug tally atkins clock dent
        hangman jester al snake todd. Clench beetle red
        scorn smoke. Batmobile calendar edward harvey faith
        deathstroke supergirl. Kobra killer, hammer montoya.
        Lex; quinn bruce maroni arkham black al croc zucco.
        Dick firefly shrike, oracle katana thomas? Rupert
        justice ali manor blink quinn bane helena killer
        arkham. Dick pit.
      </p>
    </>
  )
}
