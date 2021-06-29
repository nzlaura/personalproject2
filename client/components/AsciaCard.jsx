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

function AsciaCard () {
  const classes = useStyles()

  return (
    <>

      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          Navigating Allergy Plans
          </Typography>
          <Typography variant="h5" component="h2">
          Anaphylaxis Plan
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          When you or your child is diagnosed with a food allergy, your GP or
        specialist will likely write you an action plan. Within NZ it is common to
        use an ASCIA action plan. Here you can see the three different kinds offered
          </Typography>
          <Typography variant="body2" component="p">
              These action plans have important information- symptoms to look out for,
              allergens, and treatment plan information.
            <br />

          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"><a href="https://www.allergy.org.au/hp/anaphylaxis/ascia-action-plan-for-anaphylaxis">Learn More</a></Button>
        </CardActions>
      </Card>
    </>
  )
}

export default AsciaCard
