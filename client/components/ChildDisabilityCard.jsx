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

function ChildDisabilityCard () {
  const classes = useStyles()

  return (
    <>

      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
              Benefits to support Allergy Children
          </Typography>
          <Typography variant="h5" component="h2">
              Child Disability Allowance
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
             One of the supports available to children in NZ is the Child Disability Allowance.
             This is a benefit which is not means tested- it is awarded based on the extra
             time it takes to care for children with medical conditions including food allergies.
          </Typography>
          <Typography variant="body2" component="p">
                  You will need a form for the CDA signed by your specialist or GP, agreeing
                  that there is extra time and care involved with looking after your child.
            <br />

          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"><a href="https://www.workandincome.govt.nz/products/a-z-benefits/child-disability-allowance.html">Work and Income CDA</a></Button>
        </CardActions>
      </Card>
    </>
  )
}

export default ChildDisabilityCard
