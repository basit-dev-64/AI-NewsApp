import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import classNames from 'classnames'
import classes from "./NewsCard.module.css"

/**
* @author
* @function NewsCard
**/

 const NewsCard = ({article: {description , publishedAt , source ,title,url,urlToImage } , index , activeArticle}) => {
  return(
   <Card className={classNames(classes.card,activeArticle===index ? classes.activeCard:'')}>
    <CardActionArea href={url} target='blank'>
        <CardMedia className={classes.media} image={urlToImage} />
          <div className={classes.details}>
            <Typography variant='body2' color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
            <Typography variant='body2' color="textSecondary" component="h2">{source.name}</Typography>
          </div>
          <Typography className={classes.title} align='left'   gutterBottom variant='h6'>{title}</Typography>
          <CardContent>
            <Typography align='left' variant='body2' color='textSecondary' component='p'>{description}</Typography>
          </CardContent>
    </CardActionArea>
    <CardActions className={classes.cardActions}>
        <Button >Learn More</Button>
        <Typography variant='h5' color="textSecondary">{index}</Typography>
    </CardActions>
   </Card>
   )

 }

 export default NewsCard