import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
// import { Link } from 'react-dom'

function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

function a11yProps (index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

export default function Sidebar () {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Ascia Plans" {...a11yProps(0)} />
        <Tab label="Specialists" {...a11yProps(1)} />
        <Tab label="Child Disability Allowance" {...a11yProps(2)} />
        <Tab label="Epipens and the Epiclub" {...a11yProps(3)} />
        <Tab label="Recipes" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        ASCIA Plans

      </TabPanel>
      <TabPanel value={value} index={1}>
        Specialists
      </TabPanel>
      <TabPanel value={value} index={2}>
       Child Disability Allowance
      </TabPanel>
      <TabPanel value={value} index={3}>
        Epipens and the Epiclub
      </TabPanel>
      <TabPanel value={value} index={4}>
        Recipes
      </TabPanel>
    </div>
  )
}
