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

function SpecialistCard () {
  const classes = useStyles()

  return (
    <>

      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
              Second opinions and extra support
          </Typography>
          <Typography variant="h5" component="h2">
              Private Allergy Specialists
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
             If you feel that you are not getting enough support from the public health
             system, or if you want a second opinion, there are a few allergy and immunology
             specialists throughout
             NZ that can see you privately.
          </Typography>
          <Typography variant="body2" component="p">
            There are many reasons you may want to see a private specialist, so here is a link
            containing some of available doctors in NZ.
            <br />

          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"><a href="http://www.allergy.org.nz/Allergy+help/Allergy+specialists+and+other+useful+contacts.html">Allergy and Immunology Specialists</a></Button>
        </CardActions>
      </Card>
    </>
  )
}

export default SpecialistCard
