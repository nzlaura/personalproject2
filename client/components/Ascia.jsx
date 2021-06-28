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

function Ascia () {
  const classes = useStyles()

  return (
    <>
      <h2>Navigating Allergy Plans</h2>
      <p>When you or your child is diagnosed with a food allergy, your GP or
        specialist will likely write you an action plan. Within NZ it is common to
        use an ASCIA action plan. Here you can see the three different kinds offered
      <a href src="https://www.allergy.org.au/hp/anaphylaxis/ascia-action-plan-for-anaphylaxis">Link to ASCIA official website here</a>
      </p>

      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
         Anaphylaxis Plan
          </Typography>
          <Typography variant="h5" component="h2">
          Anaphylaxis
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          adjective
          </Typography>
          <Typography variant="body2" component="p">
          well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  )
}

export default Ascia
