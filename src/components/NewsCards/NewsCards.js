import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import { Container, Grid, Grow, Typography } from '@mui/material'
import classes from "./NewsCards.module.css"

const infoCards = [
  { color: '#798777', title: 'Latest News', text: 'Give me the latest news' },
  { color: '#9DAB86', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
  { color: '#9DAB86', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'Show me the latest news on Football' },
  { color: '#798777', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];

/**
* @author
* @function NewsCards
**/


const NewsCards = (props) => {


  if (!props.articles.length) {
    return (
      <Container>
        <Grow in>
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {infoCards.map((infoCard) => (
              <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                  <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                  {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                  <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grow>
      </Container>
    )
  }

  return (
    <Container>
      <div class={classes.longcard}>
        <h2 class={classes.headertext}>Try Saying - "Open Article 2"</h2>
      </div>

      <Grow in>
        <Grid className={classes.container} container alignItems="stretch">
          {props.articles.map((article, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
              <NewsCard article={article} index={i + 1} activeArticle={props.activeArticle} />
            </Grid>
          ))}
        </Grid>
      </Grow>
    </Container>
  )

}

export default NewsCards