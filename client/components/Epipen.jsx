// render info about epi pens and epi club

import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})

function Epipen () {
  const classes = useStyles()

  return (
    <>

      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
        Accessing epipens for severe allergies
          </Typography>
          <Typography variant="h5" component="h2">
          Epi Pens and the Epi Club
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Epipens are not a subsidised medication in New Zealand. Currently the
            cheapest place to purchase them is through the <a href="https://www.allergypharmacy.co.nz/shop/Allergy/EpiPen.html">
                Allergy Pharmacy</a> online store
          </Typography>
          <Typography variant="body2" component="p">
              The Epi club offers a small portion of money back when you buy an epipen.
              They also send you an information pack when you join- including a comic
              to explain anaphylaxis to older children and a trainer epipen
            <br />

          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"><a href="https://epiclub.co.nz/">Epi Club Link</a></Button>
        </CardActions>
      </Card>
    </>
  )
}

export default Epipen
